import { Box } from "@mui/material";
import React from "react";

interface ICard {
  header: string;
  children?: React.ReactNode;
}

export const Card: React.FC<ICard> = ({ header, children }) => {
  return (
    <Box>
      <div>{header}</div>
      <div>{children}</div>
    </Box>
  );
};
