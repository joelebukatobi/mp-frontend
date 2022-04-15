export default function Footer() {
  return (
    <footer className="bg-purple/20">
      <div className="container mx-auto px-[7.2rem] py-[12rem] flex flex-col space-y-[5.6rem]">
        <div className="space-y-[1.6rem]">
          <svg className="h-[2.5rem] fill-black" viewBox="0 0 129 17">
            <use href="/images/sprite.svg#logo" />
          </svg>

          <div className="flex justify-between">
            <p className="text-black">Lorem ipsum dolor sit amet, consectetuipisicing elit,</p>

            <ul className="flex space-x-[6.4rem]">
              <li>
                <a href="">Recipes</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
              <li>
                <a href="">About Us</a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-[.1rem] border-purple/50 w-full" />
        <div className="flex justify-between">
          <p>
            © 2022 Mell Pitcher. Designed & Developed by{' '}
            <span className="text-orange hover:cursor-pointer">JetDev</span>
          </p>
          <div className="md:flex space-x-[4rem]">
            <svg className="w-[2.4rem] h-[2.4rem] fill-green">
              <use href="/images/sprite.svg#icon-facebook" />
            </svg>
            <svg className="w-[2.4rem] h-[2.4rem] fill-green">
              <use href="/images/sprite.svg#icon-twitter" />
            </svg>
            <svg className="w-[2.4rem] h-[2.4rem] fill-green">
              <use href="/images/sprite.svg#icon-instagram" />
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
}
