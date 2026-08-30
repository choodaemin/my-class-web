import Link from 'next/link';

const MEMBERS = [
  { id: '1', name: '김철수', role: '반장', motto: '즐겁게 생활하자' },
  { id: '2', name: '이영희', role: '부반장', motto: '서로 도우며 살기' },
  { id: '3', name: '박민수', role: '미화부장', motto: '깨끗한 우리 교실' },
];

export default function MembersPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">우리 반 구성원</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {MEMBERS.map((member) => (
          <Link
            key={member.id}
            href={`/members/${member.id}`}
            className="p-5 bg-white rounded-xl border hover:border-blue-500 hover:shadow-md transition text-center"
          >
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full mx-auto flex items-center justify-center font-bold text-xl mb-3">
              {member.name[0]}
            </div>
            <h2 className="font-bold text-lg">{member.name}</h2>
            <span className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-full">{member.role}</span>
            <p className="text-xs text-gray-500 mt-2 italic">"{member.motto}"</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
