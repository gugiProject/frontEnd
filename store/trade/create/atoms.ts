import { atom } from 'recoil';

// 탭 선택 상태
export const selectedTabAtom = atom({
  key: 'trade/create/selectedTabState',
  default: 'trade',
});

// 태그 선택 상태
export const selectedTagListAtom = atom<string[]>({
  key: 'trade/create/selectedTagListState',
  default: [],
});

// 제목 상태
export const titleAtom = atom({
  key: 'trade/create/titleState',
  default: '',
});

// 가격 상태
export const priceAtom = atom({
  key: 'trade/create/priceState',
  default: '',
});

// 상세 설명 상태
export const descriptionAtom = atom({
  key: 'trade/create/descriptionState',
  default: '',
});

// 이미지 리스트 상태
export const imageListAtom = atom<File[]>({
  key: 'trade/create/imageListState',
  default: [],
});

// 희망 위치 상태
export const locationAtom = atom({
  key: 'trade/create/locationState',
  default: '',
});

// 연락 수단 상태
export const contactAtom = atom({
  key: 'trade/create/contactState',
  default: '',
});
