import Heart from '@/public/icons/heart';

export default function LiveItem() {
  return (
    <article>
      <div className="flex h-[120px] w-[120px] justify-end rounded-2xl bg-#D9D9D9 py-4 pr-4">
        <Heart />
      </div>
      <article>
        <h2 className="h-[31px] text-lg font-normal text-white">Brand Name</h2>
        <p className="text-base font-normal text-white">
          상품 한 줄 설명입니다.
        </p>
        <div className="flex">
          <s className="text-sm text-#C4C4C4">239,000</s>&nbsp;
          <p className="text-sm text-#FF0505">5%&nbsp;</p>
          <p className="text-sm text-white">227,050원</p>
        </div>
      </article>
    </article>
  );
}
