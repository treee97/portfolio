import Link from "next/link";
import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav
      className="rounded-md bg-white bg-opacity-40 z-20 py-2 flex items-center justify-around text-text
       
   "
    >
      <Link href="/" className="flex flex-col items-center justify-center ">
        <Image src="/assets/icons/Home.svg" alt="Home" width={32} height={32} />
        Home
      </Link>
      <Link
        href="#projects"
        className="flex flex-col items-center justify-center"
      >
        <Image
          src="/assets/icons/Work.svg"
          alt="Projects"
          width={32}
          height={32}
        />
        Projects
      </Link>
      <Link
        href="#contact"
        className="flex flex-col items-center justify-center"
      >
        <Image
          src="/assets/icons/Person.svg"
          alt="Contact"
          width={32}
          height={32}
        />
        Contact
      </Link>
    </nav>
  );
};

export default Navbar;
