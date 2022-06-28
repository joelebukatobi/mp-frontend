import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };

  return (
    <nav
      className={
        open
          ? `${'container mx-auto w-full h-[18rem] mt-[4rem]  px-[3.2rem] md:px-[4rem] lg:px-[7.2rem] border-b-black/5 border-b-[.08rem]'}`
          : `${'container mx-auto w-full h-[8.8rem] mt-[4rem] px-[3.2rem] md:px-[4rem] lg:px-[4.8rem]'}`
      }
    >
      <div className="w-full flex justify-between items-center pb-[2.4rem] md:border-b-[.15rem] border-black">
        <Link href="/">
          <svg className="w-[12.9rem] fill-black cursor-pointer" viewBox="0 0 129 17">
            <use href="/images/sprite.svg#logo" />
          </svg>
        </Link>
        <ul className={open ? `${'absolute top-[8.8rem]  space-y-[1.6rem]'}` : `${'hidden md:flex space-x-[6.4rem]'}`}>
          <Link href="/">
            <li className="font-Inter text-black hover:text-green hover:font-medium cursor-pointer">Home</li>
          </Link>
          <Link href="/blog">
            <li className="font-Inter text-black hover:text-green hover:font-medium cursor-pointer">Blog</li>
          </Link>
          <Link href="/contact">
            <li className="font-Inter text-black hover:text-green hover:font-medium cursor-pointer">Contact</li>
          </Link>
        </ul>
        <div className="hidden md:flex justify-between w-[12.9rem]">
          <Link href="https://facebook.com">
            <svg className="w-[2.4rem] h-[2.4rem] fill-black cursor-pointer ">
              <use href="/images/sprite.svg#icon-facebook" />
            </svg>
          </Link>
          <Link href="https://twitter.com">
            <svg className="w-[2.4rem] h-[2.4rem] fill-black  cursor-pointer">
              <use href="/images/sprite.svg#icon-twitter" />
            </svg>
          </Link>
          <Link href="https://instagram.com">
            <svg className="w-[2.4rem] h-[2.4rem] fill-black  cursor-pointer">
              <use href="/images/sprite.svg#icon-instagram" />
            </svg>
          </Link>
        </div>
        <div onClick={toggle} className="md:hidden">
          <svg className="w-[2.4rem] h-[2.4rem] fill-purple cursor-pointer">
            <use href="/images/sprite.svg#icon-menu" />
          </svg>
        </div>
      </div>
    </nav>
  );
}
