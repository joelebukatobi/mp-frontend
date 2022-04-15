import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="container h-[8.8rem] mx-auto w-full mt-[4rem] px-[7.2rem]">
      <div className="w-full justify-between items-center pb-[2.4rem] border-b-[.15rem] border-black md:flex">
        <Link href="/">
          <svg className="h-[2.4rem] fill-black cursor-pointer" viewBox="0 0 129 17">
            <use href="/images/sprite.svg#logo" />
          </svg>
        </Link>
        <ul className="md:flex space-x-[6.4rem]">
          <Link href="/">
            <li className="font-Inter text-black hover:text-green hover:font-medium cursor-pointer">Home</li>
          </Link>
          <Link href="/blog">
            <li className="font-Inter text-black hover:text-green hover:font-medium cursor-pointer">Blog</li>
          </Link>
          <Link href="contact">
            <li className="font-Inter text-black hover:text-green hover:font-medium cursor-pointer">Contact</li>
          </Link>
        </ul>
        <div className="md:flex space-x-[4rem]">
          <Link href="https://facebook.com">
            <svg className="w-[2.4rem] h-[2.4rem] fill-blog cursor-pointer ">
              <use href="/images/sprite.svg#icon-facebook" />
            </svg>
          </Link>
          <Link href="https://twitter.com">
            <svg className="w-[2.4rem] h-[2.4rem] fill-blog cursor-pointer">
              <use href="/images/sprite.svg#icon-twitter" />
            </svg>
          </Link>
          <Link href="https://instagram.com">
            <svg className="w-[2.4rem] h-[2.4rem] fill-blog cursor-pointer">
              <use href="/images/sprite.svg#icon-instagram" />
            </svg>
          </Link>
        </div>
      </div>
    </nav>
  );
}
