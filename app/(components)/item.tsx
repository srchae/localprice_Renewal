export default function Item() {
  return (
    <article className="h-[583px] w-[370px] rounded-md border border-gray-300">
      <div className="flex flex-col items-center justify-center">
        <div className="mt-4 flex h-[290px] w-[300px] flex-shrink-0 items-center justify-center rounded-md bg-gray-300">
          이미지
        </div>
        <article className="flex flex-col items-center justify-center">
          <h2 className="text-2xl font-semibold">Brand Name</h2>
          <p>상품 한 줄 설명입니다.</p>
          <s className="text-#C4C4C4">239,000</s>
          <div className="flex">
            <p className="text-#FF0505">5%&nbsp;</p>
            <p>227,050원</p>
          </div>
        </article>
      </div>
    </article>
  );
}
