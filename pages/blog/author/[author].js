import Link from 'next/link';
import { API_URL } from '@/config/index';
import Layout from '@/components/Layout';
import PostCard from '@/components/PostCard';
const qs = require('qs');

export default function Author({ author, posts }) {
  return (
    <Layout>
      <div className="container mx-auto px-[3.2rem] md:px-[4rem] lg:px-[7.2rem] w-full flex flex-col items-center space-y-[2.4rem] my-[12rem]">
        <div className="flex flex-col items-center space-y-[1rem]">
          <div className=" flex items-center justify-center rounded-[100%] overflow-hidden h-[24rem] w-[24rem] border-2">
            <img className="" src={author.image.formats.thumbnail.url} alt="" />
          </div>
          <h3 className="capitalize font-semibold">{author.username} ~ Blogpost's</h3>
          <h4 className="font-medium">{author.bio}</h4>
          <div className="flex space-x-[1.6rem]">
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

export async function getServerSideProps({ query: { author } }) {
  const blogpost = qs.stringify(
    {
      populate: ['user', 'user.image', 'image'],
      sort: ['date:desc'],
      filters: {
        user: {
          username: author,
        },
      },
    },
    {
      encodeValuesOnly: true,
    }
  );

  const res = await Promise.all([
    fetch(`${API_URL}/api/blogs?${blogpost}`),
    fetch(`${API_URL}/api/users?populate[0]=image&$filters[username][$eq]=${author}`),
  ]);
  const blog = await Promise.all(res.map((res) => res.json()));
  console.log(res);
  return {
    props: {
      posts: blog[0].data,
      author: blog[1][0],
    },
  };
}
