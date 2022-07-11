import Head from 'next/head';
import { useRouter } from 'next/router';
import Script from 'next/script';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ title, keywords, description, children }) {
  // const router = useRouter();
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>

      <Navbar />
      <div>{children}</div>
      <Footer />
    </>
  );
}

Layout.defaultProps = {
  title: 'Mell Pitcher',
  description: 'Author',
  keywords: 'young, young adult, young adult read,',
};
