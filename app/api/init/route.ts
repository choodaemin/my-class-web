import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // 1. 테이블 생성
    await sql`
      CREATE TABLE IF NOT EXISTS club_members (
        id SERIAL PRIMARY KEY,
        name VARCHAR(50) NOT NULL,
        role VARCHAR(50) NOT NULL,
        intro TEXT,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;

    // 2. 초기 샘플 부원 데이터 삽입 (테이블이 비어있을 때만 실행)
    const existing = await sql`SELECT COUNT(*) FROM club_members;`;
    if (Number(existing.rows[0].count) === 0) {
      await sql`
        INSERT INTO club_members (name, role, intro) VALUES
        ('홍길동', '부장', '동아리를 이끌고 있습니다.'),
        ('김철수', '부부장', '개발 및 운영 지원을 담당합니다.'),
        ('이영희', '부원', '새로운 프로젝트를 함께 만들어가요!');
      `;
    }

    return NextResponse.json({ message: 'DB 테이블 생성 및 초기 데이터 세팅 완료' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
