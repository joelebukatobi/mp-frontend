export default function PostCard({ post }) {
  return (
    <div className="w-[30%] h-[48] p-[1.6rem] rounded-[2.4rem] bg-gradient-to-b from-white to-lightgreen flex flex-col justify-between">
      <img src={post.featuredImage.url} alt="" className="rounded-[2.4rem] mb-[1.6rem] w-[100%] h-[55%]" />
      <div className="h-[45%]">
        <h3 className="mb-[.8rem]">{post.title}</h3>
        <p className="mb-[.8rem]">{post.content.text.substring(0, 150)}</p>
        <div className="flex space-x-[.8rem] items-center">
          <svg className="w-[2.4rem] h-[2.4rem] fill-black">
            <use href="/images/sprite.svg#icon-category" />
          </svg>
          <h5></h5>
        </div>
      </div>
    </div>
  );
}
