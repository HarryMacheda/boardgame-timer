import React, { ReactNode } from "react";
import { Box, Container } from "@mui/material";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", width: "100%", justifyContent: "center", alignItems: "center" }}>
      {children}
    </Box>
  );
};

export default MainLayout;
