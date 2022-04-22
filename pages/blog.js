import Layout from '@/components/Layout';
import Banner from '@/components/Banner';

export default function Blog() {
  return (
    <Layout>
      {/* Header */}
      <div className="container mx-auto px-[3.2rem] md:px-[4rem] lg:px-[7.2rem] w-full flex flex-col items-center space-y-[2.4rem] my-[12rem]">
        <h1>Blogs and Article</h1>
        <p className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        </p>
        <form action="" className="relative flex items-center w-full md:w-1/2 overflow-hidden rounded-[.8rem]">
          <input
            type="email"
            placeholder="mail@example.com"
            className="w-full h-[7.2rem] px-[1.6rem] border-[.1rem] border-black/10 rounded-[.8rem]"
          />
          <button className="absolute right-0 h-[7.2rem] bg-black text-white px-[3.2rem] uppercase">Subscribe</button>
        </form>
      </div>

      <section className="px-[3.2rem] md:px-[4rem] lg:px-[7.2rem] container mx-auto grid grid-cols-[100%] md:grid-cols-[57.5%_37.5%] gap-x-[5%] mb-[8rem]">
        <div className="container flex flex-col justify-between h-[56rem] w-full ">
          <div className="mb-[5%] h-[2.4rem]">
            <h3>Featured Blog Post</h3>
          </div>
          <div className="h-[90%]">
            <img src="/images/featured-blogpost.png" alt="" className="rounded-[1.6rem] mb-[2.4rem]" />
            <p className="leading-[3.2rem] text-justify md:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptatibus minima velit repudiandae
              voluptate ab nesciunt maxime optio iste provident dicta odit ut quibusdam quam perspiciatis cum officiis,
              similique excepturi.
            </p>
          </div>
        </div>
        <div className="container flex flex-col justify-between h-[56rem] w-full">
          <div className="mb-[2.4rem] h-[5%]">
            <h3>Latest Post</h3>
          </div>
          <div className="h-[90%] flex flex-col justify-between">
            <div className="flex justify-between items-center h-[27%]">
              <div className="h-full w-[37%] rounded-[.8rem] overflow-hidden">
                <img src="/images/author-one.jpg" alt="" className="h-full w-full" />
              </div>
              <div className="w-[58%] space-y-[.4rem]">
                <h4>Blog Post or Short Story</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <p className="font-bold">Blog Author</p>
              </div>
            </div>
            <div className="flex justify-between items-center h-[27%]">
              <div className="h-full w-[37%] rounded-[.8rem] overflow-hidden">
                <img src="/images/author-two.jpg" alt="" className="h-full w-full" />
              </div>
              <div className="w-[58%] space-y-[.4rem]">
                <h4>Blog Post or Short Story</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <p className="font-bold">Blog Author</p>
              </div>
            </div>
            <div className="flex justify-between items-center h-[27%]">
              <div className="h-full w-[37%] rounded-[.8rem] overflow-hidden">
                <img src="/images/author-three.jpg" alt="" className="h-full w-full" />
              </div>
              <div className="w-[58%] space-y-[.4rem]">
                <h4>Blog Post or Short Story</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <p className="font-bold">Blog Author</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-[3.2rem] md:px-[4rem] lg:px-[7.2rem] grid grid-cols-[100%] grid-rows-1] md:grid-rows-[100%] md:grid-cols-[57.5%_37.5%] gap-x-[5%]  mb-[8rem]">
        <div className="container flex flex-col space-y-[4rem] mb-[4rem] md:mb-0">
          <div className="mb-[1.6rem] h-[2.4rem]">
            <h3>Blog Posts</h3>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center md:h-[20rem]">
            <div className="rounded-[1.6rem] mb-[2.4rem] md:mb-0  md:w-[34.5%] overflow-hidden md:h-full">
              <img src="/images/blogpost-image-two.jpg" alt="" className="h-full w-full" />
            </div>
            <div className="md:w-[60.71%] space-y-[.8rem]">
              <h4>Blog Post Hundred</h4>
              <p className="leading-[2.4rem]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptatibus minima velit repudiandae
                voluptate ab nesciunt maxime optio iste provident dicta odit ut.
              </p>
              <div className="flex items-center">
                <p className="font-bold mr-[2.4rem]">Author</p>
                <p>12 April, 2022</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center md:h-[20rem]">
            <div className="rounded-[1.6rem] mb-[2.4rem] md:mb-0  md:w-[34.5%] overflow-hidden md:h-full">
              <img src="/images/blogpost-image-two.jpg" alt="" className="h-full w-full" />
            </div>
            <div className="md:w-[60.71%] space-y-[.8rem]">
              <h4>Blog Post Hundred</h4>
              <p className="leading-[2.4rem]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptatibus minima velit repudiandae
                voluptate ab nesciunt maxime optio iste provident dicta odit ut.
              </p>
              <div className="flex items-center">
                <p className="font-bold mr-[2.4rem]">Author</p>
                <p>12 April, 2022</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center md:h-[20rem]">
            <div className="rounded-[1.6rem] mb-[2.4rem] md:mb-0  md:w-[34.5%] overflow-hidden md:h-full">
              <img src="/images/blogpost-image-two.jpg" alt="" className="h-full w-full" />
            </div>
            <div className="md:w-[60.71%] space-y-[.8rem]">
              <h4>Blog Post Hundred</h4>
              <p className="leading-[2.4rem]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptatibus minima velit repudiandae
                voluptate ab nesciunt maxime optio iste provident dicta odit ut.
              </p>
              <div className="flex items-center">
                <p className="font-bold mr-[2.4rem]">Author</p>
                <p>12 April, 2022</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center md:h-[20rem]">
            <div className="rounded-[1.6rem] mb-[2.4rem] md:mb-0  md:w-[34.5%] overflow-hidden md:h-full">
              <img src="/images/blogpost-image-two.jpg" alt="" className="h-full w-full" />
            </div>
            <div className="md:w-[60.71%] space-y-[.8rem]">
              <h4>Blog Post Hundred</h4>
              <p className="leading-[2.4rem]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptatibus minima velit repudiandae
                voluptate ab nesciunt maxime optio iste provident dicta odit ut.
              </p>
              <div className="flex items-center">
                <p className="font-bold mr-[2.4rem]">Author</p>
                <p>12 April, 2022</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center md:h-[20rem]">
            <div className="rounded-[1.6rem] mb-[2.4rem] md:mb-0  md:w-[34.5%] overflow-hidden md:h-full">
              <img src="/images/blogpost-image-two.jpg" alt="" className="h-full w-full" />
            </div>
            <div className="md:w-[60.71%] space-y-[.8rem]">
              <h4>Blog Post Hundred</h4>
              <p className="leading-[2.4rem]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptatibus minima velit repudiandae
                voluptate ab nesciunt maxime optio iste provident dicta odit ut.
              </p>
              <div className="flex items-center">
                <p className="font-bold mr-[2.4rem]">Author</p>
                <p>12 April, 2022</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center md:h-[20rem]">
            <div className="rounded-[1.6rem] mb-[2.4rem] md:mb-0  md:w-[34.5%] overflow-hidden md:h-full">
              <img src="/images/blogpost-image-two.jpg" alt="" className="h-full w-full" />
            </div>
            <div className="md:w-[60.71%] space-y-[.8rem]">
              <h4>Blog Post Hundred</h4>
              <p className="leading-[2.4rem]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptatibus minima velit repudiandae
                voluptate ab nesciunt maxime optio iste provident dicta odit ut.
              </p>
              <div className="flex items-center">
                <p className="font-bold mr-[2.4rem]">Author</p>
                <p>12 April, 2022</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row-start-1 md:col-start-2 flex md:flex-col flex-col-reverse">
          <div className="mb-[12rem] w-full ">
            <img src="/images/ads.png" alt="" className="w-full" />
          </div>
          <div className="container flex flex-col justify-between h-[56rem] w-full mb-[4rem] md:mb-0">
            <div className="mb-[2.4rem] h-[5%]">
              <h3>Recommended Posts</h3>
            </div>
            <div className="h-[90%] flex flex-col justify-between">
              <div className="flex justify-between items-center h-[27%]">
                <div className="h-full w-[37%] rounded-[.8rem] overflow-hidden">
                  <img src="/images/author-one.jpg" alt="" className="h-full w-full" />
                </div>
                <div className="w-[58%] space-y-[.4rem]">
                  <h4>Blog Post or Short Story</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                  <p className="font-bold">Blog Author</p>
                </div>
              </div>
              <div className="flex justify-between items-center h-[27%]">
                <div className="h-full w-[37%] rounded-[.8rem] overflow-hidden">
                  <img src="/images/author-two.jpg" alt="" className="h-full w-full" />
                </div>
                <div className="w-[58%] space-y-[.4rem]">
                  <h4>Blog Post or Short Story</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                  <p className="font-bold">Blog Author</p>
                </div>
              </div>
              <div className="flex justify-between items-center h-[27%]">
                <div className="h-full w-[37%] rounded-[.8rem] overflow-hidden">
                  <img src="/images/author-three.jpg" alt="" className="h-full w-full" />
                </div>
                <div className="w-[58%] space-y-[.4rem]">
                  <h4>Blog Post or Short Story</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                  <p className="font-bold">Blog Author</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Banner />
    </Layout>
  );
}
