'use client';
import { Navbar } from 'flowbite-react';
import { SessionProvider, signOut, useSession } from 'next-auth/react';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './header.css';

export function Header() {
  const { status } = useSession();

  const path = usePathname();
  return (
      <Navbar rounded fluid className='m-5 bg-transparent'>
        <Navbar.Brand as={Link} href='/'>
          <Image
            src='https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9nfGVufDB8fDB8fHww'
            width={50}
            height={50}
            className='invisible mr-3 h-6 sm:h-9 md:visible'
            alt='Happy Dogg Creations'
          />
          <span className='invisible self-center whitespace-nowrap text-xl font-semibold text-black md:visible'>
            Happy Dogg Creations
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link
            as={Link}
            href='/inventory'
            className={path === '/inventory' ? 'active' : ''}
          >
            Inventory
          </Navbar.Link>
          <Navbar.Link
            as={Link}
            href='/cart'
            className={path === '/cart' ? 'active' : ''}
          >
            Cart
          </Navbar.Link>
          {status === 'authenticated' ? (
            <Navbar.Link
              className='hover:cursor-pointer'
              onClick={() => signOut({ callbackUrl: '/' })}
            >
              Sign Out
            </Navbar.Link>
          ) : (
            <Navbar.Link
              as={Link}
              href='/login'
              className={
                path === '/register' || path === '/login' ? 'active' : ''
              }
            >
              Sign Up/Sign In
            </Navbar.Link>
          )}
        </Navbar.Collapse>
      </Navbar>
  );
}
