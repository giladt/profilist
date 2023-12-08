import Logo from "@/components/atoms/logo";
import Header from "@/components/atoms/header";
import Text from "@/components/atoms/text";
import type { FC } from "react";
import type { NavbarProps } from "@/types/molecules";

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <header
      data-testid="navbar"
      className="flex w-full p-4 border-b border-b-red-500"
    >
      <nav className="flex gap-4 items-center">
        <Logo size={44} />
        <Header.Main size="md">
          <Text.bold>Profi List</Text.bold>
        </Header.Main>
      </nav>
    </header>
  );
};
export default Navbar;
