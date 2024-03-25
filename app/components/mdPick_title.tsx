import Item from './item';

export default function MDpickTitle() {
  return (
    <div className="w-full">
      <h1 className="pt-5 text-3xl font-semibold">
        MD 추천 / 제목이 들어가는 부분
      </h1>
      <nav className="flex h-[100px] items-center gap-5 pb-5">
        {/* <button className="rounded-3xl border border-r border-black bg-gray-300 px-4 py-1 text-2xl font-normal">
          카테고리1
        </button> */}
        <button className="to-#331786 h-[50px] w-[120px] rounded-[32px] bg-gray-300 bg-gradient-to-r from-#5A28EC text-base font-semibold text-white">
          카테고리
        </button>
        <button className="text-#636366 text-xl font-semibold">
          상시 기획전
        </button>
        <button className="text-#636366 text-xl font-semibold">
          인기 상품
        </button>
        <button className="text-#636366 text-xl font-semibold">
          1뎁스 카테고리
        </button>
      </nav>
      <article className="flex h-[500px] w-full touch-auto gap-5 overflow-x-auto border-black marker:border">
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
