// 루트 레이아웃에 추가하는 모든 UI는 애플리케이션의 모든 페이지 에서 공유됩니다.
import '@/app/ui/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
