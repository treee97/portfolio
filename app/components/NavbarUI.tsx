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
import ThemeButton from "./ThemeButton";
import { Link } from "@nextui-org/link";
import Image from "next/image";
import { useState } from "react";

const NavbarUI = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const items = ["about", "projects", "contact"];

  return (
    <Navbar
      shouldHideOnScroll
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      isBordered
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
          <Link className="text-mytext" href="#about">
            {/* <Image
              src="/assets/icons/Home.svg"
              alt="about icon"
              width={48}
              height={48}
              className="text-mytext"
            /> */}
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-mytext" href="#projects">
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-mytext" href="#contact">
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
              className="text-mytext"
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
        <div className="mt-4">
          <ThemeButton />
        </div>
      </NavbarMenu>
    </Navbar>
  );
};

export default NavbarUI;
