'use client'
import { Navbar } from "flowbite-react";
import Image from "next/image";


export function Header() {
  return (
    <Navbar rounded fluid className="m-5">
      <Navbar.Brand href="/">
        <Image
          src="https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9nfGVufDB8fDB8fHww"
          width={50}
          height={50}
          className="mr-3 h-6 sm:h-9"
          alt="Happy Dogg Creations"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white invisible md:visible">
          Happy Dogg Creations
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/inventory">Inventory</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
        <Navbar.Link href="#">
          Cart
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
