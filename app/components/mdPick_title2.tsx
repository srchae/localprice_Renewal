import Item from './item';

export default function MDpickTitle2() {
  return (
    <div className="h-[700px] w-full">
      <div className="mt-5 p-5 text-3xl font-normal">MD 추천 2 / 제목</div>
      <nav className="flex h-[100px] items-center justify-between gap-3 p-5">
        <div className="flex gap-3">
          <button className="bg-#D9D9D9 h-[34px] w-[128px] rounded-3xl border border-r px-4 text-lg font-semibold">
            #카테고리
          </button>
          <button className="bg-#D9D9D9 h-[34px] w-[128px] rounded-3xl border border-r px-4 text-lg font-semibold">
            #카테고리
          </button>
          <button className="bg-#D9D9D9 h-[34px] w-[128px] rounded-3xl border border-r px-4 text-lg font-semibold">
            #카테고리
          </button>
        </div>
        <div className="text-base">
          <p className="text-#646368">전체보기</p>
        </div>
      </nav>
      <article className=" flex h-[500px] w-full touch-auto gap-5 overflow-x-auto border-black marker:border">
        <article className="flex h-[457px] w-[315px] flex-shrink-0 items-center justify-center bg-gray-300 ">
          <p>메인 이미지</p>
        </article>
        <Item />
        <Item />
        <Item />
      </article>
    </div>
  );
}
