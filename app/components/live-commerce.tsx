import Button from './commerce/button';
import Card from './commerce/card';

export default function LiveCommerce() {
  return (
    <div className="mt-5 h-[600px] w-full">
      <b className="py-5 text-3xl font-extrabold">라이브 커머스</b>
      <p className="pb-3 pt-2 font-normal">
        지금 바로 최신 트렌드와 함께하는 라이브 커머스! 실시간으로 상품을
        확인하고
        <br />
        특별한 혜택을 놓치지 마세요.
      </p>
      <nav className="flex justify-between py-5 ">
        <div className="flex gap-5">
          {/* Button : 라이브 커머스의 On Live는 공통 컴포넌트로 사용하고자 components > commerce에 분리 */}
          <Button />
          <button className=" h-[50px] w-[120px] rounded-[32px] border border-black text-base font-semibold text-black">
            Schedule
          </button>
        </div>
        <button className=" h-[50px] w-[120px] rounded-[32px] border border-black text-base font-semibold text-#A29B9B">
          전체보기
        </button>
      </nav>
      <div className="flex justify-center ">
        <article className="flex h-[398px] gap-5">
          <Card />
          <Card />
          <Card />
          <Card />
        </article>
      </div>
    </div>
  );
}
