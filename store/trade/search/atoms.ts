import { atom } from 'recoil';

// /trade/search 페이지

export const searchValueAtom = atom({
  key: 'trade/search/searchValue',
  default: '',
});
