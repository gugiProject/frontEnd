import React from 'react';
import Image from 'next/image';
import menuIcon from '../../../public/Img/menu-icon.svg';

interface IPageHeaderProps {
  title: string;
}

export default function PageHeader({ title }: IPageHeaderProps) {
  return (
    <header className="h-58 px-24 flex justify-between items-center">
      <h1 className="text-18 flex-1 text-center">{title}</h1>
      <button className="ml-auto">
        <Image src={menuIcon} alt="메뉴 이동 아이콘" width={21} height={14} />
      </button>
    </header>
  );
}
