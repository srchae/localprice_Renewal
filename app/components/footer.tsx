export default function Footer() {
  return (
    <>
      <div className="w-[1440px] py-6 text-center text-xl">
        <strong>푸터</strong>
        <br />
        (고객센터 전화번호 / 대표자명/ 주소 / 사업자번호 / 통신판매업)
      </div>
      <div className="flex h-[66px] w-full items-center justify-center gap-3">
        <button className="h-[36px] border border-black bg-white px-5 text-base">
          이용약관
        </button>
        <button className="h-[36px] border border-black bg-white px-5 text-base">
          개인정보 처리방침
        </button>
        <button className="h-[36px] border border-black bg-white px-5 text-base">
          사업자 정보 확인
        </button>
        <button className="h-[36px] border border-black bg-white px-5 text-base">
          1:1 고객센터
        </button>
        <button className="h-[36px] border border-black bg-white px-5 text-base">
          SNS(유튜브,인스타 등등..)
        </button>
        <p className="h-[36px] w-[169px] px-5 py-1 text-center text-base">
          QR코드
        </p>
        <button className="h-[36px] border border-black bg-white px-5 text-base">
          에스크로 가입사실 확인
        </button>
      </div>
    </>
  );
}
