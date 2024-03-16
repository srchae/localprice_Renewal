// dashboard > layout.tsx 파일을 사용하여 여러 페이지 간에 공유되는 UI를 만들 수 있습니다.
// rootlayout은 일반적으로 모든 페이지에서 공통적으로 사용되는 레이아웃을 정의하는 역할을 합니다.
// Next.js에서 레이아웃을 사용할 때의 이점 중 하나는 탐색 시 페이지 구성 요소만 업데이트되고, 
// 레이아웃은 다시 렌더링되지 않는다는 것입니다. 이를 부분 렌더링 이라고 합니다.
import SideNav from '@/app/ui/dashboard/sidenav';
 
// 동적인 콘텐츠를 렌더링하기 위해 { children }을 사용합니다.
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}