'use client';
import { Navbar } from 'flowbite-react';
import { signOut, useSession } from 'next-auth/react';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './header.css';
import adorableDog from '/public/adorable_dog.jpg'

export function Header() {
  const { status } = useSession();

  const path = usePathname();
  return (
      <Navbar rounded fluid className='m-5 bg-transparent'>
        <Navbar.Brand as={Link} href='/'>
          <Image
            src={adorableDog}
            width={50}
            className='mr-3'
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
