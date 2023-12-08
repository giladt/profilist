import type { FC } from "react";
import type { HeaderSizes, HeaderProps } from "@/types/atoms";

const getSize = (size: HeaderSizes) => {
  switch (size) {
    case "sm":
      return "text-lg";
    case "md":
      return "text-2xl";
    case "lg":
      return "text-4xl";
  }
};

const Main: FC<HeaderProps> = ({ size, children }) => {
  return <h1 className={getSize(size)}>{children}</h1>;
};

const Sub: FC<HeaderProps> = ({ size, children }) => {
  return <h2 className={getSize(size)}>{children}</h2>;
};

const Title: FC<HeaderProps> = ({ size, children }) => {
  return <h3 className={getSize(size)}>{children}</h3>;
};

export const Header = { Main, Sub, Title };
export default Header;
