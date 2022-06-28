import Link from 'next/link';

export default function Featured({ blogpost }) {
  return (
    <Link href={`/blog/${blogpost.attributes.slug}`}>
      <div className="flex flex-col space-y-[1.6rem] cursor-pointer shadow-[1px_1px_4px_rgba(0,0,0,0.1)] rounded-[1.6rem] hover:bg-gradient-to-b hover:from-white to-lightgreen">
        <div className="xl:h-[48rem] overflow-hidden rounded-[1.6rem]">
          <img className="w-[100%]" src={`${blogpost.attributes.image.data.attributes.formats.large.url}`} alt="" />
        </div>
        <div className="px-[2.4rem] pb-[2.4rem] md:pb-[1.6rem] space-y-[.8rem]">
          <h3>{blogpost.attributes.title}</h3>
          <p className="leading-[3rem]">
            {`${blogpost.attributes.description.substring(0, 300)}...`}

            <span className="text-green font-semibold">Read More</span>
          </p>
        </div>
      </div>
    </Link>
  );
}
