'use client';

import { useState } from 'react';

import LabelInput from './components/LabelInput';
import ImageUpload from './components/ImageUpload';
import TagSelector from './components/TagSelector';
import TabSelector from './components/TabSelector';
import { useRecoilValue } from 'recoil';
import { titleAtom } from '@/store/trade/create/atoms';

export default function CreatePage() {
  const [textAreaValue, setTextAreaValue] = useState('');

  const data = useRecoilValue(titleAtom);

  const handleClick = () => {
    console.log('Data', data);
  };

  return (
    <div className="px-24 py-32 text-[#333333] text-16 leading-[140%] tracking-[-2.5%]">
      <p className="text-20 text-[#000000] font-semibold h-28 mb-17">
        내 물건 중고거래 / 대여하기
      </p>
      <div className="flex flex-col space-y-32">
        <label>
          <p className="mb-8">거래방식</p>
          <TabSelector />
        </label>
        <LabelInput label="제목" placeholder="제목을 입력해 주세요." />
        <LabelInput
          label="가격"
          placeholder="가격을 입력해 주세요."
          type="tel"
        />
        <ImageUpload />
        <label>
          <p className="mb-8">상세 설명</p>
          <textarea
            className="w-full h-173 resize-none overflow-y-auto border-b border-solid border-[#33333333] py-7"
            placeholder="상세 설명을 작성해 주세요."
            value={textAreaValue}
            onChange={(e) => setTextAreaValue(e.target.value)}
          />
        </label>
        <label>
          <p className="mb-8">거래 방식</p>
          <p className="mb-14 text-18 text-[#333333B3] font-medium ">
            거래 방식을 선택해 주세요.
          </p>
          <TagSelector />
        </label>
        <LabelInput
          label="희망 위치"
          placeholder="희망을 위치를 선택해주세요."
        />
        <LabelInput
          label="연락 수단"
          placeholder="ex. 오픈 카톡 링크, 카카오톡 아이디"
        />
      </div>
      <button
        onClick={handleClick}
        className="w-full py-16 mt-52 mb-80 bg-[#333333] text-white text-18 rounded-8"
      >
        등록하기
      </button>
    </div>
  );
}
