import Banner from '@/components/Banner';
import Layout from '@/components/Layout';
import PostCard from '@/components/PostCard';
import { API_URL } from '@/config/index';
const qs = require('qs');
export default function Home({ blogpost }) {
  return (
    <Layout>
      <section
        id="about"
        className="md:h-[80rem] px-[3.2rem] md:px-[4rem] lg:px-[4rem] flex md:items-center md:mt-[8rem] md:mb-[12rem] relative container mx-auto"
      >
        <div className="absolute top-0 flex left-0 md:justify-center -z-10 w-full xl:h-full px-[3.2rem] md:px-[4.8rem]">
          <img src="/images/header-bg.svg" alt="" className="opacity-50 w-full" />
        </div>
        <div className="flex flex-col items-center md:justify-between w-full  md:h-[100%]">
          <div className="h-[16rem] md:h-[24rem] my-[2.4rem] md:mt-[15%] xl:mt-[12%] w-[16rem] md:w-[24rem] border-[.24rem] md:border-[.32rem] border-green bg-white overflow-hidden p-[.4rem] md:p-[.8rem] rounded-[50%]">
            <img src="/images/author-image.png" alt="" className="rounded-[50%] md:h-auto w-full" />
          </div>
          <div className="flex flex-col items-center justify-between w-full bg-[#edf8f8] py-[2.4rem] px-0 md:px-[1.6rem] space-y-[1.6rem]">
            <h2 className="text-black">About Me</h2>
            <hr className="bg-green border-0 h-[.24rem] md:h-[.32rem] w-[12rem] md:w-[16rem]" />
            <p className="text-black p-[1.6rem] text-justify md:p-[2.4rem]">
              Mell Pitcher is an aspiring author who makes videos on the internet on story and storytelling as well as
              other miscellaneous fiction-related topics. He is growing his following and fostering a community on
              YouTube and TikTok. Mell's debut novel, a science fantasy called The Forger's Malice, is set to release in
              the middle of 2023. Raised in different parts of Africa, he is currently in Nigeria going through
              university and chasing a bachelor's degree. In the rare moments he isn't writing, you'll find him playing
              video games or watching anime.
            </p>
          </div>
        </div>
      </section>

      <section
        id="release"
        className="container flex justify-center mx-auto px-[3.2rem] md:px-[4rem] lg:px-[7.2rem] py-[8rem]  "
      >
        <div className=" w-[100%] md:w-[85%] lg:w-[100%] xl:w-[80%] flex flex-col-reverse lg:flex-row justify-between lg:items-center">
          <div className="flex flex-col items-center lg:items-start space-y-[4rem] lg:space-y-[2.4rem] lg:w-1/2">
            <div className="space-y-[1.6rem] hidden lg:block">
              <p className="uppercase">Coming Soon</p>
              <hr className="bg-green h-[.24rem] md:h-[.32rem] border-0 w-[8rem]" />
            </div>
            <h2 className="hidden lg:block">Retribution</h2>
            <p className="leading-[3.0rem] md:w-[80%] lg:w-[100%] text-justify lg:text-left">
              The Forger's Malice Put simply, Nobu is slowly going insane. Her grandfather went mad, she watched her
              father go mad, and she can feel herself fading. The Age of Information revealed magic on earth, which led
              to the Age of War and rendered the world shattered. Technology regressed and magic faded but there are
              those that cling to the arcane, and one such shadowforger has cursed Nobu's bloodline. She found out
              little past adolescence and ever since then she's vowed not to lose herself to the madness. But it's
              there, evolving, eating away at her mind like a virus. The world struggles to regain itself but technology
              has finally evolved to a place where she can take advantage of it. It's never been done before but Nobu
              believes the harmonization of technology and magic might be the solution. With the help of another
              researcher, Maya, against the public hate for the things her father did in his madness, against a mother
              who treats her like she's already gone, against a ticking time bomb in her head, Nobu refuses to go down
              without a fight.
            </p>
            <button className="h-[5.6rem] w-full hidden md:w-auto bg-green text-white rounded-[.8rem] px-[3.2rem] uppercase">
              Pre-Order
            </button>
          </div>
          <div className="container lg:w-1/2 flex flex-col items-center xl:items-end justify-center">
            <div className="space-y-[1.6rem] mb-[4rem] lg:mb-[2.4rem] flex flex-col items-center lg:hidden">
              <p className="uppercase">Coming Soon</p>
              <hr className="bg-green h-[.24rem] md:h-[.32rem] border-0 w-[8rem]" />
            </div>
            <div className="h-[56rem]">
              <img src="/images/book-cover-two.png" alt="" className="h-[100%] " />
            </div>
          </div>
        </div>
      </section>

      <section
        id="blog"
        className="container mx-auto px-[3.2rem] md:px-[4rem] lg:px-[7.2rem] py-[12rem] space-y-[6.4rem]"
      >
        <div className="space-y-[1.6rem] flex flex-col items-center">
          <p className="uppercase">Blog</p>
          <hr className="bg-green h-[.24rem] md:h-[.32rem] border-0 w-[8rem]" />
          <h2>Short Stories</h2>
          <p className="md:w-[64rem] text-center">A collection of short stories and blogposts</p>
        </div>

        <div className="flex flex-wrap justify-between gap-y-[6.4rem]">
          {blogpost.map((post) => (
            <PostCard key={post} post={post} />
          ))}
        </div>
      </section>

      <Banner />
    </Layout>
  );
}

export async function getServerSideProps() {
  const blogpost = qs.stringify(
    {
      populate: ['user', 'user.image', 'image'],
      sort: ['date:desc'],
      pagination: {
        start: 0,
        limit: 6,
      },
    },
    {
      encodeValuesOnly: true,
    }
  );

  const res = await fetch(`${API_URL}/api/blogs?${blogpost}`);
  const blog = await res.json();

  return {
    props: {
      blogpost: blog.data,
    },
  };
}
