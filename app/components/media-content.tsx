export default function MediaContent() {
  return (
    <div className="mt-5 h-[600px] w-full">
      <b className="px-5 text-3xl font-extrabold">미디어 컨텐츠</b>
      <p className="px-5 py-2 text-lg">미디어 컨텐츠에 대한 상세 내용입니다</p>
      <nav className="flex justify-between p-5 ">
        <div className="flex gap-5">
          <button className="h-[32px] w-[97px] rounded-2xl bg-black text-base font-semibold text-white">
            전체
          </button>
          <button className="bg-#C8C8C8 h-[32px] w-[97px] rounded-2xl text-base font-semibold text-white">
            Shorts
          </button>
          <button className="bg-#C8C8C8 h-[32px] w-[124px] rounded-2xl text-base font-semibold text-white">
            Reels
          </button>
          <button className="bg-#C8C8C8 h-[32px] w-[124px] rounded-2xl text-base font-semibold text-white">
            TikTok
          </button>
        </div>
        <button className=" text-#A29B9B h-[42px] w-[107px] rounded-3xl border border-black text-base font-semibold">
          자세히 보기
        </button>
      </nav>
      <article className="flex h-[356px] w-[1133px] justify-center gap-10">
        <article className="bg-#D9D9D9 h-[356px] w-[273px] rounded-xl"></article>
        <article className="bg-#D9D9D9 h-[356px] w-[273px] rounded-xl"></article>
        <article className="bg-#D9D9D9 h-[356px] w-[273px] rounded-xl"></article>
        <article className="bg-#D9D9D9 h-[356px] w-[273px] rounded-xl"></article>
      </article>
    </div>
  );
}
