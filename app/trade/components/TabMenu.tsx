interface ITab {
  label: string;
  value: string;
}

interface ITabMenuProps {
  tabList: ITab[];
  selectedTab: string;
  onTabClick: (value: string) => void;
}

export default function TabMenu({
  tabList,
  selectedTab,
  onTabClick,
}: ITabMenuProps) {
  return (
    <div className="flex">
      {tabList.map(({ value, label }) => (
        <button
          key={value}
          className={`flex-1 text-16 px-4 py-2 h-41 text-center ${
            selectedTab === value
              ? 'border-b-2 border-[#333333] text-[#333333] font-bold'
              : 'border-b-1 border-[#77777733] text-[#777777]'
          }`}
          onClick={() => onTabClick(value)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
