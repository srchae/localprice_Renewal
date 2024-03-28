import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Footer() {
  return (
    <>
      <footer className="flex h-[213px] w-screen justify-between border-t-2 border-#5A28EC p-5 pt-10">
        <section className="flex flex-col gap-5">
          <figure className="flex gap-3">
            <Button className="flex w-[100px] justify-center rounded-2xl border border-black">
              이용약관
            </Button>
            <Button className="flex w-[150px] justify-center rounded-2xl border border-black">
              개인정보처리방침
            </Button>
          </figure>
          <figure className="flex items-center gap-10">
            <p className="text-#747474">대표이사 / 000</p>
            <p className="text-#747474">사업자등록번호 000-00-00000</p>
            <p className="text-#747474">서울 강남구 논현로 99길 24 1층</p>
            <Button className="text-#5F5F5F flex w-[150px] justify-center font-bold">
              사업자정보확인
            </Button>
          </figure>
          <figure>
            <p className="text-#747474">통신판매업번호&nbsp;00000000000</p>
          </figure>
        </section>
        <section className="flex flex-col gap-3 text-right">
          <p className="text-4xl font-bold text-#C4C4C4">0000-0000</p>
          <p>고객센터 평일 09:00 ~ 18:00(토/일/공휴일 휴무)</p>
          <p>점심시간 12:30 ~ 13:30</p>
        </section>
      </footer>
    </>
  );
}

export function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        'flex h-10 items-center rounded-full border border-black px-4 text-sm font-bold text-black',
        className,
      )}
    >
      {children}
    </button>
  );
}
