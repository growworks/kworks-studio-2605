export type FilmoEntry = {
  year: string
  title: string
  titleEn: string
  role: string
  outlet: string
}

export type FilmoCategory =
  | 'film'
  | 'drama'
  | 'play'
  | 'musical'
  | 'ent'
  | 'album'
  | 'cf'
  | 'mv'

export type GalleryRow = {
  big: { src: string; alt: string }
  col: { src: string; alt: string }[]
  reverse?: boolean
}

export type Artist = {
  slug: string
  index: number
  ko: string
  en: string
  born: string
  birthPlace?: string
  birthYearShort: string
  height?: string
  education: string
  debut: string
  agency: string
  sns?: { label: string; href: string }
  description: string
  heroImage: string
  cardImage: string
  profileImage: string
  artistsCardImage: string
  filmography: Record<FilmoCategory, FilmoEntry[]>
  galleries: GalleryRow[]
  reel?: { youtubeId: string; title: string }
  pdfHref?: string
}

export const ARTISTS: Artist[] = [
  {
    slug: 'yoon-bok-in',
    index: 1,
    ko: '윤복인',
    en: 'Yoon Bok-in',
    born: '1969.12.16',
    birthPlace: '충청북도 괴산',
    birthYearShort: 'b.1969',
    education: '고교 시절부터 연극 시작',
    debut: '1990, 현대극단 연극 무대 데뷔',
    agency: 'K Works Studio',
    description:
      '한 장면을 오래 기억하게 만드는 배우.\n오랜 시간 한국 영화와 드라마를 지켜온 중견.',
    heroImage: '/assets/images/res/yoon-02.jpg',
    cardImage: '/assets/images/res/yoon-01.jpg',
    profileImage: '/assets/images/res/yoon-03.jpg',
    artistsCardImage: '/assets/images/res/yoon-01.jpg',
    filmography: {
      film: [
        { year: '2025', title: '세하별', titleEn: '', role: '', outlet: '' },
        { year: '2024', title: '설계자', titleEn: '', role: '', outlet: '' },
        { year: '2022', title: '안녕하세요', titleEn: '', role: '', outlet: '' },
        { year: '2020', title: '앙상블', titleEn: '', role: '', outlet: '' },
        { year: '2019', title: '그대 이름은 장미', titleEn: '', role: '', outlet: '' },
        { year: '2014', title: '가시', titleEn: '', role: '', outlet: '' },
        { year: '2009', title: '오르골', titleEn: '', role: '', outlet: '' },
        { year: '2008', title: '크로싱', titleEn: '', role: '', outlet: '' },
        { year: '2008', title: '좋은 밤 되세요', titleEn: '', role: '', outlet: '' },
        { year: '2007', title: '이대근, 이댁은', titleEn: '', role: '', outlet: '' },
        { year: '2006', title: '누가 그녀와 잤을까?', titleEn: '', role: '', outlet: '' },
        { year: '2006', title: '모두들 괜찮아요?', titleEn: '', role: '', outlet: '' },
        { year: '2005', title: '11월', titleEn: '', role: '', outlet: '' },
      ],
      drama: [
        { year: '2026', title: '신이랑 법률사무소', titleEn: '', role: '', outlet: 'SBS' },
        { year: '2026', title: '사랑을 처방해 드립니다', titleEn: '', role: '', outlet: 'KBS' },
        { year: '2026', title: '프로보노', titleEn: '', role: '', outlet: 'tvN' },
        { year: '2025', title: '우주메리미', titleEn: '', role: '', outlet: 'SBS' },
        { year: '2025', title: '그놈은 흑염룡', titleEn: '', role: '', outlet: 'tvN' },
        { year: '2024', title: '결혼하자 맹꽁아!', titleEn: '', role: '', outlet: 'KBS' },
        { year: '2024', title: '손해 보기 싫어서', titleEn: '', role: '', outlet: 'tvN' },
        { year: '2024', title: '졸업', titleEn: '', role: '', outlet: 'tvN' },
        { year: '2024', title: '피도 눈물도 없이', titleEn: '', role: '', outlet: 'KBS' },
        { year: '2023', title: '고려 거란 전쟁', titleEn: '', role: '', outlet: 'KBS' },
        { year: '2023', title: '하늘의 연인', titleEn: '', role: '', outlet: 'MBC' },
        { year: '2023', title: '사랑이라 말해요', titleEn: '', role: '', outlet: 'Disney+' },
        { year: '2023', title: '대행사', titleEn: '', role: '', outlet: 'JTBC' },
        { year: '2022', title: '치얼업', titleEn: '', role: '', outlet: 'SBS' },
        { year: '2022', title: '현재는 아름다워', titleEn: '', role: '', outlet: 'KBS' },
        { year: '2022', title: '기상청 사람들', titleEn: '', role: '', outlet: 'JTBC' },
        { year: '2022', title: '비밀의 집', titleEn: '', role: '', outlet: 'MBC' },
        { year: '2021', title: '술꾼도시여자들', titleEn: '', role: '', outlet: 'TVING' },
        { year: '2021', title: '한 사람만', titleEn: '', role: '', outlet: 'JTBC' },
        { year: '2021', title: '그래서 나는 안티팬과 결혼했다', titleEn: '', role: '', outlet: '네이버TV' },
        { year: '2021', title: 'IDOL [아이돌 : The Coup]', titleEn: '', role: '', outlet: 'JTBC' },
        { year: '2021', title: '빈센조', titleEn: '', role: '', outlet: 'tvN' },
        { year: '2021', title: '안녕? 나야!', titleEn: '', role: '', outlet: 'KBS' },
        { year: '2020', title: '친구에서 연인이 되는 경우의 수', titleEn: '', role: '', outlet: 'JTBC' },
        { year: '2020', title: '트레인', titleEn: '', role: '', outlet: 'OCN' },
        { year: '2020', title: '위험한 약속', titleEn: '', role: '', outlet: 'KBS' },
        { year: '2019', title: '스토브리그', titleEn: '', role: '', outlet: 'SBS' },
        { year: '2019', title: '첫사랑은 처음이라서', titleEn: '', role: '', outlet: 'Netflix' },
        { year: '2019', title: '모두의 거짓말', titleEn: '', role: '', outlet: 'OCN' },
        { year: '2019', title: '너의 노래를 들려줘', titleEn: '', role: '', outlet: 'SBS' },
        { year: '2019', title: '수상한 장모', titleEn: '', role: '', outlet: 'SBS' },
        { year: '2019', title: '용왕님이 보우하사', titleEn: '', role: '', outlet: 'MBC' },
        { year: '2018', title: '내일도 맑음', titleEn: '', role: '', outlet: 'KBS' },
        { year: '2017', title: '20세기 소년소녀', titleEn: '', role: '', outlet: 'MBC' },
        { year: '2017', title: '무궁화 꽃이 피었습니다', titleEn: '', role: '', outlet: 'KBS' },
        { year: '2017', title: '수상한 파트너', titleEn: '', role: '', outlet: 'KBS' },
        { year: '2017', title: '개인주의자 지영씨', titleEn: '', role: '', outlet: 'KBS' },
        { year: '2017', title: '훈장 오순남', titleEn: '', role: '', outlet: 'MBC' },
        { year: '2016', title: '불야성', titleEn: '', role: '', outlet: 'MBC' },
        { year: '2016', title: '저 하늘에 태양이', titleEn: '', role: '', outlet: 'KBS' },
        { year: '2016', title: '마녀보감', titleEn: '', role: '', outlet: 'JTBC' },
        { year: '2016', title: '동네변호사 조달호', titleEn: '', role: '', outlet: 'KBS' },
        { year: '2016', title: '천상의 약속', titleEn: '', role: '', outlet: 'KBS' },
        { year: '2016', title: '치즈인더트랩', titleEn: '', role: '', outlet: 'tvN' },
        { year: '2015', title: '내 딸 금사월', titleEn: '', role: '', outlet: 'MBC' },
        { year: '2015', title: '어셈블리', titleEn: '', role: '', outlet: 'KBS' },
        { year: '2015', title: '풍문으로 들었소', titleEn: '', role: '', outlet: 'SBS' },
        { year: '2014', title: '드라마스페셜 - 가봉', titleEn: '', role: '', outlet: 'MBC' },
        { year: '2014', title: '밀회', titleEn: '', role: '', outlet: 'JTBC' },
        { year: '2013', title: '세계의 끝', titleEn: '', role: '', outlet: 'JTBC' },
      ],
      play: [
        { year: '2014', title: '별이 빛나는 밤에', titleEn: '', role: '', outlet: '연극' },
        { year: '2012', title: '비내리는 클리블랜드', titleEn: '', role: '', outlet: '연극' },
        { year: '2010', title: '부드러운 매장 : 창작예찬', titleEn: '', role: '', outlet: '연극' },
        { year: '2009', title: '세자매', titleEn: '', role: '', outlet: '연극' },
        { year: '2008', title: '부드러운 매장 : 창작예찬', titleEn: '', role: '', outlet: '연극' },
        { year: '2008', title: '철로', titleEn: '', role: '', outlet: '2008 서울연극제' },
        { year: '2005', title: '갈매기', titleEn: '', role: '', outlet: '연극' },
      ],
      ent: [
        { year: '2024', title: '아는형님', titleEn: '', role: '게스트', outlet: 'JTBC' },
        { year: '2016', title: '대국민 토크쇼 안녕하세요', titleEn: '', role: '게스트', outlet: 'KBS' },
      ],
      musical: [],
      album: [],
      cf: [],
      mv: [],
    },
    galleries: [
      {
        big: { src: '/assets/images/res/yoon-01.jpg', alt: '윤복인 화보 1' },
        col: [
          { src: '/assets/images/res/yoon-04.jpg', alt: '윤복인 화보 2' },
          { src: '/assets/images/res/yoon-02.jpg', alt: '윤복인 화보 3' },
        ],
      },
    ],
  },
  {
    slug: 'lee-byung-jun',
    index: 2,
    ko: '이병준',
    en: 'Lee Byung-jun',
    born: '1964.01.27',
    birthPlace: '부산',
    birthYearShort: 'b.1964',
    education: '동국대학교 연극예술학과 석사 졸업 · 단국대학교 대학원 국어국문학 박사과정 수료',
    debut: '1985, 무용제 〈도시이야기〉 연극 데뷔',
    agency: 'K Works Studio',
    description:
      '한 마디의 무게로 장면을 다스리는 배우.\n연극·뮤지컬·스크린을 오가며 40년을 쌓은 중견.',
    heroImage: '/assets/images/res/lee-03.jpg',
    cardImage: '/assets/images/res/lee-03.jpg',
    profileImage: '/assets/images/res/lee-02.jpg',
    artistsCardImage: '/assets/images/res/lee-03.jpg',
    filmography: {
      film: [
        { year: '2024', title: '카인의 도시', titleEn: '', role: '', outlet: '' },
        { year: '2017', title: '내게 남은 사랑을', titleEn: '', role: '', outlet: '' },
        { year: '2017', title: '살인자의 기억법', titleEn: '', role: '', outlet: '' },
        { year: '2016', title: '여자전쟁: 봉천동 혈투', titleEn: '', role: '', outlet: '' },
        { year: '2015', title: '돌연변이', titleEn: '', role: '', outlet: '' },
        { year: '2014', title: '나의 독재자', titleEn: '', role: '', outlet: '' },
        { year: '2014', title: '백프로', titleEn: '', role: '', outlet: '' },
        { year: '2013', title: '전국 노래자랑', titleEn: '', role: '', outlet: '' },
        { year: '2012', title: '점쟁이들', titleEn: '', role: '', outlet: '' },
        { year: '2012', title: '5백만불의 사나이', titleEn: '', role: '', outlet: '' },
        { year: '2012', title: '아부의 왕', titleEn: '', role: '', outlet: '' },
        { year: '2012', title: '러브 픽션', titleEn: '', role: '', outlet: '' },
        { year: '2012', title: '네버엔딩 스토리', titleEn: '', role: '', outlet: '' },
        { year: '2011', title: '퍼펙트 게임', titleEn: '', role: '', outlet: '' },
        { year: '2010', title: '지구대표 롤링 스타즈', titleEn: '', role: '', outlet: '' },
        { year: '2010', title: '파괴된 사나이', titleEn: '', role: '', outlet: '' },
        { year: '2009', title: '부산', titleEn: '', role: '', outlet: '' },
        { year: '2009', title: '식객: 김치전쟁', titleEn: '', role: '', outlet: '' },
        { year: '2008', title: '눈에는 눈 이에는 이', titleEn: '', role: '', outlet: '' },
        { year: '2007', title: '복면달호', titleEn: '', role: '', outlet: '' },
        { year: '2006', title: '구타유발자들', titleEn: '', role: '', outlet: '' },
        { year: '1995', title: '영원한 제국', titleEn: '', role: '', outlet: '' },
        { year: '1995', title: '네온 속으로 노을지다', titleEn: '', role: '', outlet: '' },
        { year: '1995', title: '무궁화 꽃이 피었습니다', titleEn: '', role: '', outlet: '' },
      ],
      drama: [
        { year: '2026', title: '21세기 대군부인', titleEn: '', role: '', outlet: 'MBC' },
        { year: '2024', title: '사랑은 외나무다리에서', titleEn: '', role: '', outlet: 'tvN' },
        { year: '2024', title: '스캔들', titleEn: '', role: '', outlet: 'KBS' },
        { year: '2024', title: '놀아주는 여자', titleEn: '', role: '', outlet: 'JTBC' },
        { year: '2024', title: '웰컴투 삼달리', titleEn: '', role: '', outlet: 'JTBC' },
        { year: '2023', title: '마에스트라', titleEn: '', role: '', outlet: 'tvN' },
        { year: '2023', title: '완벽한 결혼의 정석', titleEn: '', role: '', outlet: 'MBN' },
        { year: '2023', title: '더글로리 파트2', titleEn: '', role: '', outlet: 'tvN' },
        { year: '2022', title: '더글로리 파트1', titleEn: '', role: '', outlet: 'tvN' },
        { year: '2022', title: '재벌집 막내아들', titleEn: '', role: '', outlet: 'JTBC' },
        { year: '2021', title: '헬아부지', titleEn: '', role: '', outlet: 'WHYNOT' },
        { year: '2021', title: '오케이 광자매', titleEn: '', role: '', outlet: 'KBS' },
        { year: '2020', title: '18 어게인', titleEn: '', role: '', outlet: 'JTBC' },
        { year: '2020', title: '편의점 샛별이', titleEn: '', role: '', outlet: 'SBS' },
        { year: '2020', title: '하이바이, 마마!', titleEn: '', role: '', outlet: 'tvN' },
        { year: '2019', title: '너의 노래를 들려줘', titleEn: '', role: '', outlet: 'KBS' },
        { year: '2018', title: '죽어도 좋아', titleEn: '', role: '', outlet: 'KBS' },
        { year: '2017', title: '미워도 사랑해', titleEn: '', role: '', outlet: 'KBS' },
        { year: '2017', title: '로봇이 아니야', titleEn: '', role: '', outlet: 'MBC' },
        { year: '2017', title: '고백부부', titleEn: '', role: '', outlet: 'KBS' },
        { year: '2017', title: '아버지가 이상해', titleEn: '', role: '', outlet: 'KBS' },
        { year: '2016', title: '화랑', titleEn: '', role: '', outlet: 'KBS' },
        { year: '2016', title: '우리 갑순이', titleEn: '', role: '', outlet: 'SBS' },
        { year: '2016', title: '당신은 선물', titleEn: '', role: '', outlet: 'SBS' },
        { year: '2016', title: '또! 오해영', titleEn: '', role: '', outlet: 'tvN' },
        { year: '2015', title: '그녀는 예뻤다', titleEn: '', role: '', outlet: 'MBC' },
        { year: '2015', title: '딱 너같은 딸', titleEn: '', role: '', outlet: 'MBC' },
        { year: '2014', title: '왕의얼굴', titleEn: '', role: '', outlet: 'KBS' },
        { year: '2014', title: '내일도 칸타빌레', titleEn: '', role: '', outlet: 'KBS' },
        { year: '2014', title: '드라마 스페셜 - 수상한 7병동', titleEn: '', role: '', outlet: 'KBS' },
        { year: '2014', title: '개과천선', titleEn: '', role: '', outlet: 'MBC' },
        { year: '2014', title: '앙큼한 돌싱녀', titleEn: '', role: '', outlet: 'MBC' },
        { year: '2014', title: '드라마 스페셜 - 나에게로 와서 별이 되었다', titleEn: '', role: '', outlet: 'KBS' },
        { year: '2013', title: '네 이웃의 아내', titleEn: '', role: '', outlet: 'JTBC' },
        { year: '2013', title: '왕가네 식구들', titleEn: '', role: '', outlet: 'KBS' },
        { year: '2013', title: '너의 목소리가 들려', titleEn: '', role: '', outlet: 'SBS' },
        { year: '2013', title: '돈의 화신', titleEn: '', role: '', outlet: 'SBS' },
        { year: '2012', title: '전우치', titleEn: '', role: '', outlet: 'KBS' },
        { year: '2012', title: '세상 어디에도 없는 착한남자', titleEn: '', role: '', outlet: 'KBS' },
        { year: '2012', title: '신의', titleEn: '', role: '', outlet: 'SBS' },
        { year: '2012', title: '각시탈', titleEn: '', role: '', outlet: 'KBS' },
        { year: '2012', title: '굿바이 마눌', titleEn: '', role: '', outlet: '채널A' },
        { year: '2012', title: '도롱뇽도사와 그림자 조작단', titleEn: '', role: '', outlet: 'SBS' },
        { year: '2011', title: '고봉실 아줌마 구하기', titleEn: '', role: '', outlet: 'TV조선' },
        { year: '2011', title: '오마이갓x2', titleEn: '', role: '', outlet: 'SBS+' },
        { year: '2011', title: '나도 꽃', titleEn: '', role: '', outlet: 'MBC' },
        { year: '2011', title: '포세이돈', titleEn: '', role: '', outlet: 'KBS' },
        { year: '2011', title: '스파이 명월', titleEn: '', role: '', outlet: 'KBS' },
        { year: '2011', title: '버디버디', titleEn: '', role: '', outlet: 'tvN' },
        { year: '2011', title: '오마이갓', titleEn: '', role: '', outlet: 'SBS+' },
        { year: '2011', title: '드림하이', titleEn: '', role: '', outlet: 'KBS' },
        { year: '2010', title: '시크릿 가든', titleEn: '', role: '', outlet: 'SBS' },
        { year: '2010', title: '국가가 부른다', titleEn: '', role: '', outlet: 'KBS' },
        { year: '2010', title: '위기일발 풍년빌라', titleEn: '', role: '', outlet: 'tvN' },
        { year: '2010', title: '공부의 신', titleEn: '', role: '', outlet: 'KBS' },
        { year: '2009', title: '탐나는도다', titleEn: '', role: '', outlet: 'MBC' },
        { year: '2009', title: '열혈장사꾼', titleEn: '', role: '', outlet: 'KBS' },
        { year: '2009', title: '신데렐라 맨', titleEn: '', role: '', outlet: 'MBC' },
        { year: '2009', title: '남자이야기', titleEn: '', role: '', outlet: 'KBS' },
        { year: '2008', title: '과거를 묻지 마세요', titleEn: '', role: '', outlet: 'OCN' },
        { year: '2008', title: '코끼리', titleEn: '', role: '', outlet: 'MBC' },
        { year: '2007', title: '칼잡이 오수정', titleEn: '', role: '', outlet: 'SBS' },
        { year: '2007', title: '쩐의전쟁 -보너스 라운드', titleEn: '', role: '', outlet: 'SBS' },
        { year: '2007', title: '메리대구 공방전', titleEn: '', role: '', outlet: 'MBC' },
        { year: '2007', title: '달려라! 고등어', titleEn: '', role: '', outlet: 'SBS' },
        { year: '2006', title: '하이에나', titleEn: '', role: '', outlet: 'tvN' },
        { year: '2006', title: '무적의 낙하산 요원', titleEn: '', role: '', outlet: 'SBS' },
        { year: '2006', title: '어느날 갑자기', titleEn: '', role: '', outlet: 'SBS' },
        { year: '2005', title: "패션 70's", titleEn: '', role: '', outlet: 'SBS' },
        { year: '2004', title: '영웅시대', titleEn: '', role: '', outlet: 'MBC' },
        { year: '2004', title: '남자가 사랑할 때', titleEn: '', role: '', outlet: 'SBS' },
        { year: '2003', title: '때려', titleEn: '', role: '', outlet: 'SBS' },
        { year: '2003', title: '대장금', titleEn: '', role: '', outlet: 'MBC' },
        { year: '2002', title: '야인시대', titleEn: '', role: '', outlet: 'SBS' },
        { year: '2001', title: '춤추는 소녀 와와', titleEn: '', role: '', outlet: 'EBS' },
      ],
      play: [
        { year: '', title: '오이디푸스왕', titleEn: '', role: '오이디푸스 役', outlet: '연극' },
        { year: '', title: '토막', titleEn: '', role: '', outlet: '연극' },
        { year: '', title: '밧줄', titleEn: '', role: '루우크 役', outlet: '연극' },
        { year: '', title: '서푼짜리오페라', titleEn: '', role: '매크 役', outlet: '연극' },
        { year: '', title: '광대의 꿈', titleEn: '', role: '', outlet: '서울예술단 무용극' },
      ],
      musical: [
        { year: '', title: '벤허', titleEn: '', role: '퀸터스 役', outlet: '뮤지컬' },
        { year: '', title: '한네', titleEn: '', role: '윤필주 役', outlet: '뮤지컬' },
        { year: '', title: '지붕위의 바이올린', titleEn: '', role: '리쟈르 役', outlet: '뮤지컬' },
        { year: '', title: '포기와 베스', titleEn: '', role: '크라운 役', outlet: '뮤지컬' },
        { year: '', title: '블러드 브라더스', titleEn: '', role: 'Mrs.Lions 役', outlet: '뮤지컬' },
        { year: '', title: '아가씨와 건달들', titleEn: '', role: '빅쥴 役', outlet: '뮤지컬' },
        { year: '', title: '웨스트 사이드 스토리', titleEn: '', role: '경관 役', outlet: '뮤지컬' },
        { year: '', title: '내생애 최고의 날', titleEn: '', role: '마이클 役', outlet: '뮤지컬' },
        { year: '', title: '장보고의 꿈', titleEn: '', role: '김양 役', outlet: '뮤지컬' },
        { year: '', title: '겨울 나그네', titleEn: '', role: '술집주인 / 민우아버지 役', outlet: '뮤지컬' },
        { year: '', title: '명성황후', titleEn: '', role: '이노우에 役', outlet: '뮤지컬' },
        { year: '', title: '휘가로의 결혼', titleEn: '', role: '최사장 役', outlet: '뮤지컬' },
        { year: '', title: '환타스틱', titleEn: '', role: '벨로미 役', outlet: '뮤지컬' },
        { year: '', title: '동물농장', titleEn: '', role: '복서 役', outlet: '뮤지컬' },
        { year: '', title: '유린타운', titleEn: '', role: '클로드웰 役', outlet: '뮤지컬' },
        { year: '', title: '시카고', titleEn: '', role: '아모스 役', outlet: '뮤지컬' },
        { year: '', title: '한여름 밤의꿈', titleEn: '', role: '', outlet: '뮤지컬' },
        { year: '', title: '춘향전', titleEn: '', role: '변사또 役', outlet: '뮤지컬' },
        { year: '', title: '누구를 위하여 종을 울리나', titleEn: '', role: '파블로 役', outlet: '뮤지컬' },
        { year: '', title: '아이두 아이두', titleEn: '', role: '마이클 役', outlet: '뮤지컬' },
        { year: '', title: '마인', titleEn: '', role: '', outlet: '뮤지컬' },
        { year: '', title: '뉴 씨저스패밀리', titleEn: '', role: '박치기 役', outlet: '뮤지컬' },
        { year: '', title: '미녀는 괴로워', titleEn: '', role: '이공학 役', outlet: '뮤지컬' },
        { year: '', title: '위대한 캣츠비 RE:BOOT', titleEn: '', role: '부르독 役', outlet: '뮤지컬' },
      ],
      ent: [
        { year: '', title: '복면가왕', titleEn: '', role: '', outlet: 'MBC' },
        { year: '', title: '전현무계획2', titleEn: '', role: '', outlet: 'MBN' },
        { year: '', title: '신발벗고 돌싱포맨', titleEn: '', role: '', outlet: 'SBS' },
        { year: '', title: '식객 허영만의 백반기행', titleEn: '', role: '', outlet: 'TV조선' },
        { year: '', title: '꼬리에 꼬리를 무는 그날 이야기', titleEn: '', role: '', outlet: 'SBS' },
        { year: '', title: '고향민국', titleEn: '', role: '', outlet: 'EBS' },
        { year: '', title: '뜨거운 싱어즈', titleEn: '', role: '', outlet: 'JTBC' },
        { year: '', title: '라디오스타', titleEn: '', role: '', outlet: 'MBC' },
        { year: '', title: '강심장', titleEn: '', role: '', outlet: 'SBS' },
        { year: '', title: '다이어트 서바이벌 빅토리', titleEn: '', role: '', outlet: 'SBS' },
        { year: '', title: '시추에이션 휴먼다큐, 그날', titleEn: '', role: '', outlet: 'MBC' },
      ],
      album: [
        { year: '2025', title: '땡떙이 원피스', titleEn: 'Album', role: '', outlet: '' },
      ],
      cf: [],
      mv: [],
    },
    galleries: [
      {
        big: { src: '/assets/images/res/lee-03.jpg', alt: '이병준 화보 1' },
        col: [
          { src: '/assets/images/res/lee-01.jpg', alt: '이병준 화보 2' },
          { src: '/assets/images/res/lee-04.jpg', alt: '이병준 화보 3' },
        ],
      },
      {
        reverse: true,
        big: { src: '/assets/images/res/lee-05.jpg', alt: '이병준 화보 4' },
        col: [
          { src: '/assets/images/res/lee-02.jpg', alt: '이병준 화보 5' },
        ],
      },
    ],
  },
]

export function findArtist(slug: string): Artist | undefined {
  return ARTISTS.find((a) => a.slug === slug)
}
