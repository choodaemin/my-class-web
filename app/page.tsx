import { sql } from '@vercel/postgres';

export const revalidate = 0; // 페이지 새로고침 시 항상 최신 DB 데이터 반영

export default async function HomePage() {
  let members = [];
  let dbError = false;

  try {
    const { rows } = await sql`SELECT * FROM club_members ORDER BY id ASC;`;
    members = rows;
  } catch {
    dbError = true;
  }

  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      {/* 동아리 헤더 */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 mb-3">
          우리 동아리 공식 홈페이지
        </h1>
        <p className="text-lg text-slate-600">
          기술을 배우고 함께 프로젝트를 만드는 동아리입니다.
        </p>
      </section>

      {/* 부원 명단 섹션 */}
      <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <h2 className="text-2xl font-bold mb-6 text-slate-800">동아리 부원</h2>

        {dbError ? (
          <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg text-amber-800 text-sm">
            데이터베이스가 아직 초기화되지 않았습니다. 사이트 배포 후 브라우저 주소창에{' '}
            <code className="font-mono bg-amber-100 px-1 py-0.5 rounded">/api/init</code>을 입력해 초기 세팅을 완료해 주세요.
          </div>
        ) : members.length === 0 ? (
          <p className="text-slate-500">등록된 부원이 없습니다.</p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2">
            {members.map((member) => (
              <div
                key={member.id}
                className="p-4 rounded-xl border border-slate-100 bg-slate-50 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-slate-900 text-lg">{member.name}</span>
                    <span className="text-xs px-2.5 py-1 bg-blue-100 text-blue-700 font-medium rounded-full">
                      {member.role}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 mt-2">{member.intro}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
