'use client';

import LoginForm from './login-form';

export default function Footer() {
  return (
    <>
      <footer className="flex h-[213px] w-screen justify-between border-t-2 border-#5A28EC">
        <section className="flex flex-col">
          <figure className="">
            <button className="w-1/2 rounded-2xl border border-black">
              이용약관
            </button>
            <button className="w-full rounded-2xl border border-black">
              개인정보처리방침
            </button>
          </figure>
          <figure>
            <p>text</p>
            <p>text</p>
            <p>text</p>
            <button>사업자정보확인</button>
          </figure>
          <figure>
            <p>text</p>
            <p>text</p>
          </figure>
        </section>
        <section>
          <h1>0000-0000</h1>
          <p>text</p>
          <p>text</p>
        </section>
      </footer>
    </>
  );
}
