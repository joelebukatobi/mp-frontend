import { API_URL } from '@/config/index';
import { BLOG_COUNT } from '@/config/index';
import Layout from '@/components/Layout';
import PostCard from '@/components/PostCard';
import Aside from '@/components/Aside';
import Banner from '@/components/Banner';
import Featured from '@/components/Featured';
import Pagination from '@/components/Pagination';
const qs = require('qs');

export default function Blog({ posts, recommended, latest, featured, page }) {
  return (
    <Layout>
      {/* Header */}
      <div className="container mx-auto px-[3.2rem] md:px-[4rem] lg:px-[4.8rem] w-full flex flex-col items-center space-y-[2.4rem] my-[12rem]">
        <h1>Blogs and Article</h1>
        <p className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        </p>
        <form action="" className="relative flex items-center w-full md:w-1/2 overflow-hidden rounded-[.8rem]">
          <input
            type="text"
            placeholder="Search Blog"
            className="w-full h-[7.2rem] px-[1.6rem] border-[.1rem] border-black/10 rounded-[.8rem]"
          />
          <button className="absolute right-0 h-[7.2rem] bg-black text-white px-[3.2rem] uppercase">Search</button>
        </form>
      </div>
      <section className="h-[100%] px-[3.2rem] md:px-[10.4rem] lg:px-[4.8rem] container mx-auto grid grid-cols-[100%] lg:grid-cols-[50%_45%] xl:grid-cols-[57.5%_37.5%] gap-x-[5%] mb-[8rem] space-y-[4rem] md:space-y-[0]">
        <div className="h-[100%] container flex flex-col items-center md:items-start space-y-[3.2rem] lg:space-y-[1.6rem] w-full mb-[8rem] lg:mb-[0]">
          <div>
            <h3>Featured Blog Post</h3>
          </div>
          {featured.data.map((blogpost) => (
            <Featured key={blogpost.id} blogpost={blogpost} />
          ))}
        </div>
        <div className="h-[100%] container flex flex-col items-center md:items-start space-y-[3.2rem] lg:space-y-[1.6rem] w-full">
          <div>
            <h3>Latest Post</h3>
          </div>
          <div className="h-[100%] flex flex-col justify-between space-y-[5.6rem] lg:space-y-[0]">
            {latest.data.map((blogpost) => (
              <Aside key={blogpost.id} blogpost={blogpost} />
            ))}
          </div>
        </div>
      </section>
      <hr className="h-[.1rem] bg-black/10 border-none w-[100%]" />
      <section className="container mx-auto px-[3.2rem] md:px-[10.4rem] lg:px-[4.8rem] my-[8rem]">
        <div className="flex flex-wrap mx-auto justify-between gap-y-[6.4rem]">
          {posts.data.map((post) => (
            <PostCard key={post} post={post} />
          ))}
        </div>
      </section>
      <Banner />
    </Layout>
  );
}

export async function getServerSideProps({ query: { page = 1 } }) {
  const recommended = qs.stringify(
    {
      populate: ['user', 'image'],
      sort: ['date:desc'],
      filters: {
        tags: {
          name: {
            $eq: 'recommended',
          },
        },
      },
      pagination: {
        start: 0,
        limit: 2,
      },
    },
    {
      encodeValuesOnly: true,
    }
  );

  const featured = qs.stringify(
    {
      populate: ['user', 'image'],
      sort: ['date:desc'],
      filters: {
        tags: {
          name: {
            $eq: 'featured',
          },
        },
      },
      pagination: {
        start: 0,
        limit: 1,
      },
    },
    {
      encodeValuesOnly: true,
    }
  );

  const latest = qs.stringify(
    {
      populate: ['user', 'image'],
      sort: ['date:desc'],
      pagination: {
        start: 0,
        limit: 3,
      },
    },
    {
      encodeValuesOnly: true,
    }
  );

  const posts = qs.stringify(
    {
      populate: ['user', 'user.image', 'image'],
      sort: ['date:asc'],
      pagination: {
        start: +page === 1 ? 0 : (+page - 1) * BLOG_COUNT,
        limit: BLOG_COUNT,
      },
      filters: {
        $and: [
          {
            tags: {
              name: {
                $ne: 'recommended',
              },
            },
          },
          {
            tags: {
              name: {
                $ne: 'featured',
              },
            },
          },
        ],
      },
    },
    {
      encodeValuesOnly: true,
    }
  );

  const res = await Promise.all([
    fetch(`${API_URL}/api/blogs?${posts}`),
    fetch(`${API_URL}/api/blogs?${recommended}`),
    fetch(`${API_URL}/api/blogs?${latest}`),
    fetch(`${API_URL}/api/blogs?${featured}`),
  ]);
  const blog = await Promise.all(res.map((res) => res.json()));
  console.log(blog[0]);
  return {
    props: {
      posts: blog[0],
      recommended: blog[1],
      latest: blog[2],
      featured: blog[3],
      page: +page,
    },
  };
}
