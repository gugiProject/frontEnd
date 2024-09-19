import { atom } from 'recoil';

// /trade 메인 페이지

export const selectedTabAtom = atom({
  key: 'trade/selectedTabState',
  default: 'trade',
});
