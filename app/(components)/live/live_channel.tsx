export default function LiveChannel() {
  return (
    <div className="mx-auto w-[1024px]">
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
    </div>
  );
}

export function CircleChannel() {
  return (
    <article className="flex flex-col items-center">
      <article className="h-[100px] w-[100px] rounded-full border-4 border-red-500 bg-gray-200"></article>
      <h2>name</h2>
      <button className="h-[34px] w-[80px] rounded-full border border-black">
        팔로우
      </button>
    </article>
  );
}
