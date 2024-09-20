import Image from 'next/image';

interface ThumbnailProps {
  src: string;
  alt: string;
  isSoldOut: boolean;
}

export default function Thumbnail({ src, alt, isSoldOut }: ThumbnailProps) {
  return (
    <div className="relative">
      <Image
        src={src}
        alt={alt}
        className={`rounded-md max-w-none ${isSoldOut ? 'opacity-50' : ''}`}
        width={137}
        height={130}
      />
      {isSoldOut && (
        <p className="absolute top-8 left-8 bg-black text-white px-8 py-4 rounded-full leading-[140%] tracking-[-2.5%] text-12">
          거래 완료
        </p>
      )}
    </div>
  );
}
