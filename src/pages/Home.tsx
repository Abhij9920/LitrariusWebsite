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
        imageSrc="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop"
        imageAlt="Beautiful Australian university campus"
        italicLine=""
        heading={<>Connecting Ambitious<br />Students with World-Class<br />Education Opportunities.</>}
        subText="India's most trusted admissions partner — guiding 1,000+ students to Australia's best universities through expert counselling and IELTS/PTE coaching."
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
