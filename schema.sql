-- Create tables for the ATA Study Club website

-- Categories table
CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  parent_id INTEGER REFERENCES categories(id)
);

-- Study materials table
CREATE TABLE study_materials (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  category_id INTEGER REFERENCES categories(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  views INTEGER DEFAULT 0,
  downloads INTEGER DEFAULT 0,
  featured BOOLEAN DEFAULT false
);

-- Insert some sample categories
INSERT INTO categories (name, slug, parent_id) VALUES
('메인 페이지', 'main', null),
('공지사항', 'notices', null),
('커뮤니티', 'community', null),
('스터디모집', 'study-recruitment', null),
('모임', 'meetings', 4),
('스터디자료', 'study-materials', 4),
('자료요청', 'material-requests', 4),
('자유게시판', 'free-board', 4),
('FAQ', 'faq', 4),
('공지/이벤트', 'announcements', 4),
('스터디 후기', 'study-reviews', 4);

-- Insert sample study materials
INSERT INTO study_materials (title, description, category_id, featured, views, downloads) VALUES
('2023년 1학기 스터디 자료 모음', '2023년 1학기 ATA 스터디 클럽에서 사용된 자료 모음입니다.', 6, true, 120, 45),
('영어회화 스터디 가이드', '영어회화 스터디를 위한 가이드라인과 학습 자료입니다.', 6, true, 89, 32),
('프로그래밍 기초 학습 자료', '프로그래밍 입문자를 위한 기초 학습 자료입니다.', 6, true, 156, 78),
('토익 고득점 전략', '토익 시험 고득점을 위한 전략과 팁 모음입니다.', 6, false, 210, 95),
('일본어 N2 대비 자료', '일본어 JLPT N2 시험 대비를 위한 학습 자료입니다.', 6, false, 75, 28),
('데이터 분석 스터디 자료', '데이터 분석 입문자를 위한 스터디 자료입니다.', 6, false, 92, 41),
('디자인 포트폴리오 작성법', '효과적인 디자인 포트폴리오 작성을 위한 가이드입니다.', 6, false, 68, 30),
('마케팅 전략 케이스 스터디', '다양한 마케팅 전략 케이스 스터디 자료입니다.', 6, true, 112, 47),
('취업 면접 준비 자료', '취업 면접 준비를 위한 팁과 예상 질문 모음입니다.', 6, false, 189, 86),
('논문 작성 가이드', '학술 논문 작성을 위한 단계별 가이드입니다.', 6, false, 79, 35);
