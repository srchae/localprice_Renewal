import { GradientButton } from '../button';
import { LowPriceCompareChart } from '../lowpricecompare';

export default function LiveBestProduct() {
  return (
    <div className="mx-auto flex w-[1024px]">
      <section className="flex flex-col gap-5">
        <nav className="flex justify-between">
          <p className="text-2xl font-bold">라이브 베스트 상품</p>
          <p>전체보기</p>
        </nav>
        <figure className="flex gap-3">
          <GradientButton>1뎁스</GradientButton>
          <button>상시 기획전</button>
          <button>인기 상품</button>
          <button>1뎁스 카테고리</button>
        </figure>
        <article className="flex flex-wrap gap-5">
          <LowPriceCompareChart />
          <LowPriceCompareChart />
          <LowPriceCompareChart />
          <LowPriceCompareChart />
        </article>
      </section>
    </div>
  );
}
