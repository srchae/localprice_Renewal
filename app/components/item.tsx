export default function Item() {
  return (
    <article>
      <p className="flex h-[332px] w-[353px] flex-shrink-0 items-center justify-center bg-gray-300">
        이미지
      </p>
      <article>
        <h2 className="text-2xl font-semibold">Brand Name</h2>
        <p>상품 한 줄 설명입니다.</p>
        <s className="text-#C4C4C4">239,000</s>
        <div className="flex">
          <p className="text-#FF0505">5%&nbsp;</p>
          <p>227,050원</p>
        </div>
        <button className="bg-#D9D9D9 h-[25px] w-[146px] rounded ">
          가격비교 상품 8
        </button>
      </article>
    </article>
  );
}
