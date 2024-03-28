import Card from './commerce/card';

export default function MediaContent() {
  return (
    <div className="mt-5 h-[600px] w-full">
      <b className="px-5 text-3xl font-extrabold">미디어 컨텐츠</b>
      <p className="px-5 py-2 text-lg">미디어 컨텐츠에 대한 상세 내용입니다</p>
      <nav className="flex justify-between p-5 ">
        <div className="flex gap-5">
          <button className="h-[54px] w-[110px] rounded-3xl bg-black text-base font-semibold text-white">
            전체
          </button>
          <button className="h-[54px] w-[110px] rounded-3xl bg-#C8C8C8 text-base font-semibold text-white">
            Shorts
          </button>
          <button className="h-[54px] w-[110px] rounded-3xl bg-#C8C8C8 text-base font-semibold text-white">
            Reels
          </button>
          <button className="h-[54px] w-[110px] rounded-3xl bg-#C8C8C8 text-base font-semibold text-white">
            TikTok
          </button>
        </div>
        <button className=" h-[54px] w-[110px] rounded-3xl border border-black text-base font-semibold text-#A29B9B">
          자세히 보기
        </button>
      </nav>
      <div className="flex justify-center ">
        <article className="flex h-[398px] gap-5">
          <Card />
          <Card />
          <Card />
          <Card />
        </article>
      </div>
    </div>
  );
}
