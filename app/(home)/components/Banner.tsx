import Text from './BannerText';
import carouselBlack from '../../../public/Img/carousel-icon-black.svg';
import carouselGray from '../../../public/Img/carousel-icon-gray.svg';
import Image from 'next/image';

export default function Banner() {
  return (
    <div className="px-18 mb-21">
      <section className="h-190 rounded-10 mt-28 mb-14 pt-33 pr-11 pb-11 pl-23 bg-lightGray">
        <h2 className="text-24 font-bold text-semiBlack mb-8 leading-[120%] tracking-[-2.5%]">
          야구가 처음이세요?
        </h2>
        <Text text="어렵지 않아요," />
        <Text text="gugi와 함께 시작해봐요!" />
        <div className="mt-39 overflow-hidden px-14 py-8">
          <p className="text-14 text-semiBlack font-medium mb-2 leading-[120%] tracking-[-4%] float-right">
            야구 룰 배워보기
          </p>
        </div>
      </section>
      <div className="flex justify-center">
        <Image src={carouselBlack} alt="케러셀_선택된 아이콘"></Image>
        <Image src={carouselGray} alt="케러셀_비선택된 아이콘"></Image>
        <Image src={carouselGray} alt="케러셀_비선택된 아이콘"></Image>
      </div>
    </div>
  );
}
