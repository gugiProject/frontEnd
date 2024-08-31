import Image, { StaticImageData } from 'next/image';
import Text from './Text';

export default function Carousel({ images }: { images: StaticImageData[] }) {
  return (
    <section className="h-106 pt-20 px-24 pb-10 mb-20">
      <Text text="구단 바로 가기" />
      <div className="flex py-8 gap-10 mt-2">
        {images.map((image, index) => (
          <Image key={index} src={image} alt={''} width={46} />
        ))}
      </div>
    </section>
  );
}
