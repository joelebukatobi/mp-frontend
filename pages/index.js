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
          <div className="flex flex-col items-center justify-between w-full bg-[#f4f9f9] py-[2.4rem] px-0 md:px-[1.6rem] space-y-[1.6rem]">
            <h2 className="text-black">About Me</h2>
            <hr className="bg-green border-0 h-[.24rem] md:h-[.32rem] w-[12rem] md:w-[16rem]" />
            <p className="text-black md:text-center md:w-3/4 p-[1.6rem] text-justify md:p-[2.4rem]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id aliquet purus, maecenas sodales eu diam enim
              sit. Egestas nunc non feugiat pharetra. Habitant adipiscing viverra ultrices nisl, at dictum orci, id
              urna. Sit a amet, ac mi facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id aliquet
              purus, maecenas sodales eu diam enim sit.
            </p>
          </div>
        </div>
      </section>

      <section
        id="release"
        className="container flex justify-center mx-auto px-[3.2rem] md:px-[4rem] lg:px-[7.2rem] py-[8rem]  "
      >
        <div className=" w-[100%] md:w-[85%] flex flex-col-reverse lg:flex-row justify-between xl:items-center">
          <div className="space-y-[4rem] lg:space-y-[2.4rem] lg:w-1/2">
            <div className="space-y-[1.6rem] hidden lg:block">
              <p className="uppercase">Coming Soon</p>
              <hr className="bg-green h-[.24rem] md:h-[.32rem] border-0 w-[8rem]" />
            </div>
            <h2 className="hidden lg:block">Retribution</h2>
            <p className="leading-[3.0rem] lg:w-[80%] text-justify lg:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id aliquet purus, maecenas sodales eu diam enim
              sit. Egestas nunc non feugiat pharetra. Habitant adipiscing viverra ultrices nisl, at dictum orci, id
              urna. Sit a amet, ac mi facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id aliquet
              purus, maecenas sodales eu diam enim sit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
              aliquet purus, maecenas sodales eu diam enim sit. Egestas nunc non feugiat pharetra. Habitant adipiscing
              viverra ultrices nisl, at dictum orci, id urna. Sit a amet, ac mi facilisis. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Id aliquet purus, maecenas sodales eu diam enim sit.
            </p>
            <button className="h-[5.6rem] w-full hidden md:w-auto bg-green text-white rounded-[.8rem] px-[3.2rem] uppercase">
              Pre-Order
            </button>
          </div>
          <div className="container lg:w-1/2 flex flex-col items-center justify-end">
            <div className="space-y-[1.6rem] mb-[4rem] lg:mb-[2.4rem] flex flex-col items-center lg:hidden">
              <p className="uppercase">Coming Soon</p>
              <hr className="bg-green h-[.24rem] md:h-[.32rem] border-0 w-[8rem]" />
            </div>
            <img src="/images/book-cover.png" alt="" className="h-full" />
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
          <p className="md:w-[64rem] text-center">Lorem ipsum dolor sit amet, consectetuipisicing elit.</p>
        </div>

        <div className="flex flex-wrap gap-x-[5%] gap-y-[6.4rem]">
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
