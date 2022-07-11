import { API_URL } from '@/config/index';
import Link from 'next/link';
import Layout from '@/components/Layout';
import PostCard from '@/components/PostCard';
const qs = require('qs');

export default function Category({ category, posts }) {
  return (
    <Layout>
      <div className="container mx-auto px-[3.2rem] md:px-[4rem] lg:px-[7.2rem] w-full flex flex-col items-center space-y-[2.4rem] my-[12rem]">
        <h1 className="capitalize font-semibold">Category ~ {category.attributes.name}</h1>
        <p className="text-center">{category.attributes.description}</p>
        <form action="" className="relative flex items-center w-full md:w-1/2 overflow-hidden rounded-[.8rem]">
          <input
            type="text"
            placeholder="Search Category"
            className="w-full h-[7.2rem] px-[1.6rem] border-[.1rem] border-black/10 rounded-[.8rem]"
          />
          <button className="absolute right-0 h-[7.2rem] bg-black text-white px-[3.2rem] uppercase">Search</button>
        </form>
      </div>
      <section className="px-[3.2rem] md:px-[7.2rem] container flex mx-auto items-center w-full py-[9.6rem]">
        <div className="w-full flex flex-col items-center mx-auto  justify-center space-y-[3.2rem]">
          <div className="flex flex-wrap gap-x-[5%] gap-y-[6.4rem]">
            {posts.map((post) => (
              <PostCard key={post} post={post} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export async function getServerSideProps({ query: { category } }) {
  const blogpost = qs.stringify(
    {
      populate: ['user', 'user.image', 'image', 'category'],
      sort: ['date:desc'],
      filters: {
        category: {
          name: category,
        },
      },
    },
    {
      encodeValuesOnly: true,
    }
  );

  const res = await Promise.all([
    fetch(`${API_URL}/api/blogs?${blogpost}`),
    fetch(`${API_URL}/api/categories?$filters[name][$eq]=${category}`),
  ]);
  const blog = await Promise.all(res.map((res) => res.json()));
  console.log(res);
  return {
    props: {
      posts: blog[0].data,
      category: blog[1].data[0],
    },
  };
}
