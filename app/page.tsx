import { NextPage } from 'next';
import Head from 'next/head';
import Navbar from '../components/Navbar'; // Adjust the path if necessary
import HeroSection from '@/components/HeroSection';
import DashboardImage from '@/components/DashboardImage';
// import LogoSlider from '@/components/InfiniteScroll';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Divine Infotech</title>
        <meta name="description" content="Next-Generation AI Tools for Smarter Business" />
      </Head>
      <Navbar />
      <HeroSection />
      <DashboardImage />
      {/* <LogoSlider /> */}
    </div>
  );
};

export default Home;