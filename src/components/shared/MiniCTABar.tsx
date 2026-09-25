import React from 'react';
import { Link } from 'react-router-dom';

interface Props { text?: string; btnLabel?: string; btnTo?: string; }

export default function MiniCTABar({
  text = 'Book a free consultation with one of our Australian education experts.',
  btnLabel = 'Get Started',
  btnTo = '/contact',
}: Props) {
  return (
    <div className="bg-white border-t border-bdr">
      <div className="max-w-content mx-auto px-12 h-16 flex items-center justify-between gap-4 flex-wrap">
        <p className="text-[15px] text-charcoal">{text}</p>
        <Link to={btnTo} className="btn btn-coral btn-sm">{btnLabel}</Link>
      </div>
    </div>
  );
}
