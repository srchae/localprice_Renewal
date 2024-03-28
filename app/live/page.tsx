import ChevronLeft from '@/public/icons/chevron-left';
import ChevronLeftWhite from '@/public/icons/chevron-left-white';
import ChevronRightWhite from '@/public/icons/chevron-right-white';
import ExItem from '../(components)/exhibition/exitem';
import LiveItem from './live_item';
import CircleChannel from '../(components)/live/circlechannel';
import Card from '../(components)/commerce/card';

export default function LivePage() {
  return (
    <>
      {/* 1. 최상단 라이브 페이지 배너 section */}
      <section className="flex h-[702px] w-full items-center justify-center bg-black">
        <ChevronLeftWhite />
        <article className="flex h-[602px] w-[327px] flex-col items-center justify-between rounded-3xl bg-gray-300">
          <figure className="mt-5 h-[50px] w-[50px] bg-purple-300"></figure>
          <figure className="mb-4 h-[93px] w-[300px] rounded-3xl bg-gray-100"></figure>
        </article>
        <article className="flex h-[482px] w-[480px] bg-gray-500">
          <div className="flex flex-col items-center justify-between">
            <section className="flex flex-col">
              <h1>Lorem Ipsum Dolor</h1>
              <p>Lorem Ipsum Dolor</p>
            </section>
            <section className="h-[317px]">
              <p>Product List</p>
              <article className="flex">
                <LiveItem />
                <LiveItem />
                <LiveItem />
              </article>
            </section>
          </div>
        </article>
        <ChevronRightWhite />
      </section>
      {/* 2. 라이브 채널 section */}
      <section className="mt-4 flex flex-col">
        <nav className="flex justify-between">
          <figure className="flex gap-3">
            <button className="h-[54px] w-[90px] rounded-full border border-black">
              인기 브랜드
            </button>
            <button className="h-[54px] w-[90px] rounded-full border border-black">
              추천 채널
            </button>
          </figure>
          <button>전체보기</button>
        </nav>
        <article className="mt-4 flex gap-5">
          <CircleChannel />
          <CircleChannel />
          <CircleChannel />
          <CircleChannel />
          <CircleChannel />
          <CircleChannel />
          <CircleChannel />
          <CircleChannel />
          <CircleChannel />
        </article>
      </section>
      {/* 3. 라이브 스케줄 section */}
      <section className="flex flex-col">
        <nav className="flex justify-between">
          <h1>라이브 스케줄</h1>
          <p>전체보기</p>
        </nav>
        <article className="h-[100px] w-1/2 bg-gray-300">캘린더</article>
        <section className="h-[300px] w-2/3 bg-gray-200">
          <article></article>
          <article></article>
        </section>
      </section>
      {/* 4. 라이브 다시보기 section */}
      <section>
        <nav className="flex justify-between">
          <h1>라이브 다시보기</h1>
          <p>전체보기</p>
        </nav>
        <figure className="flex gap-3">
          {/* button 스타일 컴포넌트 분리 필요 */}
          <button>1뎁스</button>
          <button>상시 기획전</button>
          <button>인기 상품</button>
          <button>1뎁스 카테고리</button>
        </figure>
        <article className="flex gap-5">
          <Card />
          <Card />
          <Card />
          <Card />
        </article>
      </section>
      {/* 5. 하이라이트 쇼츠 section */}
      <section>
        <nav className="flex justify-between">
          <h1>하이라이트 쇼츠</h1>
          <p>전체보기</p>
        </nav>
        <figure className="flex gap-3">
          {/* button 스타일 컴포넌트 분리 필요 */}
          <button>1뎁스</button>
          <button>상시 기획전</button>
          <button>인기 상품</button>
          <button>1뎁스 카테고리</button>
        </figure>
        <article className="flex gap-5">
          <Card />
          <Card />
          <Card />
          <Card />
        </article>
      </section>
    </>
  );
}
