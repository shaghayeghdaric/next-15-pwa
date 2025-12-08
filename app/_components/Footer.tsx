"use client";

import { useIsMobile } from "@/hooks/use-responsive";
import { Stack, Typography } from "@mui/material";

const footerInfo = [
  {
    title: "PLATFORM",
    items: [
      { name: "INVESTMENT PLANS", link: "" },
      { name: "TRADING SIGNALS", link: "" },
      { name: "EDUCATION HUB", link: "" },
    ],
  },
  {
    title: "COMPANY",
    items: [
      { name: "ABOUT US", link: "" },
      { name: "CONTACT", link: "" },
    ],
  },
  {
    title: "SUPPORT",
    items: [
      { name: "LIVE CHAT", link: "" },
      { name: "SECURITY", link: "" },
    ],
  },
];

const socials = [
  { name: "Facebook", link: "/images/icons/footer/facebook.svg" },
  { name: "Twitter", link: "/images/icons/footer/x.svg" },
  { name: "Instagram", link: "/images/icons/footer/instagram.svg" },
  { name: "LinkedIn", link: "/images/icons/footer/linkedin.svg" },
  { name: "YouTube", link: "/images/icons/footer/youtube.svg" },
];
const Footer = () => {
  const isMobile = useIsMobile();
  return (
    <Stack
      justifyContent={"center"}
      sx={{
        background: "linear-gradient(180deg, #00336C 42.36%, #02264E 100%);",
        gap: { xs: 5, md: 10 },
        p: { xs: 5, md: 10 },
        mt: 10,
      }}
    >
      <Stack
        flexDirection={isMobile ? "column" : "row"}
        justifyContent={"center"}
        alignItems={"start"}
        sx={{ gap: { xs: 5, md: 10 } }}
      >
        <Stack
          sx={{
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <Typography variant={isMobile ? "h6-bold" : "h4-bold"}>CRYPTO INVEST PRO</Typography>
        </Stack>
        <Typography variant={isMobile ? "p3-regular" : "h6-regular"}>
          THE WORLD 'S MOST TRUSTED CRYPTOCURRENCY INVESTMENT AND TRADING PLATFORM. JOIN MILLIONS OF INVESTORS EARNING
          CONSISTENT PROFITS THROUGH OUR AL-POWERED SIGNALS AND GUARANTEED INVESTMENT PLANS.
        </Typography>
      </Stack>
      <Stack direction={"row"} justifyContent={"flex-start"} alignItems={"start"} gap={10}>
        {footerInfo.map((section, index) => (
          <Stack key={`footer-section-${index}-${section.title}`} gap={4}>
            <Typography variant={isMobile ? "p4-regular" : "p2-regular"}>{section.title}</Typography>
            <Stack gap={2}>
              {section.items.map((item, itemIndex) => (
                <Typography
                  key={`footer-item-${itemIndex}-${item.name}`}
                  variant={isMobile ? "p4-light" : "p2-light"}
                  sx={{ cursor: "pointer" }}
                >
                  {item.name}
                </Typography>
              ))}
            </Stack>
          </Stack>
        ))}
      </Stack>
      <Stack direction={"row"} gap={4} alignItems={"center"} justifyContent={"end"}>
        {socials.map((social, index) => (
          <img key={`social-icon-${index}-${social.name}`} src={social.link} alt={social.name} />
        ))}
      </Stack>
    </Stack>
  );
};

export default Footer;
