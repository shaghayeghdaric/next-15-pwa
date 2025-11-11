import { Stack } from "@mui/material";
import SigninForm from "./_components/SigninForm";

const SigninPage = () => {
  return (
    <Stack
      sx={{
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        mt: 10,
      }}
    >
      <SigninForm />
    </Stack>
  );
};

export default SigninPage;
