export default function LiveSchedule() {
  return (
    <div className="mx-auto flex w-[1024px]">
      <section className="flex flex-col gap-5">
        <nav className="flex justify-between">
          <p className="text-2xl font-bold">라이브 스케줄</p>
          <p>전체보기</p>
        </nav>
        <figure className="flex gap-3">캘린더가 들어갈 예정입니다</figure>
        <article className="flex gap-5">
          <LiveScheduleItem />
          <LiveScheduleItem />
        </article>
      </section>
    </div>
  );
}

export function LiveScheduleItem() {
  return (
    <article className="flex h-[350px] w-[500px] gap-5">
      <section className="flex h-full w-1/2 items-center justify-center rounded-2xl bg-gray-200">
        image
      </section>
      <section className="flex h-full w-1/2 items-center rounded-2xl">
        <div className="flex flex-col gap-20">
          <section className="flex flex-col">
            <NotifyButton />
            <p>2024.01.28</p>
            <p className="text-2xl font-semibold">PM 08:00</p>
          </section>
          <section>
            <p className="text-2xl font-bold">
              [Fashion] Style your outfit with the brand
            </p>
            <p className="text-#8E8E93">
              When the color meets the fashion it became a life.
            </p>
          </section>
        </div>
      </section>
    </article>
  );
}

export function NotifyButton() {
  return (
    <button className="bg-#D6D6D6 text-#48484A h-[31px] w-[128px] rounded-xl font-bold">
      Notify Me
    </button>
  );
}
