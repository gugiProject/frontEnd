import Image from 'next/image';
import menuIcon from '../../../public/Img/menu-icon.svg';

export default function Header() {
  return (
    <header className="h-58 px-24 flex justify-between items-center border border-black border-solid">
      <h1 className="text-18">gugi</h1>
      <button className="">
        <Image src={menuIcon} alt="메뉴 이동 아이콘" width={21} height={14} />
      </button>
    </header>
  );
}
