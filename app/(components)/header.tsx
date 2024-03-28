import Logo from '@/public/images/logo';
import Search from './searchbar';
import Bell from '@/public/icons/bell';
import Bag from '@/public/icons/bag';
import Heart from '@/public/icons/heart';
import Favorites from '@/public/icons/favorite';
import Profile from '@/public/icons/profile';
import Link from 'next/link';

export default function Header() {
  return (
    <>
      <Link href={'/'}>
        <div className="flex h-[45px] w-[128px] items-center justify-center">
          <Logo />
        </div>
      </Link>
      <Search placeholder="검색어를 입력해 주세요." />
      <div className="flex w-full justify-between ">
        <div className="flex h-[24px] w-[175px] ">
          1. 나이키 에어포스
          <div className="flex items-center justify-center pl-2">
            <svg
              width="14"
              height="8"
              viewBox="0 0 14 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 1L7 7L13 1" stroke="black" />
            </svg>
          </div>
        </div>
        <div className="flex justify-end gap-3">
          <button>
            <Link href={'/login'}>로그인 / </Link>
            <Link href={'/join'}>회원가입</Link>
          </button>
          <button>고객센터</button>
        </div>
      </div>
    </>
  );
}
