// page.tsx는 React 구성 요소를 내보내는 특수 Next.js 파일이며 경로에 액세스하려면 필요합니다.
// /app/page.tsx 이는 / 경로와 연결된 홈페이지입니다.

import MainBanner from './(components)/main_banner';
import LiveCommerce from './(components)/live_commerce';
import Exhibition from './(components)/exhibition';
import MediaContent from './(components)/media_content';
import LowPriceCompare from './(components)/lowpricecompare';
import MDpickTitle from './(components)/mdpick_title';
import MDpickTitle2 from './(components)/mdpick_title2';

export default function Page() {
  return (
    <>
      <MainBanner />
      <div className="mx-auto w-[1024px]">
        <LowPriceCompare />
        {/* mdPICK 3개 모두 다른 레이아웃이니 맞춰서 컴포넌트화 */}
        <MDpickTitle />
        <LiveCommerce />
      </div>
      <Exhibition />
      <div className="mx-auto w-[1024px]">
        <MDpickTitle2 />
        <MediaContent />
      </div>
    </>
  );
}
