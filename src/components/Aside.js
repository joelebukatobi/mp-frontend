import Link from 'next/link';
export default function Aside({ blogpost }) {
  return (
    <Link href={`/blog/${blogpost.attributes.slug}`}>
      <div className="flex flex-col md:flex-row justify-between items-center lg:h-[27%] cursor-pointer shadow-[1px_1px_4px_rgba(0,0,0,0.05)] rounded-[2.4rem] md:rounded-[1.6rem] hover:bg-gradient-to-b hover:from-white to-lightgreen p-[1.6rem] md:p-[0] ">
        <div className="md:h-[18rem] md:w-[35%] lg:h-[100%] lg:w-[40%] xl:w-[48%] rounded-[2.4rem] md:rounded-[.8rem] overflow-hidden">
          <img
            src={`${blogpost.attributes.image.data.attributes.formats.small.url}`}
            alt=""
            className="h-full w-full"
          />
        </div>
        <div className="md:w-[60%] lg:w-[55%] xl:w-[48%] space-y-[.8rem] md:space-y-[.4rem] mt-[1.6rem] md:my-[0] lg:pr-[1.6rem]">
          <h5 className="capitalize text-[2rem] lg:text-[1.6rem]">{blogpost.attributes.title}</h5>
          <p>
            {`${blogpost.attributes.description.substring(0, 100)}...`} <span className="text-green">Read More</span>
          </p>
          {/* <Link href={`/blog/author/${blogpost.attributes.user.data.attributes.username}?`}>
            <h5 className="font-bold mr-[2.4rem]">{blogpost.attributes.user.data.attributes.username}</h5>
          </Link> */}
        </div>
      </div>
    </Link>
  );
}
