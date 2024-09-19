'use client';

import Image from 'next/image';
import { useRecoilValue } from 'recoil';
import { useRouter } from 'next/navigation';

import { searchValueAtom } from '@/store/trade/search/atoms';

import searchIcon from '../../../public/Img/search-icon-black.svg';

export default function SearchBar() {
  const router = useRouter();

  const searchValue = useRecoilValue(searchValueAtom);

  const handleSearchBarClick = () => {
    router.push(`/trade/search`);
  };

  return (
    <div className="flex items-center border-1 border-solid border-[#D7D7D7] rounded-full px-20 py-8 my-15 mr-3 max-w-lg">
      <button
        className="flex-grow outline-none text-16 text-[#33333366] text-left"
        onClick={handleSearchBarClick}
      >
        {!!searchValue ? searchValue : '희망 매물 찾기'}
      </button>
      <Image src={searchIcon} alt="메뉴 이동 아이콘" width={16} height={16} />
    </div>
  );
}
