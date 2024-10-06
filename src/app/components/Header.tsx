"use client";
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Cart } from './icons/Cart';
import { Account } from './icons/Account';
import { Menu } from './icons/Menu';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    
    <header className='backdrop-blur-md bg-white/50 h-[100px] px-6 sm:pl-44 sm:pr-16 lg:pl-44 lg:pr-24 flex items-center justify-between fixed top-0 left-0 w-full z-50'>
      <Link href='/' className='text-4xl italic font-black mr-12'>
        Amazoff
      </Link>

      <nav className='hidden sm:grid grid-cols-2 gap-12 lg:gap-24 items-center'>
        <div className='flex space-x-4 lg:space-x-6'>
          <Link href='#' className='text-lg self-center'>
            Login
          </Link>
          <Link href='#'>
            <Button variant="default" className='w-[96px] h-10 text-lg'>Signup</Button>
          </Link>
        </div>

        <div className='flex space-x-4 lg:space-x-6'>
          <Link href='/cart' className='flex items-center'>
            <Cart className='w-6 h-6 sm:w-8 sm:h-8' />
          </Link>
          <Link href='/account' className='flex items-center'>
            <Account className='w-6 h-6 sm:w-8 sm:h-8' />
          </Link>
        </div>
      </nav>

      <div className='sm:hidden'>
        <button onClick={() => setMenuOpen(!menuOpen)}>
          <Menu className='w-6 h-6' />
        </button>
      </div>

      {menuOpen && (
        <nav className='absolute top-[100px] left-0 w-full bg-white backdrop-blur-lg shadow-lg px-6 py-4 sm:hidden'>
          <ul className='flex flex-col space-y-4'>
            <li>
              <Link href='#' className='text-lg' onClick={() => setMenuOpen(false)}>
                Login
              </Link>
            </li>
            <li>
              <Link href='#'>
                <Button variant="default" className='w-full h-10 text-lg' onClick={() => setMenuOpen(false)}>Signup</Button>
              </Link>
            </li>
            <li>
              <Link href='/cart' className='flex items-center' onClick={() => setMenuOpen(false)}>
                <Cart className='w-6 h-6' />
                <span className='ml-2'>Cart</span>
              </Link>
            </li>
            <li>
              <Link href='/account' className='flex items-center' onClick={() => setMenuOpen(false)}>
                <Account className='w-6 h-6' />
                <span className='ml-2'>Account</span>
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
