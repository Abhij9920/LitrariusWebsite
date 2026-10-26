import React from 'react';
import Hero from '../components/shared/Hero';
import ProofSection from '../components/home/ProofSection';
import Ticker from '../components/shared/Ticker';
import ImageBreak from '../components/home/ImageBreak';
import AllInOnePlace from '../components/home/AllInOnePlace';
import TheyGotIn from '../components/home/TheyGotIn';
import ArticlesSection from '../components/home/ArticlesSection';
import FinalCTA from '../components/shared/FinalCTA';
import MiniCTABar from '../components/shared/MiniCTABar';

export default function Home() {
  return (
    <>
      <Hero
        imageSrc="/images/hero_home_bright.jpg"
        imageAlt="Beautiful Australian university campus"
        italicLine=""
        heading={<>Connecting Ambitious<br />Students with World-Class<br />Education Opportunities.</>}
        subText="Your trusted admissions partner — guiding students worldwide to Australia's best universities through expert counselling, personalised support, and real results."
        ctaLabel="Book Free Consultation"
        ctaTo="/contact"
        secondaryLabel="View Our Results"
        secondaryTo="#proof"
        trustedBy={['University of Melbourne', 'UNSW Sydney', 'Monash University', 'ANU', 'University of Queensland', 'University of Sydney']}
      />
      <ProofSection />
      <Ticker />
      <ImageBreak />
      <AllInOnePlace />
      <TheyGotIn />
      <ArticlesSection />
      <FinalCTA
        heading={<>Your Australian University Journey<br />Starts Here.</>}
        italic="Let's Make It Happen."
        btnLabel="Book Free Consultation"
        btnTo="/contact"
      />
      <MiniCTABar />
    </>
  );
}
