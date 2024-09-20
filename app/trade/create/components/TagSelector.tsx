import { useRecoilState } from 'recoil';

import { selectedTagListAtom } from '@/store/trade/create/atoms';

const TAG_LIST = ['직거래 희망', '반값택배', '무인 거래'];

export default function TagSelector() {
  const [selectedTagList, setSelectedTagList] =
    useRecoilState(selectedTagListAtom);

  const handleTagClick = (tag: string) => {
    setSelectedTagList(
      selectedTagList.includes(tag)
        ? selectedTagList.filter((t) => t !== tag)
        : [...selectedTagList, tag],
    );
  };

  return (
    <div className="flex gap-8">
      {TAG_LIST.map((tag) => (
        <span
          key={tag}
          onClick={() => handleTagClick(tag)}
          className={`cursor-pointer border-0.5 border-solid border-[#77777766] px-8 py-4 rounded-full text-14 ${
            selectedTagList.includes(tag)
              ? 'bg-[#333333] text-white'
              : 'bg-transparent'
          }`}
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
