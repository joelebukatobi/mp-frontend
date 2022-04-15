import Link from 'next/link';
import Layout from '@/components/Layout';
export default function Contact() {
  return (
    <Layout>
      <section
        id="hero"
        className="container mx-auto w-full flex justify-between items-center px-[7.2rem] mt-[8rem] mb-[12rem]"
      >
        <div className="w-[45%] text-black">
          <div className="space-y-[1.6rem]">
            <p className="uppercase">Contact Us</p>
            <hr className="border-[.05rem] border-green w-[8rem]" />
            <h3>
              Hello <br />
              Let's Get In Touch
            </h3>
            <p className="leading-[3.2rem]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id aliquet purus, maecenas sodales eu diam enim
              sit. Egestas nunc non feugiat pharetra. Habitant adipiscing viverra ultrices nisl, at dictum orci, id
              urna. Sit a amet, ac mi facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id aliquet
              purus, maecenas sodales eu diam enim sit.
            </p>
          </div>

          <div className="space-y-[1.6rem] mt-[5.6rem]">
            <p className="">info@mellpitcher.com</p>
            <p>+234 81791883178</p>
          </div>
        </div>
        <form className="flex flex-col w-[45%] space-y-[2.4rem]">
          <div className="flex flex-col space-y-[.8rem]">
            <label htmlFor="name" className="text-black">
              Name
            </label>
            <input
              id="name"
              type="text"
              className="h-[6.4rem] bg-white/0 border-[.1rem] border-black/70 rounded-[.8rem] placeholder:text-black px-[1.6rem]"
              placeholder="John Doe"
            />
          </div>
          <div className="flex flex-col space-y-[.8rem]">
            <label htmlFor="email" className="text-black">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="h-[6.4rem] bg-white/0 border-[.1rem] border-black/70 rounded-[.8rem] placeholder:text-black px-[1.6rem]"
              placeholder="mail@example.com"
            />
          </div>
          <div className="flex flex-col space-y-[.8rem]">
            <label htmlFor="message" className="text-black">
              Message
            </label>
            <textarea
              name=""
              id="message"
              cols="30"
              rows="7"
              className="bg-white/0 border-[.1rem] border-black/70 rounded-[.8rem] text-black px-[1.6rem] py-[1.6rem]"
            >
              Hi, there
            </textarea>
          </div>
          <button className="bg-green rounded-[.8rem] h-[6.4rem] uppercase text-white w-1/3">Send Message</button>
        </form>
      </section>
    </Layout>
  );
}
