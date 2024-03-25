import Heart from '@/public/icons/heart';

export default function ExItem() {
  return (
    <div>
      <div className="bg-#D9D9D9 mt-52 flex h-[263px] w-[247px] justify-end rounded-2xl py-4 pr-4">
        <Heart />
      </div>
      <article>
        <h2 className="text-2xlfont-normal h-[31px] w-[192px] text-2xl text-white">
          Brand Name
        </h2>
        <p className="font-normal text-white">상품 한 줄 설명입니다.</p>
        <div className="flex">
          <s className="text-#C4C4C4 text-[21px]">239,000</s>&nbsp;
          <p className="text-#FF0505 text-[22px]">5%&nbsp;</p>
          <p className="text-[22px] text-white">227,050원</p>
        </div>
      </article>
    </div>
  );
}
