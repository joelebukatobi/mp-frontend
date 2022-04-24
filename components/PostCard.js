export default function PostCard() {
  return (
    <div className="md:w-[30%] md:h-[48rem] p-[1.6rem] rounded-[2.4rem] bg-gradient-to-b from-white to-lightgreen flex flex-col justify-between">
      <img src="/images/blogpost-image-one.png" alt="" className="rounded-[2.4rem] mb-[1.6rem] w-[100%] h-[55%]" />
      <div className="h-[45%] flex flex-col justify-between">
        <h3>Blog Post One</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni beatae, reiciendis molestias sed fuga iste
          tempora dignissimos explicabo.
        </p>
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
