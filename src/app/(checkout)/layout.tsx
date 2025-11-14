import Footer from "@/components/shared/Footer";
import MobileNav from "@/components/shared/MobileNav";
import Navbar from "@/components/shared/Navbar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="max-w-screen-2xl mx-auto">
      <Navbar  />
      <MobileNav />
      <section>{children}</section>
      <Footer />
    </main>
  );
};

export default Layout;