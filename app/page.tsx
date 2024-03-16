// page.tsx는 React 구성 요소를 내보내는 특수 Next.js 파일이며 경로에 액세스하려면 필요합니다.
// /app/page.tsx 이는 / 경로와 연결된 홈페이지입니다.

import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
import { mako } from '@/app/ui/fonts';
import Image from 'next/image';
import Search from './ui/search';

export default function Page() {
  return (
    // These are Tailwind classes:
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 gap-10">
        <p className='text-white'>헤더가 들어갈 예정입니다.</p>
        {/* AcmeLogo 컴포넌트 안에 second font가 적용되어 있음 */}
        {/* <AcmeLogo /> */}
        <Search placeholder={"검색어를 입력해주세요."}/>
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <div className={styles.shape} />
          {/* <div className="h-0 w-0 border-b-[30px] border-l-[20px] border-r-[20px] border-b-black border-l-transparent border-r-transparent" /> */}
          {/* 부분적으로 p 태그에 해당하는 부분들은 lusitana => mako 폰트 적용 */}
          <p className={`${mako.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Welcome to Acme.</strong> This is the example for the{' '}
            <a href="https://nextjs.org/learn/" className="text-blue-500">
              Next.js Learn Course
            </a>
            , brought to you by Vercel.
          </p>
          {/* app routing 기반으로 login 페이지 라우팅 필요 */}
          <Link
            href="/login"
            // className=""
            className={`${mako.className} flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base`}
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />
          {/* 모바일 화면에 표시 : block / 데스크탑에서 숨기기 :  md:hidden */}
          <Image
            src="/hero-mobile.png"
            width={560}
            height={620}
            className="block md:hidden"
            alt="연습"
          />
        </div>
      </div>
    </main>
  );
}
