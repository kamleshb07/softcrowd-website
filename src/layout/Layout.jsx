import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollManager from "../components/ScrollManager";
import WhatsAppButton from "../components/WhatsAppButton";
const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollManager />
      <Header />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Layout;