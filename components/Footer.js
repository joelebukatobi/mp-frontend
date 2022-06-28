import Link from 'next/link';
export default function Footer() {
  return (
    <footer className="bg-purple/20">
      <div className="container mx-auto px-[3.2rem] md:px-[4rem] lg:px-[4.8rem] py-[12rem] flex flex-col space-y-[5.6rem]">
        <div className="space-y-[1.6rem]">
          <svg className="h-[2.5rem] fill-black" viewBox="0 0 129 17">
            <use href="/images/sprite.svg#logo" />
          </svg>

          <div className="flex flex-col md:flex-row justify-between">
            <p className="text-black md:w-[45%]">Lorem ipsum dolor sit amet, consectetuipisicing elit,</p>

            <ul className="flex flex-col mt-[4rem] md:mt-0 md:flex-row space-y-[.8rem] md:space-y-0 md:space-x-[4rem]">
              <Link href="/">
                <li>Home</li>
              </Link>
              <Link href="/blog">
                <li>Blog</li>
              </Link>
              <Link href="/contact">
                <li>Contact</li>
              </Link>
              <Link href="/#about">
                <li>About Us</li>
              </Link>
            </ul>
          </div>
        </div>

        <hr className="border-0 h-[.24rem] md:h-[.16rem] bg-purple/50 w-full" />
        <div className="flex flex-col md:flex-row justify-between">
          <p className="w-3/4 md:w-full">
            © 2022 Mell Pitcher. Designed & Developed by <span className="text-green hover:cursor-pointer">JetDev</span>
          </p>
          <div className="flex space-x-[1.6rem]  md:space-x-[4rem] mt-[2.4rem] md:mt-0">
            <svg className="w-[2.4rem] h-[2.4rem] fill-black">
              <use href="/images/sprite.svg#icon-facebook" />
            </svg>
            <svg className="w-[2.4rem] h-[2.4rem] fill-black">
              <use href="/images/sprite.svg#icon-twitter" />
            </svg>
            <svg className="w-[2.4rem] h-[2.4rem] fill-black">
              <use href="/images/sprite.svg#icon-instagram" />
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
}
