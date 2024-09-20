'use client';

import { useRouter } from 'next/navigation';

import Content from './Content';
import Thumbnail from './Thumbnail';

import Icon from '../../../public/Img/thumbnail.svg';

const ITEM_LIST = [
  {
    id: 1,
    thumbnailSrc: Icon,
    title: '삼성라이온즈 2024 프로페셔널 02올드 노마킹 사이즈 110유니폼',
    price: '130,000',
    location: '서울 강남구 압구정동',
    tags: ['직거래 희망', '반값택배'],
    isSoldOut: true,
  },
  {
    id: 2,
    thumbnailSrc: Icon,
    title: '삼성라이온즈 2024 프로페셔널 02올드 노마킹 사이즈 110유니폼',
    price: '130,000',
    location: '서울 강남구 압구정동',
    tags: ['직거래 희망'],
    isSoldOut: false,
  },
];

export default function ProductList() {
  const router = useRouter();

  const handleProductClick = (id: number) => {
    router.push(`trade/${id}`);
  };

  return (
    <div>
      {ITEM_LIST.map(
        ({ id, thumbnailSrc, title, price, location, tags, isSoldOut }) => (
          <div
            key={`product-${id}`}
            className="flex pt-8 pb-24 border-b-0.5 border-solid border-[#7777774D] cursor-pointer"
            onClick={() => handleProductClick(id)}
          >
            <Thumbnail src={thumbnailSrc} alt={title} isSoldOut={isSoldOut} />
            <Content
              title={title}
              price={price}
              location={location}
              tags={tags}
            />
          </div>
        ),
      )}
    </div>
  );
}
