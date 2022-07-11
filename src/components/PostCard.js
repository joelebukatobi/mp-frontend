import Link from 'next/link';
export default function PostCard({ post }) {
  return (
    <Link href={`/blog/${post.attributes.slug}`}>
      <div className="md:w-[45%] lg:w-[30%] p-[1.6rem] rounded-[2.4rem] shadow-[1px_3px_4px_rgba(0,0,0,0.1)] flex flex-col  hover:bg-gradient-to-b hover:from-white to-lightgreen cursor-pointer">
        <img
          src={`${post.attributes.image.data.attributes.formats.small.url}`}
          alt=""
          className="rounded-[2.4rem] mb-[1.6rem] w-[100%] h-[55%]"
        />
        <div className="flex flex-col space-y-[1.6rem]">
          <h5 className="capitalize text-[2rem]">{`${post.attributes.title.substring(0, 26)}`}</h5>
          <p>
            {`${post.attributes.description.substring(0, 120)}...`}{' '}
            <span className="text-green font-semibold">Read More</span>
          </p>
          {/* <div className="flex space-x-[.8rem] items-center"> */}
          <div className="flex space-x-[.8rem] items-center">
            <div className="w-[2.4rem] h-[2.4rem] rounded-[100%] overflow-hidden">
              <img
                className="w-[100%] h-[100%]"
                src={post.attributes.user.data.attributes.image.data.attributes.formats.small.url}
                alt=""
              />
            </div>
            <Link href={`/blog/author/${post.attributes.user.data.attributes.username}?`}>
              <p className="font-bold">{post.attributes.user.data.attributes.username}</p>
            </Link>
          </div>
          {/* <svg className="w-[2.4rem] h-[2.4rem] fill-black">
            <use href="/images/sprite.svg#icon-category" />
          </svg> */}
          {/* </div> */}
        </div>
      </div>
    </Link>
  );
}
