import Link from 'next/link';
import Layout from '@/components/Layout';
import { API_URL } from '@/config/index';
import Banner from '@/components/Banner';
import PostCard from '@/components/PostCard';
const qs = require('qs');

export default function BlogPost({ post, latest, category }) {
  return (
    <Layout>
      <section className="px-[3.2rem] md:px-[7.2rem] container flex mx-auto items-center w-full pt-[9.6rem]">
        <div className="md:w-[81.11%] flex flex-col items-center mx-auto  justify-center space-y-[3.2rem]">
          <h2 className="capitalize font-semibold">{post.attributes.title}</h2>
          <div className="flex items-center">
            <div className="flex items-center">
              <img
                className="rounded-[100%] h-[4rem] w-[4rem] mr-[1.6rem]"
                src={post.attributes.user.data.attributes.image.data.attributes.formats.small.url}
                alt=""
              />

              <Link href={`/blog/author/${post.attributes.user.data.attributes.username}?`}>
                <p className="font-bold cursor-pointer">{post.attributes.user.data.attributes.username}</p>
              </Link>
            </div>
            <hr className="h-[0.1rem] w-[2rem] border-none bg-black/20 outline-none rotate-90 " />
            <p className="text-black/60">{post.attributes.date}</p>
          </div>
          <p className="text-black w-[100%] text-center">{post.attributes.description}</p>
        </div>
      </section>
      <section className="px-[3.2rem] md:px-[7.2rem] pt-[6.4rem] lg:pt-[7.2rem] container flex mx-auto items-center w-full">
        <div className="lg:h-[56rem] w-[100%] overflow-hidden rounded-[3.2rem]">
          <img className="w-[100%]" src={post.attributes.image.data.attributes.formats.medium.url} alt="" />
        </div>
      </section>
      <section className="px-[3.2rem] md:px-[7.2rem] py-[6.4rem] lg:md:py-[7.2rem] container flex mx-auto justify-center ">
        <div className="flex flex-col md:flex-row justify-between w-[100%] lg:w-[81.11%]">
          <div className="flex flex-col md:w-[75%]">
            <h3 className="capitalize text-center md:text-left font-semibold">{post.attributes.heading}</h3>
            <p className="pt-[2.4rem] text-justify leading-[3.2rem]">{post.attributes.post}</p>
          </div>
          <div className="flex flex-col space-y-[8rem] my-[8rem] md:my-[0]">
            <div className="space-y-[2.4rem] flex flex-col items-center">
              <h5 className="uppercase font-semibold">SHARE THIS ON</h5>
              <hr className="h-[.1rem] block border-none bg-black/10 w-[100%]" />
              <div className=" flex md:flex-col items-center md:justify-center space-x-[2.4rem] md:space-x-[0] md:space-y-[2.4rem]">
                <Link href="https://facebook.com">
                  <svg className="w-[1.6rem] h-[1.6rem] fill-black cursor-pointer ">
                    <use href="/images/sprite.svg#icon-facebook" />
                  </svg>
                </Link>
                <Link href="https://twitter.com">
                  <svg className="w-[1.6rem] h-[1.6rem] fill-black  cursor-pointer">
                    <use href="/images/sprite.svg#icon-twitter" />
                  </svg>
                </Link>
                <Link href="https://instagram.com">
                  <svg className="w-[1.6rem] h-[1.6rem] fill-black  cursor-pointer">
                    <use href="/images/sprite.svg#icon-instagram" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="space-y-[2.4rem] flex flex-col items-center">
              <h5 className="uppercase font-semibold">CATEGORY</h5>
              <hr className="h-[.1rem] block border-none bg-black/10 w-[100%]" />
              <div className="flex md:flex-col items-center md:justify-center space-x-[2.4rem] md:space-x-[0] md:space-y-[1.6rem]">
                {category.map((category) => (
                  <Link href={`/blog/category/${category.attributes.name}?`}>
                    <li
                      className="list-none capitalize font-semibold cursor-pointer"
                      key={category.id}
                      category={category}
                    >
                      {category.attributes.name}
                    </li>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Banner />
      <section
        id="blog"
        className="container mx-auto px-[3.2rem] md:px-[4rem] lg:px-[7.2rem] py-[12rem] space-y-[6.4rem]"
      >
        <div className="space-y-[1.6rem] flex flex-col items-center">
          <p className="uppercase">Blog</p>
          <hr className="bg-green h-[.24rem] md:h-[.32rem] border-0 w-[8rem]" />
          <h2>Latest Posts</h2>
        </div>

        <div className="flex flex-wrap justify-between gap-y-[6.4rem]">
          {latest.map((post) => (
            <PostCard key={post} post={post} />
          ))}
        </div>
      </section>
    </Layout>
  );
}

export async function getServerSideProps({ query: { slug } }) {
  const query = qs.stringify(
    {
      populate: ['tags', 'user', 'user.image', 'image', 'category'],
    },
    {
      encodeValuesOnly: true,
    }
  );

  const latest = qs.stringify(
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

  const res = await Promise.all([
    fetch(`${API_URL}/api/blogs?filters[slug][$eq]=${slug}&${query}`),
    fetch(`${API_URL}/api/blogs?${latest}`),
    fetch(`${API_URL}/api/categories`),
  ]);
  const blog = await Promise.all(res.map((res) => res.json()));
  return {
    props: {
      post: blog[0].data[0],
      latest: blog[1].data,
      category: blog[2].data,
    },
  };
}

// export async function getStaticPaths() {
//   const res = await fetch(`${API_URL}/api/blogs`);
//   const blog = await res.json();
//   const paths = blog.data.map((post) => ({
//     params: { slug: post.attributes.slug },
//   }));
//   return {
//     paths,
//     fallback: true,
//   };
// }

// export async function getStaticProps({ params }) {
//   const res = await fetch(`${API_URL}/api/blogs?slug=${params.slug}`);

//   const blogs = await res.json();
//   const blog = blogs.data;

//   return {
//     props: {
//       post: blog[0],
//     },

//     revalidate: 1,
//   };
// }

// export async function getServerSideProps({ query: { slug } }) {
//   const res = await fetch(`${API_URL}/api/blogs/${slug}`);

//   const blogs = await res.json();
//   return {
//     props: {
//       post: blogs[0],
//     },
//   };
// }
