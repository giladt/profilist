import type { FC } from "react";
import type { DefaultLayout } from "@/types/layout";

import Navbar from "@/components/molecules/navbar";
import Footer from "@/components/molecules/footer";

const DefaultLayout: FC<DefaultLayout> = ({ children }) => {
  return (
    <div
      data-testid="layout"
      className={`flex min-h-screen flex-col items-center justify-between font-sans`}
    >
      <Navbar />
      <main className="flex flex-col p-4 w-full">{children}</main>
      <Footer />
    </div>
  );
};
export default DefaultLayout;
