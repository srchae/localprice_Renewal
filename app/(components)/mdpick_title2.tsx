import Item from './item';

export default function MDpickTitle2() {
  // const buttonDefaultClasses =
  //   'h-[50px] w-[120px] rounded-[32px] border border-black text-base font-semibold';
  return (
    <div className="h-[751px] w-full">
      <h1 className="pt-5 text-3xl font-semibold">
        MD 추천 / 제목이 들어가는 부분
      </h1>
      <nav className="flex h-[100px] items-center justify-between gap-5 py-5">
        {/* <button className="rounded-3xl border border-r border-black bg-gray-300 px-4 py-1 text-2xl font-normal">
          카테고리1
        </button> */}
        <div className="flex gap-3">
          <button className="h-[50px] w-[120px] rounded-[32px] border border-black text-base font-semibold">
            카테고리
          </button>
          <button className="h-[50px] w-[120px] rounded-[32px] border border-black text-base font-semibold">
            카테고리
          </button>
          <button className="h-[50px] w-[120px] rounded-[32px] border border-black text-base font-semibold">
            카테고리
          </button>
        </div>
        <div className="">
          <button className="h-[50px] w-[120px] rounded-[32px] border border-black text-base font-bold text-gray-400">
            전체보기
          </button>
        </div>
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
