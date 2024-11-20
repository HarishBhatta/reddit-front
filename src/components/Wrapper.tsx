import { Box } from "@chakra-ui/react";
import React from "react";

interface wrapperProps {
  children: React.ReactNode;
  variant?: "small" | "regular";
}

export const Wrapper: React.FC<wrapperProps> = ({
  children,
  variant = "regular",
}) => {
  return (
    <Box
      maxW={variant === "regular" ? "800px" : "400px"}
      w={"100%"}
      mt={8}
      mx={"auto"}
    >
      {children}
    </Box>
  );
};
export default Wrapper;
