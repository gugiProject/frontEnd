import React from 'react';

export default function BannerText({ text }: { text: string }) {
  return (
    <p className="text-16 text-semiBlack mb-2 leading-[120%] tracking-[-4%]">
      {text}
    </p>
  );
}
