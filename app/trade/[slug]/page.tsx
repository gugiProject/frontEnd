'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import Carousel from '../components/Carousel';

import linkIcon from '../../../public/Img/link-icon.svg';
import backIcon from '../../../public/Img/back-arrow-icon-gray.svg';

const TAG_LIST = ['직거래 희망', '반값택배'];

export default function ProductDetailPage() {
  const router = useRouter();

  return (
    <>
      <div className="relative max-w-[600px] mx-auto">
        <Carousel />
        <button
          onClick={() => router.push('/trade')}
          className="absolute top-38 left-24"
        >
          <Image src={backIcon} alt="back" width={18} height={14} />
        </button>
      </div>
      <div className="flex-col px-24 py-32 text-[#333333] text-18 leading-[140%] tracking-[-2.5%]">
        <span>삼성라이온즈 2024 프로페셔널 02올드 노마킹 사이즈 110유니폼</span>
        <section className="text-end mt-8 mb-32">
          <span className="text-32 font-bold">70,000</span>
          <span className="ml-2">원</span>
        </section>
        <section className="pb-14 border-b-1 border-solid border-[#33333333]">
          <span className="font-normal">
            Lorem ipsum dolor sit amet consectetur. Diam purus ultricies rhoncus
            erat lectus faucibus pretium feugiat. Nisl tortor a vestibulum leo.
            Magna tellus lacus commodo vitae. Ultrices eu rhoncus pretium ut sed
            pulvinar scelerisque sagittis. Ac in porta leo tincidunt nullam a
            iaculis. Enim mauris mauris convallis blandit semper.
          </span>
        </section>
        <section className="text-end mt-4 mb-54">
          <span className="text-14 text-[#777777]">9시간 전</span>
        </section>
        <section>
          <span className="text-16 text-[#777777]">거래 방식</span>
          <div className="flex items-center space-x-8 mt-4">
            {TAG_LIST.map((tag, index) => (
              <div
                key={`tag-${index}`}
                className="border-0.5 border-solid border-[#77777766] px-10 py-8 rounded-full text-14 leading-[100%]"
              >
                {tag}
              </div>
            ))}
          </div>
        </section>
        <section className="mt-22">
          <span className="text-16 text-[#777777]">판매자와 연락하기</span>
          <div className="flex items-center space-x-4 text-14">
            <Image src={linkIcon} alt="link" width={14} height={14} />
            <a
              href="https://open.kakao.com/o/sUsuxFDg"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              https://open.kakao.com/o/sUsuxFDg
            </a>
          </div>
        </section>
        <div className="fixed bottom-145 right-24 md:right-[calc(50%-300px+24px)] px-20 bg-[#333333] py-8 text-white text-18 text-center rounded-full">
          거래 완료
        </div>
      </div>
    </>
  );
}
