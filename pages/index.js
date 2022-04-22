import { getPosts } from '@/services/index';
import Banner from '@/components/Banner';
import Layout from '@/components/Layout';
import PostCard from '@/components/PostCard';
export default function Home({ posts }) {
  return (
    <Layout>
      <section
        id="hero"
        className="h-[80rem] px-[7.2rem] flex items-center mt-[5.6rem] mb-[12rem] relative container mx-auto"
      >
        <div className="absolute flex left-0 justify-center -z-10 w-full px-[7.2rem]">
          <img src="/images/header-bg.svg" alt="" className="opacity-10 w-full" />
        </div>
        <div className="flex flex-col items-center justify-between w-full h-3/4">
          <div className="h-[24rem] w-[24rem] border-[.32rem] border-green bg-white overflow-hidden p-[.8rem] rounded-[50%]">
            <img src="/images/author-image.png" alt="" className="rounded-[50%] h-full w-full" />
          </div>
          <div className="flex flex-col items-center justify-between w-full bg-[#f4f9f9] py-[2.4rem] px-[1.6rem] space-y-[1.6rem]">
            <h1 className="text-black">Mell Pitcher</h1>
            <hr className="border-[.2rem] border-green w-[28.4rem]" />
            <p className="text-black text-center w-3/4 p-[2.4rem]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id aliquet purus, maecenas sodales eu diam enim
              sit. Egestas nunc non feugiat pharetra. Habitant adipiscing viverra ultrices nisl, at dictum orci, id
              urna. Sit a amet, ac mi facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id aliquet
              purus, maecenas sodales eu diam enim sit.
            </p>
          </div>
        </div>
      </section>

      {/* New Release */}
      <section id="release" className="container mx-auto px-[12rem] py-[6.4rem] flex justify-between items-center">
        <div className="space-y-[2.4rem] w-1/2">
          <div className="space-y-[1.6rem]">
            <p className="uppercase">New Release</p>
            <hr className="border-[.05rem] border-green w-[8rem]" />
          </div>
          <h2>Retribution</h2>
          <p className="leading-[3.0rem] w-[80%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id aliquet purus, maecenas sodales eu diam enim
            sit. Egestas nunc non feugiat pharetra. Habitant adipiscing viverra ultrices nisl, at dictum orci, id urna.
            Sit a amet, ac mi facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id aliquet purus,
            maecenas sodales eu diam enim sit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id aliquet
            purus, maecenas sodales eu diam enim sit. Egestas nunc non feugiat pharetra. Habitant adipiscing viverra
            ultrices nisl, at dictum orci, id urna. Sit a amet, ac mi facilisis. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Id aliquet purus, maecenas sodales eu diam enim sit.
          </p>
          <button className="h-[4.8rem] bg-green text-white rounded-[.8rem] px-[3.2rem] uppercase">Order Now</button>
        </div>

        <div className="container w-1/2 flex justify-end">
          <img src="/images/book-cover.png" alt="" className="h-full" />
        </div>
      </section>

      {/* Short Stories */}
      <section id="blog" className="container mx-auto px-[7.2rem] py-[12rem] space-y-[6.4rem]">
        <div className="space-y-[1.6rem] flex flex-col items-center">
          <p className="uppercase">Blog</p>
          <hr className="border-[.05rem] border-green w-[8rem]" />
          <h2>Short Stories</h2>
          <p className="w-[64rem] text-center">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqut enim ad minim{' '}
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
