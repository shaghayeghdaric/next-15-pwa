"use client";

import { useIsMobile } from "@/hooks/use-responsive";
import { Button, Stack, Typography } from "@mui/material";

const SecuritySettingsPage = () => {
  const isMobile = useIsMobile();
  return (
    <Stack>
      <Typography variant={isMobile ? "h4-bold" : "h1-bold"}>Security Settings</Typography>
      <Stack flexDirection={"column"} gap={4} sx={{ mt: 4 }}>
        <Button variant="contained" color="primary">
          ENABLE 2FACTOR AUTHENTICATION
        </Button>
        <Button variant="contained" color="primary">
          RESET/CHANGE PASSWORD
        </Button>
      </Stack>
    </Stack>
  );
};

export default SecuritySettingsPage;
