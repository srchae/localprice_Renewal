import Item from './item';

export default function MDpickTitle() {
  return (
    <div className="h-[751px] w-full">
      <h1 className="pt-5 text-3xl font-semibold">
        MD 추천 / 제목이 들어가는 부분
      </h1>
      <nav className="flex h-[100px] items-center gap-5 pb-5">
        {/* <button className="rounded-3xl border border-r border-black bg-gray-300 px-4 py-1 text-2xl font-normal">
          카테고리1
        </button> */}
        <button className="h-[50px] w-[120px] rounded-[32px] bg-gray-300 bg-gradient-to-r from-#5A28EC to-#331786 text-base font-semibold text-white">
          카테고리
        </button>
        <button className="text-xl font-semibold text-#636366">
          상시 기획전
        </button>
        <button className="text-xl font-semibold text-#636366">
          인기 상품
        </button>
        <button className="text-xl font-semibold text-#636366">
          1뎁스 카테고리
        </button>
      </nav>
      <article className="flex w-full touch-auto gap-5 overflow-x-auto overflow-y-hidden border-black marker:border">
        <article className="flex h-[583px] w-[315px] flex-shrink-0 items-center justify-center rounded-xl bg-gray-300 ">
          <div>메인 이미지</div>
        </article>
        <Item />
        <Item />
        <Item />
      </article>
    </div>
  );
}
