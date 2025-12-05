import { Stack } from "@mui/material";
import Header from "./Headr";
import Footer from "./Footer";

interface ContainerProps {
  children?: React.ReactNode;
}
const ContainerComponent: React.FC<ContainerProps> = ({ children }) => {
  return (
    <Stack minHeight="100vh" sx={{ width: "100%" }}>
      <Header />
      <Stack
        sx={{
          px: { xs: 2, sm: 4, md: 5, lg: 15, xl: 23 },
          py: { xs: 4, sm: 8, md: 16, lg: 24, xl: 34 },
          backgroundColor: "background.default",
          flex: 1,
          width: "100%",
          minHeight: { xs: "60vh", md: "70vh", lg: "75vh" },
          boxSizing: "border-box",
        }}
      >
        {children}
      </Stack>
      <Footer />
    </Stack>
  );
};

export default ContainerComponent;
