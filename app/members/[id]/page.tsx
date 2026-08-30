export default async function MemberDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-2xl border shadow-sm">
      <div className="text-center pb-6 border-b">
        <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4" />
        <h1 className="text-2xl font-bold">학생 ID: {id}번 상세 페이지</h1>
        <p className="text-gray-500 text-sm mt-1">개인 소개 및 롤링페이퍼 공간</p>
      </div>
      <div className="mt-6 space-y-4">
        <div>
          <h3 className="text-sm font-semibold text-gray-600">나의 다짐</h3>
          <p className="text-gray-800 mt-1">올 한 해 후회 없이 열심히 달리기!</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-600">남겨진 한마디</h3>
          <p className="text-sm text-gray-500 bg-gray-50 p-3 rounded-lg mt-1">친구가 남긴 응원 메시지가 표시됩니다.</p>
        </div>
      </div>
    </div>
  );
}
