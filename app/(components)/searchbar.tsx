'use client';

import Search from '@/public/icons/search';
import SearchIcon from '@/public/icons/search-icon';
// import Camera from './camera';

export default function SearchBar({ placeholder }: { placeholder: string }) {
  return (
    <form className="flex">
      <div>
        <input
          type="text"
          className="h-[52px] w-[360px] rounded-2xl border-none bg-gray-100 placeholder:text-gray-400"
          placeholder="검색어를 입력해 주세요."
        />
        {/* <div className="inset-y-0 start-0 flex items-center gap-2 ps-3">
          <Search />
          <Camera />
        </div> */}
      </div>
    </form>

    // <form className="mx-auto h-[52px] w-[360px] max-w-md">
    //   <label className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white">
    //     Search
    //   </label>
    //   <div className="relative">
    //     <input
    //       type="search"
    //       id="default-search"
    //       className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 ps-10 text-sm text-gray-900"
    //       placeholder="검색어를 입력해 주세요."
    //       required
    //     />
    //     <div className="flex">
    //       <Search />
    //       <Camera />
    //     </div>
    //     {/* <div className="absolute inset-y-0 start-0 flex items-center gap-2 ps-3">
    //       <Search />
    //       <Camera />
    //     </div> */}
    //     {/* <button
    //       type="submit"
    //       className="absolute bottom-2.5 end-2.5 rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    //     >
    //       Search
    //     </button> */}
    //   </div>
    // </form>
  );
}
