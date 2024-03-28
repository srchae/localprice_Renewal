import Bag from '@/public/icons/bag';
import Bell from '@/public/icons/bell';
import Burger from '@/public/icons/burger';
import Favorites from '@/public/icons/favorite';
import Profile from '@/public/icons/profile';
import { Button, ButtonGroup } from '@nextui-org/react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <>
      {/* 아이콘 */}
      <figure className="bg-white">
        <Burger />
      </figure>
      {/* 버튼과 link */}
      <nav className="flex w-full justify-between">
        <section className="flex gap-3">
          <button className="1px p-1 font-medium text-#5A28EC">
            <p>
              <u>상시 기획전</u>
            </p>
          </button>
          <button className="1px p-1 font-medium text-black">
            <p>인기상품</p>
          </button>
          <button className="1px p-1 font-medium text-black">
            <p>LIVE</p>
          </button>
          <button className="1px p-1 font-medium text-black">
            <p>1depth 카테고리</p>
          </button>
          <button className="1px p-1 font-medium text-black">
            <p>2depth 카테고리</p>
          </button>
        </section>
        <section className="flex h-[30px] w-[165px] gap-2">
          <Bell />
          <Bag />
          <Favorites />
          <Profile />
        </section>
      </nav>
    </>
  );
}
