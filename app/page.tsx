// page.tsx는 React 구성 요소를 내보내는 특수 Next.js 파일이며 경로에 액세스하려면 필요합니다.
// /app/page.tsx 이는 / 경로와 연결된 홈페이지입니다.
'use client';

import Header from './(components)/header';
import Navbar from './(components)/navbar';
import MainBanner from './(components)/main_banner';
import LiveCommerce from './(components)/live_commerce';
import Footer from './(components)/footer';
import Exhibition from './(components)/exhibition';
import MediaContent from './(components)/media_content';
import LowPriceCompare from './(components)/lowprice_compare';
import MDpickTitle from './(components)/mdpick_title';
import MDpickTitle2 from './(components)/mdpick_title2';
export default function Page() {
  return (
    <>
      <head>
        <title>Renewal LocalPrice</title>
      </head>
      <body className="mx-auto flex w-screen items-center justify-center">
        <main className="flex max-w-5xl flex-col">
          <header className="flex h-[82px] items-center gap-5">
            <Header />
          </header>
          <nav className="flex items-center gap-10 p-4">
            <Navbar />
          </nav>
          <MainBanner />
          <LowPriceCompare />
          {/* mdPICK 3개 모두 다른 레이아웃이니 맞춰서 컴포넌트화 */}
          <MDpickTitle />
          <LiveCommerce />
          <Exhibition />
          <MDpickTitle2 />
          <MediaContent />
          <Footer />
        </main>
      </body>
    </>
  );
}
