import { Stack } from "@mui/material";
import Header from "./Headr";
import Footer from "./Footer";

interface ContainerProps {
  children?: React.ReactNode;
}
const ContainerComponent: React.FC<ContainerProps> = ({ children }) => {
  return (
    <Stack
      sx={{
        px: 23,
        py: 34,
        backgroundColor: "background.default",
        height: "100%",
        width: "100%",
        flex: 1,
      }}
    >
      <Header />
      {children}
      <Footer />
    </Stack>
  );
};

export default ContainerComponent;
