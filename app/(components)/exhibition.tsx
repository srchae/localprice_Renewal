import ChevronLeft from '@/public/icons/chevron-left';
import ExItem from './exhibition/exitem';
import ChevronRight from '@/public/icons/chevron-right';
import ChevronLeftWhite from '@/public/icons/chevron-left-white';
import ChevronRightWhite from '@/public/icons/chevron-right-white';

export default function Exhibition() {
  return (
    <article className="flex h-[729px] w-full justify-center bg-black py-20">
      <div className="flex items-center">
        <ChevronLeftWhite />
      </div>
      <div className="h-[333px] w-[900px] bg-#333333">
        <nav className="p-10">
          <p className="flex h-[36px] w-[118px] items-center justify-center rounded-2xl border border-white text-[21px] font-semibold text-white">
            기획전
          </p>
          <h1 className="mt-3 text-2xl font-bold text-white">
            새로운 계절과 새로운 편안함 포터리와 함께
          </h1>
        </nav>
        <article className="flex justify-center gap-4">
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
