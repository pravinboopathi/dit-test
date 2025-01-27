import { NextPage } from 'next';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import DashboardImage from '@/components/DashboardImage';
import TrustedBrands from '@/components/TrustedBrands';
import Works from '@/components/Work';
import FrequentlyAskedQuestions from '@/components/FrequentlyAskedQuestions';
import WhyUs from '@/components/WhyUs';
import Footer from '@/components/Footer';
import IdeaSection from '@/components/IdeaSection';
import ExploreCourses from '@/components/ExploreCourses';
import Services from '@/components/Services';

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
      <TrustedBrands />
      <Works />
      <FrequentlyAskedQuestions />
      <WhyUs />
      <IdeaSection />
      <ExploreCourses />
      <Services />
      <Footer />
    </div>
  );
};

export default Home;