export default function Card() {
  return (
    <article className="flex h-[356px] w-[240px] flex-col justify-between rounded-xl bg-gradient-to-b from-black to-gray-400">
      <div className="p-3">
        <p className="flex h-[33px] w-[135px] items-center justify-center rounded-2xl border border-white bg-black text-white">
          1.4K Views
        </p>
      </div>
      <div className="flex flex-col gap-2 p-3">
        <article>
          <b className="text-xl font-semibold text-white">Live Title</b>
          <p className="text-white">24.03.02</p>
        </article>
        <article className="flex h-[70px] gap-3 rounded-md bg-white px-2 py-1.5">
          <div className="h-[58px] w-[58px] rounded-md bg-#BAB4B4 drop-shadow-md"></div>
          <div className="flex flex-col justify-center">
            <b className="font-semibold">Product Title</b>
            <p>won 19,900</p>
          </div>
        </article>
      </div>
    </article>
  );
}
