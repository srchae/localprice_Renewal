// page.tsx는 React 구성 요소를 내보내는 특수 Next.js 파일이며 경로에 액세스하려면 필요합니다.
// /app/page.tsx 이는 / 경로와 연결된 홈페이지입니다.

import Header from './components/header';
import Navbar from './components/navbar';
import MainBanner from './components/main-banner';
import MDpickTitle from './components/mdPick_title';
import LiveCommerce from './components/live-commerce';
import LowPriceCompare from './components/lowPrice_compare';
import Footer from './components/footer';
import Exhibition from './components/exhibition';
import MDpickTitle2 from './components/mdPick_title2';
import MediaContent from './components/media-content';

export default function Page() {
  return (
    <>
      <head>
        <title>Renewal LocalPrice</title>
      </head>
      <body className="flex w-[1440px] items-center justify-center">
        <main className="flex w-[1024px] flex-col overflow-hidden">
          <header className="flex h-[82px] w-full items-center gap-5">
            <Header />
          </header>
          <nav className="flex w-full items-center gap-10 p-4">
            <Navbar />
          </nav>
          <MainBanner />
          <LowPriceCompare />
          <MDpickTitle />
          <LiveCommerce />
          <Exhibition />
          <MDpickTitle2 />
          {/* <MiddleBanner /> */}
          <MediaContent />
          <footer className="h-[216px] w-screen bg-#D9D9D9">
            <Footer />
          </footer>
        </main>
      </body>
    </>
  );
}
