import { InputHTMLAttributes } from 'react';
import { useRecoilState } from 'recoil';

import {
  contactAtom,
  locationAtom,
  priceAtom,
  titleAtom,
} from '@/store/trade/create/atoms';

interface ILabelInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: '제목' | '가격' | '연락 수단' | '희망 위치';
}

const ATOM_MAPPING = {
  제목: titleAtom,
  가격: priceAtom,
  '연락 수단': contactAtom,
  '희망 위치': locationAtom,
};

export default function LabelInput({ label, ...rest }: ILabelInputProps) {
  const [value, setValue] = useRecoilState(ATOM_MAPPING[label]);

  return (
    <label>
      <p className="mb-8">{label}</p>
      <input
        className="w-full border-b border-solid border-[#33333333] pb-7"
        onChange={(e) => setValue(e.target.value)}
        value={value}
        {...rest}
      />
    </label>
  );
}
