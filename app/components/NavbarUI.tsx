"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import Image from "next/image";
import { useState, useReducer } from "react";

const NavbarUI = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const items = ["about", "projects", "contact"];

  return (
    <Navbar
      shouldHideOnScroll
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      isBordered
      className="shadow-inner shadow-slate-500"
    >
      <NavbarBrand>
        <Link href="/">
          <Image
            src="/assets/icons/treelogobgblack.svg"
            alt="tree's icon"
            width={48}
            height={48}
          />
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarItem>
          <Link color="primary" href="#about">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="primary" href="#projects">
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="primary" href="#contact">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
      {/* mobile view */}
      <NavbarContent className="sm:hidden" justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>
      <NavbarMenu>
        {items.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              href={`#${item}`}
              color="primary"
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default NavbarUI;
