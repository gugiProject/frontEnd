'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRecoilState } from 'recoil';
import { useRouter } from 'next/navigation';

import TabMenu from './components/TabMenu';
import SearchBar from './components/SearchBar';
import ProductList from './components/ProductList';

import { selectedTabAtom } from '@/store/trade/atoms';

import checkIcon from '../../public/Img/check-icon-active.svg';
import emptyCheckIcon from '../../public/Img/check-icon-empty.svg';
import createIcon from '../../public/Img/create-icon.svg';

export const TAB_LIST = [
  { label: '중고 거래', value: 'trade' },
  { label: '대여', value: 'rental' },
];

export default function TradePage() {
  const router = useRouter();

  const [selectedTab, setSelectedTab] = useRecoilState(selectedTabAtom);
  const [isChecked, setIsChecked] = useState(false);

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
  };

  const handleCheckClick = () => {
    setIsChecked((prev) => !prev);
  };

  const handleCreateBtnClick = () => {
    router.push('trade/create');
  };

  return (
    <div className="px-24 py-8">
      <TabMenu
        tabList={TAB_LIST}
        selectedTab={selectedTab}
        onTabClick={handleTabClick}
      />
      <SearchBar />
      <label
        onClick={handleCheckClick}
        className="flex items-center justify-end cursor-pointer mb-16"
      >
        <Image
          src={isChecked ? checkIcon : emptyCheckIcon}
          alt="radio"
          width={16}
          height={16}
        />
        <span className="ml-8 text-14 text-[#777777] leading-[140%] tracking-[-2.5%]">
          거래 중인 상품만 보기
        </span>
      </label>
      <section>
        {selectedTab === 'trade' && <ProductList />}
        {selectedTab === 'rental' && <ProductList />}
      </section>
      <section className="fixed bottom-56 right-24 md:right-[calc(50%-300px+24px)] cursor-pointer">
        <Image
          src={createIcon}
          alt="create-icon"
          width={49}
          height={47}
          className="cursor-pointer"
          onClick={handleCreateBtnClick}
        />
      </section>
    </div>
  );
}
