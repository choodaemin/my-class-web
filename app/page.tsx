import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="space-y-8">
      {/* 메인 대표 이미지 영역 */}
      <div className="relative w-full h-80 rounded-2xl overflow-hidden shadow-md bg-gray-200">
        <img
          src="/main-banner.jpg" 
          alt="학급 단체 사진" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6 text-white">
          <h1 className="text-3xl font-bold">2026학년도 3학년 1반</h1>
          <p className="text-gray-200 mt-1">함께 성장하고 즐겁게 배우는 우리들의 공간</p>
        </div>
      </div>

      {/* 빠른 바로가기 카드 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link href="/notice" className="p-5 bg-white rounded-xl shadow-sm hover:shadow-md border border-gray-100 transition">
          <h2 className="font-bold text-lg mb-1">📢 최신 공지사항</h2>
          <p className="text-sm text-gray-500">학급 주요 일정과 준비물을 확인하세요.</p>
        </Link>
        <Link href="/board" className="p-5 bg-white rounded-xl shadow-sm hover:shadow-md border border-gray-100 transition">
          <h2 className="font-bold text-lg mb-1">📸 학급 갤러리</h2>
          <p className="text-sm text-gray-500">우리 반의 최근 활동 사진을 모아봤어요.</p>
        </Link>
        <Link href="/members" className="p-5 bg-white rounded-xl shadow-sm hover:shadow-md border border-gray-100 transition">
          <h2 className="font-bold text-lg mb-1">👥 우리 반 친구들</h2>
          <p className="text-sm text-gray-500">친구들의 소개와 롤링페이퍼를 만나보세요.</p>
        </Link>
      </div>
    </div>
  );
}
