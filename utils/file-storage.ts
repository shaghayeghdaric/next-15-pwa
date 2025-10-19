/**
 * Utility functions for temporarily storing files in sessionStorage
 * This is used to handle file uploads that can't be serialized in Redux
 */

const FILE_STORAGE_KEY = "temp_receipt_file";

export const storeFileTemporarily = (file: File): void => {
  const reader = new FileReader();
  reader.onload = () => {
    const fileData = {
      name: file.name,
      size: file.size,
      type: file.type,
      lastModified: file.lastModified,
      content: reader.result as string,
    };
    sessionStorage.setItem(FILE_STORAGE_KEY, JSON.stringify(fileData));
  };
  reader.readAsDataURL(file);
};

export const getStoredFile = async (): Promise<File | null> => {
  try {
    const stored = sessionStorage.getItem(FILE_STORAGE_KEY);
    if (!stored) {
      return null;
    }

    const fileData = JSON.parse(stored);

    // Convert base64 back to File
    const response = await fetch(fileData.content);
    const blob = await response.blob();

    return new File([blob], fileData.name, {
      type: fileData.type,
      lastModified: fileData.lastModified,
    });
  } catch (error) {
    // biome-ignore lint/suspicious/noConsole: <explanation>
    console.error("Error retrieving stored file:", error);
    return null;
  }
};

export const clearStoredFile = (): void => {
  sessionStorage.removeItem(FILE_STORAGE_KEY);
};
