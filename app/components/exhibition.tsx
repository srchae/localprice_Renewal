import ChevronLeft from '@/public/icons/chevron-left';
import ExItem from './exhibition/exitem';
import ChevronRight from '@/public/icons/chevron-right';
import ChevronLeftWhite from '@/public/icons/chevron-left-white';
import ChevronRightWhite from '@/public/icons/chevron-right-white';

export default function Exhibition() {
  return (
    <article className="flex h-[887px] w-full justify-center bg-black py-20">
      <div className="flex items-center">
        <ChevronLeftWhite />
      </div>
      <div className="bg-#333333 h-[345px] w-[1061px]">
        <nav className="p-3">
          <p className="flex h-[36px] w-[118px] items-center justify-center rounded-2xl border border-white text-[21px] font-semibold text-white">
            기획전
          </p>
        </nav>
        <article className="flex gap-6">
          {/* <ChevronLeftWhite /> */}
          <ExItem />
          <ExItem />
          <ExItem />
          <ExItem />
        </article>
      </div>
      <div className="flex items-center">
        <ChevronRightWhite />
      </div>
    </article>
  );
}
