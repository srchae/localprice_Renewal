// usePathname를 사용하기 위해서는 'use client';를 꼭 붙여줘야 한다.
'use client';

// 사용자가 링크를 클릭하면 대상 페이지의 코드가 이미 백그라운드에 로드되어 페이지 전환이 거의 즉각적으로 이루어집니다
import Link from 'next/link';

// https://heroicons.com/
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';

// usePathname은 현재 페이지의 경로를 가져오는 기능을 제공하여, 동적인 라우팅과 상태 관리를 구현할 수 있도록 도와줍니다.
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Invoices',
    href: '/dashboard/invoices',
    icon: DocumentDuplicateIcon,
  },
  { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
];

export default function NavLinks() {
  // pathname은 현재 페이지 경로를 나타내는 변수
  // 현재 페이지의 PATH를 변수처럼 쓴다고 생각해도 될듯하다
  const pathname = usePathname();
  return (
    // map()은 links 배열 안의 요소를 하나씩 꺼내어 접근하기 위함
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': pathname === link.href,
              },
            )}
          
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
