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
        imageSrc="/Uploads/australia.jpg"
        imageAlt="Beautiful Australian university campus"
        italicLine="Thousands Apply. Few Get Placed."
        heading={<>We'll Get You Into<br />Australia's Best<br />Universities.</>}
        subText="India's most trusted admissions partner with 1,000+ successful Australian university placements and 95% visa success rate."
        ctaLabel="Book Free Consultation"
        ctaTo="/contact"
        secondaryLabel="View Our Results"
        secondaryTo="#proof"
        trustedBy={['IIT', 'IIM', 'Delhi University', 'Mumbai University', 'Pune University', 'Bangalore University']}
      />
      <ProofSection />
      <Ticker />
      <ImageBreak />
      <AllInOnePlace />
      <TheyGotIn />
      <ArticlesSection />
      <FinalCTA
        heading={<>Thousands of Australian Dreams.<br />Made Real.</>}
        italic="Are You Next?"
        btnLabel="Start Today"
        btnTo="/contact"
      />
      <MiniCTABar />
    </>
  );
}
