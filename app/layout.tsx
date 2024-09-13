import { RecoilRoot } from 'recoil';

import type { Metadata } from 'next';
import './globals.css';
import MainLayout from '@/components/MainLayout';
import RecoilRootWrapper from '@/components/recoil-wrapper';

export const metadata: Metadata = {
  title: {
    template: '%s | gugi',
    default: 'gugi',
  },
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          as="style"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body>
        <RecoilRootWrapper>{children}</RecoilRootWrapper>
        {/* <RecoilRoot>
          <MainLayout>{children}</MainLayout>
        </RecoilRoot> */}
      </body>
    </html>
  );
}
