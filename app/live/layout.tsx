// 루트 레이아웃에 추가하는 모든 UI는 애플리케이션의 모든 페이지 에서 공유됩니다.
// import '@/app/ui/global.css';
import Header from '../(components)/header';
import Footer from '../(components)/footer';
import Navbar from '../(components)/navbar';

export default function LiveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="mx-auto flex w-[1024px] flex-col">
      <header className="flex h-[82px] items-center gap-5">
        <Header />
      </header>
      <nav className="flex items-center gap-10 p-4">
        <Navbar />
      </nav>
      <div>{children}</div>
      <Footer />
    </main>
  );
}
