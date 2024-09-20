'use client';
import { useState } from 'react';
import Image from 'next/image';
import { useRecoilState } from 'recoil';
import { useRouter } from 'next/navigation';

import ButtonModal from '@/components/ButtonModal';

import { searchValueAtom } from '@/store/trade/search/atoms';

import backIcon from '../../../public/Img/back-arrow-icon-black.svg';
import searchIcon from '../../../public/Img/search-icon-gray.svg';
import cancelIcon from '../../../public/Img/cancel-icon.svg';

const MOCK_LIST = ['삼성', '삼성 라이온즈', '현대'];

export default function SearchPage() {
  const router = useRouter();

  const [searchValue, setSearchValue] = useRecoilState(searchValueAtom);
  const [showModalOpen, setShowModalOpen] = useState(false);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      // Enter를 누르면 /trade 페이지로 이동
      router.push(`/trade`);
    }
  };

  const handleCloseModal = () => {
    setShowModalOpen(false);
  };

  const handleSearchIconClick = () => {
    router.push(`/trade`);
  };

  return (
    <>
      <ButtonModal
        description="두 글자 이상 입력해 주세요."
        isOpen={showModalOpen}
        buttons={[{ name: '확인', action: handleCloseModal }]}
      />
      <div className="flex justify-between items-center px-24 py-18 h-58 border-b border-solid border-[#D7D7D7]">
        <div className="flex gap-20">
          <Image
            src={backIcon}
            alt="back-arrow"
            width={18}
            height={14}
            onClick={() => router.back()}
            style={{ cursor: 'pointer' }}
          />
          <input
            placeholder="희망 상품을 입력하세요"
            onChange={(e) => setSearchValue(e.target.value)}
            value={searchValue}
            onKeyDown={handleKeyPress}
          />
        </div>
        <Image
          src={searchIcon}
          alt="search"
          width={18}
          height={14}
          onClick={handleSearchIconClick}
          style={{ cursor: 'pointer' }}
        />
      </div>
      <div className="flex justify-between px-24 py-20 h-60 text-14">
        <p className="text-[#333333]">최근 검색어</p>
        <p className="text-[#777777] opacity-80 cursor-pointer">전체 삭제</p>
      </div>

      <div className="px-24">
        {MOCK_LIST.map((item) => {
          return (
            <div
              key={`cancel-${item}`}
              className="flex justify-between items-center py-14 text-18 text-[#333333] h-58 border-b border-solid border-[#77777712]"
            >
              <p>{item}</p>
              <Image
                src={cancelIcon}
                alt="cancel"
                width={14}
                height={14}
                style={{ cursor: 'pointer' }}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
