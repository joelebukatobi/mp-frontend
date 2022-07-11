import Link from 'next/link';
import { API_URL } from '@/config/index';
export default function Blogpost({ blogpost }) {
  return (
    <Link href={`/blog/${blogpost.attributes.slug}`}>
      <div className="flex flex-col md:flex-row justify-between items-center md:h-[20rem] cursor-pointer shadow-[1px_1px_4px_rgba(0,0,0,0.05)] rounded-[1.6rem] hover:bg-gradient-to-b hover:from-white to-lightgreen">
        <div className="rounded-[1.6rem] md:w-[34.5%] overflow-hidden md:h-full ">
          <img
            src={`${blogpost.attributes.image.data.attributes.formats.small.url}`}
            alt=""
            className="h-full w-full"
          />
        </div>
        <div className="md:w-[60.71%] space-y-[.8rem] p-[1.6rem] md:p-[0]">
          <h4 className="capitalize">{blogpost.attributes.title}</h4>
          <p className="leading-[2.4rem]">
            {`${blogpost.attributes.description.substring(0, 200)}...`}
            <span className="text-green font-medium">Read More</span>
          </p>
          <div className="">
            <Link href={`/blog/author/${blogpost.attributes.user.data.attributes.username}?`}>
              <p className="font-bold mr-[2.4rem]">
                {blogpost.attributes.user.data.attributes.username} &nbsp; | &nbsp; {blogpost.attributes.date}
              </p>
            </Link>
          </div>
        </div>
      </div>
    </Link>
  );
}
