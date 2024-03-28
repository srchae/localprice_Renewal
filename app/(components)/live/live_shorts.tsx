import { GradientButton } from '../button';
import Card from '../commerce/card';

export default function LiveShorts() {
  return (
    <div className="mx-auto flex w-[1024px]">
      <section className="flex flex-col gap-5">
        <nav className="flex justify-between">
          <p className="text-2xl font-bold">하이라이트 쇼츠</p>
          <p>전체보기</p>
        </nav>
        <figure className="flex gap-3">
          <GradientButton>1뎁스</GradientButton>
          <button>상시 기획전</button>
          <button>인기 상품</button>
          <button>1뎁스 카테고리</button>
        </figure>
        <article className="flex gap-5">
          <Card />
          <Card />
          <Card />
          <Card />
        </article>
      </section>
    </div>
  );
}
