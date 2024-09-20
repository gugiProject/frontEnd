import { useRecoilState } from 'recoil';

import { selectedTabAtom } from '@/store/trade/create/atoms';

import { TAB_LIST } from '../../page';

export default function TabSelector() {
  const [selectedTab, setSelectedTab] = useRecoilState(selectedTabAtom);

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
  };

  return (
    <div className="flex border-0.5 border-solid border-[#777777] rounded-8">
      {TAB_LIST.map(({ label, value }) => (
        <button
          key={`tab-${value}`}
          className={`flex-1 text-18 py-8 rounded-8 ${
            selectedTab === value ? 'bg-[#777777] text-white' : 'text-black'
          }`}
          onClick={() => handleTabClick(value)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
