import type { FC } from "react";
import type { TextProps } from "@/types/atoms";

const regular: FC<TextProps> = ({ children }) => {
  return <span className="font-normal">{children}</span>;
};

const bold: FC<TextProps> = ({ children }) => {
  return <span className="font-bold">{children}</span>;
};

const Text = {
  regular,
  bold,
};

export default Text;
