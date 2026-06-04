export type WatchOnPlatform =
  | 'Theatrical'
  | 'Netflix'
  | 'Wavve'
  | 'TVING'
  | 'Watcha'
  | 'Disney+'
  | 'Coupang Play'

export type Production = {
  slug: string
  ko: string
  en: string
  year: string
  releaseDate?: string
  genre: string
  runtime?: string
  episodes?: string
  director: string
  distribution: string
  poster: string
  stills?: { src: string; alt: string }[]
  category: 'film' | 'drama' | 'short' | 'ongoing'
  synopsisLead: string
  synopsisBody: string
  trailer?: { youtubeId: string; title: string }
  cast: {
    director: string
    screenplay: string
    lead: { artistSlug?: string; name: string }[]
    supporting?: string
    music?: string
    producer?: string
    distributor?: string
  }
  watchOn: WatchOnPlatform[]
}

export const PRODUCTIONS: Production[] = [
  {
    slug: 'chaebi',
    ko: '채비',
    en: 'The Preparation',
    year: '2017',
    releaseDate: '2017.11.09',
    genre: '장편영화 · 드라마',
    runtime: '114분',
    director: '조영준',
    distribution: 'K Works Studio',
    poster: '/assets/images/movies/chaebi/poster.jpg',
    stills: [
      { src: '/assets/images/movies/chaebi/still-01.jpg', alt: '〈채비〉 스틸 ·어린이집 인규' },
      { src: '/assets/images/movies/chaebi/still-02.jpg', alt: '〈채비〉 스틸 ·시장의 인규' },
      { src: '/assets/images/movies/chaebi/still-03.jpg', alt: '〈채비〉 스틸 ·인규와 애순' },
      { src: '/assets/images/movies/chaebi/still-04.jpg', alt: '〈채비〉 스틸 ·식당의 문경' },
      { src: '/assets/images/movies/chaebi/still-05.jpg', alt: '〈채비〉 스틸 ·매점의 인규와 노부인' },
      { src: '/assets/images/movies/chaebi/still-06.jpg', alt: '〈채비〉 스틸 ·옷가게의 세 사람' },
      { src: '/assets/images/movies/chaebi/still-07.jpg', alt: '〈채비〉 스틸 ·골목의 애순' },
      { src: '/assets/images/movies/chaebi/still-08.jpg', alt: '〈채비〉 스틸 ·버스 안의 모자' },
      { src: '/assets/images/movies/chaebi/still-09.jpg', alt: '〈채비〉 스틸 ·옷가게의 애순과 문경' },
      { src: '/assets/images/movies/chaebi/still-10.jpg', alt: '〈채비〉 스틸 ·인규 클로즈업' },
      { src: '/assets/images/movies/chaebi/still-11.jpg', alt: '〈채비〉 스틸 ·정류장의 모자' },
      { src: '/assets/images/movies/chaebi/still-12.jpg', alt: '〈채비〉 스틸 ·산행의 인규' },
      { src: '/assets/images/movies/chaebi/still-13.jpg', alt: '〈채비〉 스틸 ·시장의 애순' },
      { src: '/assets/images/movies/chaebi/still-14.jpg', alt: '〈채비〉 스틸 ·산책길의 모자' },
      { src: '/assets/images/movies/chaebi/still-15.jpg', alt: '〈채비〉 스틸 ·정류장의 환한 모자' },
      { src: '/assets/images/movies/chaebi/still-16.jpg', alt: '〈채비〉 스틸 ·인규와 동네 어른' },
      { src: '/assets/images/movies/chaebi/still-17.jpg', alt: '〈채비〉 스틸 ·인규의 고백' },
      { src: '/assets/images/movies/chaebi/still-18.jpg', alt: '〈채비〉 스틸 ·김밥집의 두 사람' },
      { src: '/assets/images/movies/chaebi/still-19.jpg', alt: '〈채비〉 스틸 ·야경 속 애순' },
      { src: '/assets/images/movies/chaebi/character-01.jpg', alt: '〈채비〉 캐릭터 포스터 ·문경 (유선)' },
      { src: '/assets/images/movies/chaebi/character-02.jpg', alt: '〈채비〉 캐릭터 포스터 ·인규 (김성균)' },
      { src: '/assets/images/movies/chaebi/character-03.jpg', alt: '〈채비〉 캐릭터 포스터 ·애순 (고두심)' },
    ],
    category: 'film',
    synopsisLead: '30년 전통의 프로 잔소리꾼 vs 30년 내공의 프로 사고뭉치, 특별한 모자가 그려낸 분주한 이별 준비.',
    synopsisBody:
      '일곱살 같은 서른살 아들 인규를 24시간 특별 케어(?) 하느라 어느 새 30년 프로 잔소리꾼이 된 엄마 애순 씨는 앞으로 아들과 함께 할 시간이 많지 않음을 알게 된다. 자신이 떠난 후 남겨질 아들을 생각하니 또다시 걱정만 한 가득인 애순 씨는 세상과 어울리며 홀로 살아갈 인규를 위한 그녀만의 특별한 체크 리스트를 작성하고, 잠시 소원했던 첫째 딸 문경과 동네 사람들의 도움을 받으며 빈칸을 하나씩 채워나가기 시작하는데...',
    cast: {
      director: '조영준',
      screenplay: '조영준',
      lead: [
        { name: '고두심' },
        { name: '김성균' },
      ],
      supporting: '유선 · 박철민 · 김희정 · 신세경',
      producer: 'K Works Studio · (주)26컴퍼니',
    },
    watchOn: [],
  },
  {
    slug: 'bring-me-home',
    ko: '나를 찾아줘',
    en: 'Bring Me Home',
    year: '2019',
    releaseDate: '2019.11.27',
    genre: '장편영화 · 스릴러',
    runtime: '107분',
    director: '김승우',
    distribution: 'K Works Studio',
    poster: '/assets/images/movies/bring-me-home/poster.jpg',
    stills: [
      { src: '/assets/images/movies/bring-me-home/still-01.jpg', alt: '〈나를 찾아줘〉 스틸 ·정연' },
      { src: '/assets/images/movies/bring-me-home/still-02.jpg', alt: '〈나를 찾아줘〉 스틸 ·홍경장' },
      { src: '/assets/images/movies/bring-me-home/still-03.jpg', alt: '〈나를 찾아줘〉 스틸 ·추적' },
      { src: '/assets/images/movies/bring-me-home/still-04.jpg', alt: '〈나를 찾아줘〉 스틸 ·마을 사람들' },
      { src: '/assets/images/movies/bring-me-home/character-01.jpg', alt: '〈나를 찾아줘〉 캐릭터 포스터 ·이영애' },
      { src: '/assets/images/movies/bring-me-home/character-02.jpg', alt: '〈나를 찾아줘〉 캐릭터 포스터 ·유재명' },
      { src: '/assets/images/movies/bring-me-home/character-03.jpg', alt: '〈나를 찾아줘〉 캐릭터 포스터 ·박해준' },
    ],
    category: 'film',
    synopsisLead: '모두가 진실을 숨기고 있다',
    synopsisBody:
      '6년 전 정연의 아들이 실종됐다. 정연과 남편 명국은 실의와 죄책감으로 힘든 시간을 보내지만 아이를 찾을 수 있다는 희망을 포기하지 않는다. 어느 날 6년 전 실종된 아들을 봤다는 연락을 받은 정연. 숱하게 반복되던 거짓 제보와 달리 생김새부터 흉터까지 똑같은 아이를 봤다는 낯선 이의 이야기에 정연은 지체 없이 홀로 낯선 곳으로 향한다. 하지만 자신의 등장을 경계하는 듯한 경찰 홍경장과 비슷한 아이를 본 적도 없다는 마을 사람들. 그들이 뭔가 숨기고 있음을 직감한 정연은 포기하지 않고 진실을 찾기 시작하는데…',
    cast: {
      director: '김승우',
      screenplay: '김승우',
      lead: [
        { name: '이영애' },
        { name: '유재명' },
      ],
      producer: 'K Works Studio · 주식회사 26컴퍼니',
    },
    watchOn: [],
  },
  {
    slug: 'spring-again',
    ko: '다시, 봄',
    en: 'Spring, Again',
    year: '2018',
    releaseDate: '2019.04.17',
    genre: '장편영화 · 드라마 · 판타지',
    runtime: '104분',
    director: '정용주',
    distribution: 'K Works Studio',
    poster: '/assets/images/movies/spring-again/poster.jpg',
    stills: [
      { src: '/assets/images/movies/spring-again/still-01.jpg', alt: '〈다시, 봄〉 스틸 ·은조와 호민' },
      { src: '/assets/images/movies/spring-again/still-02.jpg', alt: '〈다시, 봄〉 스틸 ·은조' },
      { src: '/assets/images/movies/spring-again/still-03.jpg', alt: '〈다시, 봄〉 스틸 ·호민' },
    ],
    category: 'film',
    synopsisLead: '어제로 흐르는 시간, 인생의 두 번째 기회를 만났습니다.',
    synopsisBody:
      "인생의 유일한 행복인 딸을 사고로 잃은 후 절망에 빠진 '은조'(이청아). 중대한 결심을 한 그날, 눈을 떠보니 시간이 어제로 되돌아갔다. 거꾸로 흐르는 시간을 살게 된 '은조'는 불행했던 자신의 어제를 바꾸며 행복한 시간을 보내지만, 계속 어제로 흐르는 시간에 마음이 초조해진다. 그러던 어느 날, 시간여행에 관한 미스터리한 키를 쥔 남자 '호민'(홍종현)을 만나게 되는데…",
    cast: {
      director: '정용주',
      screenplay: '정용주',
      lead: [
        { name: '이청아' },
        { name: '홍종현' },
      ],
      producer: 'K Works Studio · (주)26컴퍼니',
    },
    watchOn: [],
  },
  {
    slug: 'a-child-of-silent',
    ko: '울지 않는 아이',
    en: 'A Child of Silent',
    year: '2024',
    releaseDate: '2025.04.09',
    genre: '장편영화 · 드라마',
    runtime: '109분',
    director: '이혁종',
    distribution: 'K Works Studio',
    poster: '/assets/images/movies/a-child-of-silent/poster.jpg',
    stills: [
      { src: '/assets/images/movies/a-child-of-silent/still-01.jpg', alt: '〈울지 않는 아이〉 스틸 ·순임' },
    ],
    category: 'film',
    synopsisLead: '손녀를 위해, 할머니의 마지막 결심.',
    synopsisBody:
      '친모에게 학대를 당하고 있는 손녀 수아를 구하기 위해 마지막 결심을 하는 할머니 순임의 이야기.',
    cast: {
      director: '이혁종',
      screenplay: '이혁종',
      lead: [
        { name: '이칸희' },
        { name: '최대철' },
      ],
      producer: 'K Works Studio · (주)아트컨티뉴',
    },
    watchOn: [],
  },
  {
    slug: 'love-again',
    ko: '두번할까요',
    en: 'LOVE, AGAIN',
    year: '2019',
    releaseDate: '2019.10.17',
    genre: '장편영화 · 코미디 · 멜로',
    runtime: '112분',
    director: '박용집',
    distribution: 'K Works Studio',
    poster: '/assets/images/movies/love-again/poster.jpg',
    stills: [
      { src: '/assets/images/movies/love-again/still-01.jpg', alt: '〈두번할까요〉 스틸 ·상철' },
      { src: '/assets/images/movies/love-again/still-02.jpg', alt: '〈두번할까요〉 스틸 ·현우' },
      { src: '/assets/images/movies/love-again/still-03.jpg', alt: '〈두번할까요〉 스틸 ·선영과 상철' },
      { src: '/assets/images/movies/love-again/still-04.jpg', alt: '〈두번할까요〉 스틸 ·이혼식' },
      { src: '/assets/images/movies/love-again/still-05.jpg', alt: '〈두번할까요〉 스틸 ·현우와 선영' },
      { src: '/assets/images/movies/love-again/still-06.jpg', alt: '〈두번할까요〉 스틸 ·현우와 상철' },
      { src: '/assets/images/movies/love-again/character-01.jpg', alt: '〈두번할까요〉 캐릭터 포스터 ·현우' },
    ],
    category: 'film',
    synopsisLead: "그 날의 '이혼식' 이후 제대로 꼬이기 시작했다?!",
    synopsisBody:
      '꿈꿔왔던 싱글라이프 현우. 쪽팔림을 무릅쓰고 감행했던 이혼식 후, 드디어 싱글라이프 입성! 꿈꿔왔던 자유를 되찾은 것도 잠시 엑스와이프 선영이 다시 돌아왔다. 게다가 옛 친구 상철까지 달고! 원치않던 싱글라이프 선영. 꼭 해야만했던 이혼식 후, 어쩌다 보니 싱글라이프 입성! 원수 같던 현우와 헤어지긴 했지만 그 없이는 어려운 일 투성이다. 그러던 어느 날, 모든 게 완벽한 상철이 나타났다! 끝내고픈 싱글라이프 상철. 이상형 선영과의 강렬한 만남 후, 잘만하면 싱글라이프 청산 가능! 얼굴, 능력 다 되지만 연애는 어떻게 하는 건지 도통 모르겠다. 별 수 없이 연애 상담을 위해 현우를 찾아가는데... 다시 얽혀버린 세 남녀의 출구 없는 싱글라이프가 펼쳐진다!',
    cast: {
      director: '박용집',
      screenplay: '박용집',
      lead: [
        { name: '권상우' },
        { name: '이정현' },
      ],
      supporting: '이종혁 외',
      producer: 'K Works Studio · (주)영화사울림',
    },
    watchOn: [],
  },
]

export function findProduction(slug: string): Production | undefined {
  return PRODUCTIONS.find((p) => p.slug === slug)
}
