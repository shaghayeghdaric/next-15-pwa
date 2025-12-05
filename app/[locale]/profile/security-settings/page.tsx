import { Button, Stack, Typography } from "@mui/material";

const SecuritySettingsPage = () => {
  return (
    <Stack>
      <Typography variant="h1-bold">Security Settings</Typography>
      <Button variant="contained" color="primary" sx={{ mt: 4 }}>
        ENABLE 2FACTOR AUTHENTICATION
      </Button>
      <Button variant="contained" color="primary" sx={{ mt: 4 }}>
        RESET/CHANGE PASSWORD
      </Button>
    </Stack>
  );
};

export default SecuritySettingsPage;
