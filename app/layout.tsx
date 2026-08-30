import Link from 'next/link';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="bg-gray-50 text-gray-800">
        <header className="border-b bg-white sticky top-0 z-50">
          <nav className="max-w-5xl mx-auto flex items-center justify-between p-4">
            <Link href="/" className="text-xl font-bold text-blue-600">우리 반 홈페이지</Link>
            <div className="flex gap-6 text-sm font-medium">
              <Link href="/about" className="hover:text-blue-600">학급 소개</Link>
              <Link href="/notice" className="hover:text-blue-600">공지·소통</Link>
              <Link href="/members" className="hover:text-blue-600">구성원 소개</Link>
              <Link href="/board" className="hover:text-blue-600">소식 게시판</Link>
            </div>
          </nav>
        </header>
        <main className="max-w-5xl mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}
