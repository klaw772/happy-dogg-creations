'use client'
import { Button, Navbar } from "flowbite-react";
import { SessionProvider, signOut, useSession } from "next-auth/react"

import Image from "next/image";
import Link from "next/link";


export function Header() {
  const {status } = useSession();
  return (
    <SessionProvider>
      <Navbar rounded fluid className="m-5">
        <Navbar.Brand as={Link} href="/">
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
          <Navbar.Link as={Link} href="/inventory">Inventory</Navbar.Link>
          <Navbar.Link as={Link} href="/cart">Cart</Navbar.Link>
          {status === "authenticated" ? (
            <Navbar.Link className="hover:cursor-pointer" onClick={() => signOut({callbackUrl: "/"})}>Sign Out</Navbar.Link>
          ) : (
            <Navbar.Link as={Link} href="/register">Sign Up/Sign In</Navbar.Link>
          )}
        </Navbar.Collapse>
      </Navbar>
    </SessionProvider>
  );
}
