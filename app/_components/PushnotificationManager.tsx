"use client";

import { useCallback, useEffect, useState } from "react";
import {
  sendNotification,
  subscribeUser,
  unsubscribeUser,
} from "../utils/actions";

function urlBase64ToUint8Array(base64String: string) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}
export default function PushNotificationManager() {
  const [isSupported, setIsSupported] = useState(false);
  const [subscription, setSubscription] = useState<PushSubscription | null>(
    null,
  );
  const [message, setMessage] = useState("");
  const [error, setError] = useState<string | null>(null);

  const registerServiceWorker = useCallback(async () => {
    const registration = await navigator.serviceWorker.register("/sw.js", {
      scope: "/",
      updateViaCache: "none",
    });
    const sub = await registration.pushManager.getSubscription();
    setSubscription(sub);
  }, []);

  useEffect(() => {
    console.log("Support check:");
    console.log("serviceWorker in navigator:", "serviceWorker" in navigator);
    console.log("PushManager in window:", "PushManager" in window);
    console.log("Notification in window:", "Notification" in window);
    console.log("window.isSecureContext:", window.isSecureContext);
    console.log("window.location.protocol:", window.location.protocol);

    if ("serviceWorker" in navigator && "PushManager" in window) {
      setIsSupported(true);
      registerServiceWorker().catch((err) => {
        console.error("Service worker registration failed:", err);
        setError(`Service worker registration failed: ${err.message}`);
      });
    } else {
      console.log("Push notifications not supported - missing features");
    }
  }, [registerServiceWorker]);

  async function subscribeToPush() {
    try {
      setError(null);

      // Check if notifications are supported and permission is granted
      if (!("Notification" in window)) {
        throw new Error("This browser does not support notifications");
      }

      // Request notification permission
      const permission = await Notification.requestPermission();

      if (permission === "denied") {
        throw new Error(
          "Notification permission denied. Please enable notifications in your browser settings.",
        );
      }

      if (permission !== "granted") {
        throw new Error(
          "Notification permission is required for push notifications",
        );
      }

      const registration = await navigator.serviceWorker.ready;
      const vapidKey = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY;

      if (!vapidKey) {
        throw new Error("VAPID key not configured");
      }

      const sub = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(vapidKey),
      });

      setSubscription(sub);
      const serializedSub = JSON.parse(JSON.stringify(sub));
      await subscribeUser(serializedSub);
    } catch (err) {
      console.error("Failed to subscribe to push notifications:", err);
      setError(
        err instanceof Error
          ? err.message
          : "Failed to subscribe to push notifications",
      );
    }
  }

  async function unsubscribeFromPush() {
    await subscription?.unsubscribe();
    setSubscription(null);
    await unsubscribeUser();
  }

  async function sendTestNotification() {
    if (subscription) {
      await sendNotification(message);
      setMessage("");
    }
  }

  if (!isSupported) {
    const hasServiceWorker = "serviceWorker" in navigator;
    const hasPushManager = "PushManager" in window;
    const hasNotification = "Notification" in window;
    const isSecure = window.isSecureContext;

    return (
      <div>
        <h3>Push Notifications - Not Supported</h3>
        <div style={{ fontSize: "14px", marginBottom: "10px" }}>
          <p>
            <strong>Browser Support Check:</strong>
          </p>
          <ul>
            <li>
              Service Worker:{" "}
              {hasServiceWorker ? "✅ Supported" : "❌ Not supported"}
            </li>
            <li>
              Push Manager:{" "}
              {hasPushManager ? "✅ Supported" : "❌ Not supported"}
            </li>
            <li>
              Notifications:{" "}
              {hasNotification ? "✅ Supported" : "❌ Not supported"}
            </li>
            <li>Secure Context (HTTPS): {isSecure ? "✅ Yes" : "❌ No"}</li>
            <li>Protocol: {window.location.protocol}</li>
          </ul>
        </div>
        {!isSecure && (
          <div
            style={{
              color: "orange",
              padding: "10px",
              border: "1px solid orange",
              borderRadius: "4px",
            }}
          >
            <strong>⚠️ Not a secure context!</strong>
            <br />
            Push notifications require HTTPS. The SSL certificate might not be
            trusted by your browser.
            <br />
            <br />
            <strong>Solutions:</strong>
            <ul>
              <li>Accept the SSL certificate in your browser</li>
              <li>Add the certificate to your device's trusted certificates</li>
              <li>Try accessing via desktop first to accept the certificate</li>
            </ul>
          </div>
        )}
      </div>
    );
  }

  return (
    <div>
      <h3>Push Notifications</h3>
      {error && (
        <div
          style={{
            color: "red",
            marginBottom: "10px",
            padding: "10px",
            border: "1px solid red",
            borderRadius: "4px",
          }}
        >
          {error}
        </div>
      )}
      {subscription ? (
        <>
          <p>You are subscribed to push notifications.</p>
          <button type="button" onClick={unsubscribeFromPush}>
            Unsubscribe
          </button>
          <input
            type="text"
            placeholder="Enter notification message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="button" onClick={sendTestNotification}>
            Send Test
          </button>
        </>
      ) : (
        <>
          <p>You are not subscribed to push notifications.</p>
          <button type="button" onClick={subscribeToPush}>
            Subscribe
          </button>
        </>
      )}
    </div>
  );
}
