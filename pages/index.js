import { getPosts } from '@/services/index';
import Banner from '@/components/Banner';
import Layout from '@/components/Layout';
import PostCard from '@/components/PostCard';
export default function Home({ posts }) {
  return (
    <Layout>
      <section
        id="about"
        className="h-[80rem] px-[3.2rem] md:px-[4rem] lg:px-[7.2rem] flex md:items-center mt-[8rem] md:mt-[5.6rem] md:mb-[12rem] relative container mx-auto"
      >
        <div className="absolute flex left-0 md:justify-center -z-10 w-full px-[3.2rem] md:px-[7.2rem]">
          <img src="/images/header-bg.svg" alt="" className="opacity-20 w-full" />
        </div>
        <div className="flex flex-col items-center md:justify-between w-full md:h-3/4">
          <div className="h-[24rem] mb-[2.4rem] md:mb-0 w-[24rem] border-[.24rem] md:border-[.32rem] border-green bg-white overflow-hidden p-[.8rem] rounded-[50%]">
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

      {/* New Release */}
      <section
        id="release"
        className="container mx-auto px-[3.2rem] md:px-[4rem] lg:px-[7.2rem] py-[6.4rem] flex flex-col-reverse md:flex-row justify-between items-center"
      >
        <div className="space-y-[2.4rem] md:w-1/2">
          <div className="space-y-[1.6rem] hidden md:block">
            <p className="uppercase">New Release</p>
            <hr className="bg-green h-[.24rem] md:h-[.32rem] border-0 w-[8rem]" />
          </div>
          <h2 className="hidden md:block">Retribution</h2>
          <p className="leading-[3.0rem] md:w-[80%] text-justify md:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id aliquet purus, maecenas sodales eu diam enim
            sit. Egestas nunc non feugiat pharetra. Habitant adipiscing viverra ultrices nisl, at dictum orci, id urna.
            Sit a amet, ac mi facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id aliquet purus,
            maecenas sodales eu diam enim sit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id aliquet
            purus, maecenas sodales eu diam enim sit. Egestas nunc non feugiat pharetra. Habitant adipiscing viverra
            ultrices nisl, at dictum orci, id urna. Sit a amet, ac mi facilisis. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Id aliquet purus, maecenas sodales eu diam enim sit.
          </p>
          <button className="h-[5.6rem] w-full md:w-auto bg-green text-white rounded-[.8rem] px-[3.2rem] uppercase">
            Order Now
          </button>
        </div>

        <div className="container md:w-1/2 flex justify-end">
          <img src="/images/book-cover.png" alt="" className="h-full" />
        </div>
      </section>

      {/* Short Stories */}
      <section
        id="blog"
        className="container mx-auto px-[3.2rem] md:px-[4rem] lg:px-[7.2rem] py-[12rem] space-y-[6.4rem]"
      >
        <div className="space-y-[1.6rem] flex flex-col items-center">
          <p className="uppercase">Blog</p>
          <hr className="bg-green h-[.24rem] md:h-[.32rem] border-0 w-[8rem]" />
          <h2>Short Stories</h2>
          <p className="md:w-[64rem] text-center">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqut enim ad minim
          </p>
        </div>

        <div className="flex flex-wrap gap-x-[5%] gap-y-[6.4rem]">
          {posts.map((post) => (
            <PostCard key={post.node.id} post={post.node} />
          ))}
        </div>
      </section>

      <Banner />
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts },
  };
}
