import Heart from '@/public/icons/heart';

export default function ExItem() {
  return (
    <article>
      <div className="mt-32 flex h-[220px] w-[200px] justify-end rounded-2xl bg-#D9D9D9 py-4 pr-4">
        <Heart />
      </div>
      <article>
        <h2 className="text-2xlfont-normal h-[31px] w-[192px] text-2xl text-white">
          Brand Name
        </h2>
        <p className="font-normal text-white">상품 한 줄 설명입니다.</p>
        <div className="flex">
          <s className="text-base text-#C4C4C4">239,000</s>&nbsp;
          <p className="text-base text-#FF0505">5%&nbsp;</p>
          <p className="text-base text-white">227,050원</p>
        </div>
      </article>
    </article>
  );
}
