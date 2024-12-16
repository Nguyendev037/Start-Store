import React from "react";
import Container from "@/components/global/Container";

import CartButton from "./navbarComponents/CartButton";
import DarkMode from "./navbarComponents/DarkMode";
import LinksDropDown from "./navbarComponents/LinksDropDown";
import Logo from "./navbarComponents/Logo";
import NavSearch from "./navbarComponents/NavSearch";
import UserIcon from "./navbarComponents/UserIcon";

export default function NavBar() {
  return (
    <nav className="border-b">
      <Container className="flex flex-col sm:flex-row sm:justify-between sm:itmes-center flex-wrap py-8">
        <Logo />
        <NavSearch />
        <div className="flex gap-4 items-center">
          <CartButton />
          <DarkMode />
          <LinksDropDown />
        </div>
      </Container>
    </nav>
  );
}
