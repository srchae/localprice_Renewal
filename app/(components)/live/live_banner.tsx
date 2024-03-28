import ChevronLeftWhite from '@/public/icons/chevron-left-white';
import LiveItem from './live_product';
import ChevronRightWhite from '@/public/icons/chevron-right-white';
import { ColorButton } from '../button';
import LiveProduct from './live_product';

export default function LiveBanner() {
  return (
    <section className="bg-#2B2B2B flex h-[702px] w-full items-center justify-center gap-10">
      <ChevronLeftWhite />
      <LiveCard />
      <LiveProductList />
      <ChevronRightWhite />
    </section>
  );
}

export function LiveCard() {
  return (
    <article className="flex h-[550px] w-[357px] flex-col items-center justify-between rounded-3xl bg-black">
      <div className=" mt-5 flex h-[30px] w-full items-center justify-end p-5">
        <figure className="bg-#5510D3 pr-50 mt-5 flex h-[56px] w-[56px] items-center justify-center rounded-full text-white">
          icon
        </figure>
      </div>
      <figure className="mb-9 flex h-[93px] w-[300px] items-center justify-center gap-3 rounded-full bg-#D9D9D9">
        <article className="bg-#BDB9B9 h-[80px] w-[80px] rounded-full"></article>
        <article className="flex flex-col">
          <p className="font-bold">브랜드명</p>
          <p>1.4k Followers</p>
        </article>
        <button className="bg-#5510D3 h-[40px] w-[75px] rounded-full font-bold text-white">
          팔로우
        </button>
      </figure>
    </article>
  );
}

export function LiveProductList() {
  return (
    <article className="flex h-[521px] w-[700px] justify-center">
      <div className="flex flex-col items-start justify-center gap-20 pt-10">
        <section className="flex flex-col">
          <p className="text-[41px] font-semibold text-white">
            Lorem Ipsum Dolor
          </p>
          <p className="text-3xl text-white">Lorem Ipsum Dolor</p>
        </section>
        <section className="flex h-[317px] flex-col gap-5">
          <p className="text-lg font-bold text-white">Product List</p>
          <article className="flex gap-10">
            <LiveProduct />
            <LiveProduct />
            <LiveProduct />
          </article>
        </section>
      </div>
    </article>
  );
}
