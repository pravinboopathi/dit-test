import { NextPage } from 'next';
import Head from 'next/head';
import HeroSection from '@/components/HeroSection';
import TrustedBrands from '@/components/TrustedBrands';
import Works from '@/components/Work';
import FrequentlyAskedQuestions from '@/components/FrequentlyAskedQuestions';
import DashboardImage from '@/components/DashboardImage';
import WhyUs from '@/components/WhyUs';
import IdeaSection from '@/components/IdeaSection';
import ExploreCourses from '@/components/ExploreCourses';
import Services from '@/components/Services';



const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Divine Infotech</title>
        <meta name="description" content="Next-Generation AI Tools for Smarter Business" />
      </Head>
      <HeroSection />
      <DashboardImage />
      <TrustedBrands />
      {/* <Works /> */}
      <Services />
      <ExploreCourses />
      <WhyUs />
      <FrequentlyAskedQuestions />
      <IdeaSection />
      
    </>
  );
};
export default Home;