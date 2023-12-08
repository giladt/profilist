import ProfilistLogo from "@/assets/images/hardhat-64.png";

import type { FC } from "react";
import type { LogoProps } from "@/types/atoms";

export const Logo: FC<LogoProps> = ({ size }) => {
  return <img width={size} src={ProfilistLogo} alt="Profilist Logo" />;
};

export default Logo;
