import { useState } from 'react';
import { API_URL } from '@/config/index';

export default function Banner() {
  const [email, setEmail] = useState('');
  const [open, setOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`${API_URL}/api/newsletters`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: { email: email },
      }),
    });

    const data = await res.json();
    console.log(data);

    if (data.status === 'Ok') {
      setOpen(true);
    }
  };

  const toggle = () => {
    setOpen(!open);
  };
  return (
    // Banner
    <section id="banner" className="bg-purple h-[48rem] relative flex items-center justify-center px-[3.2rem] md:px-0">
      <div className="absolute w-full h-full overflow-hidden">
        <img src="/images/banner-bg.png" alt="" className="w-full h-full  overflow-hidden opacity-40" />
      </div>
      <div className="relative z-10 w-full md:w-auto">
        <div className="space-y-[1.6rem] flex flex-col items-center">
          <p className="uppercase text-white">Subscribe</p>
          <hr className="border-[.05rem] border-green w-[8rem]" />
          <h2 className="text-white">Newsletter</h2>
          <p className="md:w-[64rem] text-center text-white">
            For the latest update from Mell, please sign up to the mailing list.
          </p>
          <form className="w-full space-y-[1.6rem] flex flex-col items-center" onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="mail@example.com"
              className="w-full h-[7.2rem] rounded-[.8rem] px-[1.6rem]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="h-[5.6rem] bg-green text-white rounded-[.8rem] px-[3.2rem] uppercase">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  );
}
