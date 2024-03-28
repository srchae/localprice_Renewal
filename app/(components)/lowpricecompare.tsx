import ChevronLeft from '@/public/icons/chevron-left';
import ChevronRight from '@/public/icons/chevron-right';

export default function LowPriceCompare() {
  return (
    <section className="h-[399px] w-full">
      <article className="flex h-[400px] w-full flex-col">
        <section>
          <h1 className="p-5 text-3xl font-semibold">최저가 비교</h1>
        </section>
        <section className="mx-auto flex w-[400px] items-center justify-center gap-5">
          <ChevronLeft />
          <LowPriceCompareChart />
          <LowPriceCompareChart />
          <ChevronRight />
        </section>
      </article>
    </section>
  );
}

export function LowPriceCompareChart() {
  return (
    <div className="h-[300px] w-[490px]">
      <article className="border-gray flex h-[290px] w-[490px] flex-col items-center justify-center rounded-2xl border-2">
        <section className="flex">
          <article className="flex h-[200px] w-[200px] items-center justify-center rounded-2xl bg-#D9D9D9"></article>
          <article className="flex h-[200px] w-[240px] items-center justify-center rounded-2xl ">
            최저가 그래프
          </article>
        </section>
        <section className="flex flex-col">
          <p className=" text-xl font-semibold">UNI 플라잉 웜업 자켓 (BLACK)</p>
          <p className="text-base text-#A2A2A2 ">
            최저가 정보 719,000원 / 판매처 뉴발란스
          </p>
        </section>
      </article>
    </div>
  );
}
