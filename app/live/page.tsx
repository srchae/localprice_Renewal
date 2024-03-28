import LiveBanner from '../(components)/live/live_banner';
import LiveReplay from '../(components)/live/live_replay';
import LiveShorts from '../(components)/live/live_shorts';
import LiveSchedule from '../(components)/live/live_schedule';
import LiveBestProduct from '../(components)/live/live_bestproduct';
import LiveChannel from '../(components)/live/live_channel';
import React from 'react';

export default function LivePage() {
  return (
    <div className="flex flex-col gap-5">
      {/* 1. 최상단 라이브 페이지 배너 section */}
      <LiveBanner />
      {/* 2. 라이브 채널 section */}
      <LiveChannel />
      {/* 3. 라이브 스케줄 section */}
      <LiveSchedule />
      {/* 4. 라이브 다시보기 section */}
      <LiveReplay />
      {/* 5. 하이라이트 쇼츠 section */}
      <LiveShorts />
      {/* 6. 라이브 베스트 상품 */}
      <LiveBestProduct />
    </div>
  );
}
