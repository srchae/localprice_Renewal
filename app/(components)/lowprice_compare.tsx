import ChevronLeft from '@/public/icons/chevron-left';
import ChevronRight from '@/public/icons/chevron-right';
import Chart from '@/public/images/chart';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

export default function LowPriceCompare() {
  return (
    <section className="h-[399px] w-full">
      <article className="flex h-[400px] w-full flex-col">
        <section>
          <h1 className="p-5 text-3xl font-semibold">최저가 비교</h1>
        </section>
        <section className="flex items-center justify-center">
          <ChevronLeft />
          <div className="border-gray h-[300px] w-[500px] rounded-2xl border">
            <article className="flex h-[290px] w-[490px] flex-col items-center justify-center">
              <section className="flex">
                <article className="flex h-[220px] w-[220px] items-center justify-center rounded-2xl bg-#D9D9D9"></article>
                <article className="flex h-[220px] w-[240px] items-center justify-center rounded-2xl ">
                  최저가 그래프
                </article>
              </section>
              <section className="flex flex-col text-left">
                <h1 className="text-xl font-semibold">
                  UNI 플라잉 웜업 자켓 (BLACK)
                </h1>
                <p className="text-#A2A2A2 text-base ">
                  최저가 정보 719,000원 / 판매처 뉴발란스
                </p>
              </section>
            </article>
          </div>
          <div className="border-gray h-[300px] w-[500px] rounded-2xl border">
            <article className="flex h-[290px] w-[490px] flex-col items-center justify-center">
              <section className="flex">
                <article className="flex h-[220px] w-[220px] items-center justify-center rounded-2xl bg-#D9D9D9"></article>
                <article className="flex h-[220px] w-[240px] items-center justify-center rounded-2xl ">
                  최저가 그래프
                </article>
              </section>
              <section>
                <h1 className="text-xl font-semibold">
                  UNI 플라잉 웜업 자켓 (BLACK)
                </h1>
                <p className="text-#A2A2A2 text-base">
                  최저가 정보 719,000원 / 판매처 뉴발란스
                </p>
              </section>
            </article>
          </div>
          <ChevronRight />
        </section>
      </article>
    </section>
  );
}
