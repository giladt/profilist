import type { FC } from "react";
import type { Footer } from "@/types/molecules";

const Footer: FC<Footer> = ({}) => {
  return (
    <footer
      data-testid="footer"
      className="flex w-full px-4 py-2 border-t border-t-red-500"
    >
      Made with 🧡 in Berlin, 2023
    </footer>
  );
};
export default Footer;
