import Image from 'next/image';

import locationIcon from '../../../public/Img/location-icon.svg';

interface ContentProps {
  title: string;
  price: string;
  location: string;
  tags: string[];
}

export default function Content({
  title,
  price,
  location,
  tags,
}: ContentProps) {
  return (
    <div className="flex flex-col text-[#333333] justify-between py-2 ml-12">
      <div className="text-12 leading-[140%] tracking-tight">
        <span>{title}</span>
        <div className="flex items-center mt-6">
          <p className="text-20 font-bold">{price}</p>
          <p className="ml-1">원</p>
        </div>
      </div>
      <div>
        <div className="flex gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="border-0.5 border-solid border-[#D7D7D7] px-8 py-4 rounded-full text-12 text-[#777777]"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center mt-4">
          <Image src={locationIcon} alt="location" width={16} height={16} />
          <p className="text-12 text-[#777777]">{location}</p>
        </div>
      </div>
    </div>
  );
}
