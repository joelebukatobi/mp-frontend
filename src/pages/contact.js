import Link from 'next/link';
import Layout from '@/components/Layout';
export default function Contact() {
  return (
    <Layout>
      <section
        id="hero"
        className="container mx-auto w-full flex flex-col md:flex-row justify-between items-center px-[3.2rem] md:px-[4rem] lg:px-[4.8rem] mt-[8rem] mb-[12rem]"
      >
        <div className="md:w-[45%] text-black">
          <div className="space-y-[1.6rem]">
            <p className="uppercase">Contact Us</p>
            <hr className="bg-green h-[.24rem] md:h-[.32rem] border-0 w-[8rem]" />
            <h3>
              Hello <br />
              Let's Get In Touch
            </h3>
            <p className="text-justify md:text-left leading-[3.2rem] w-[70%]">
              For professional and business inquiries you can reach us via the form on this page or you can send an
              email to Mell at
              <em className="font-black"> authormellpitcher@gmail.com</em> as well.
            </p>
          </div>
        </div>
        <form className="flex flex-col w-full md:w-[45%] mt-[6.4rem] md:mt-0 space-y-[2.4rem]">
          <div className="flex flex-col space-y-[.8rem]">
            <label htmlFor="name" className="text-green">
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
            <label htmlFor="email" className="text-green">
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
            <label htmlFor="message" className="text-green">
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
          <button className="bg-green rounded-[.8rem] h-[5.6rem] uppercase text-white ">Send Message</button>
        </form>
      </section>
    </Layout>
  );
}
