import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (sessionStorage.getItem('ab-closed')) setVisible(false);
  }, []);

  const close = () => {
    setVisible(false);
    sessionStorage.setItem('ab-closed', '1');
  };

  if (!visible) return null;

  return (
    <div className="bg-green-em text-white h-10 flex items-center justify-center relative px-12 text-sm font-medium">
      <span className="font-poppins font-bold tracking-widest text-[10px] uppercase opacity-70 mr-3 hidden sm:inline-block">Update</span>
      1,000+ Successful Australian University Placements —{' '}
      <Link to="/australia" className="text-white underline font-semibold ml-1 hover:opacity-80">
        View Our Student Results
      </Link>
      <button
        onClick={close}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-7 h-7 flex items-center justify-center
                   bg-black/15 rounded-full hover:bg-black/25 transition-colors text-base leading-none"
        aria-label="Close announcement"
      >
        ✕
      </button>
    </div>
  );
}
