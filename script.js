const links = [
  {
    title: "강의 자료",
    description: "수업 참고 자료",
    url: "https://dirt-reply-492.notion.site/34f74e0f600d80319e7cffee38274b34?source=copy_link",
    label: "D",
  },
  // {
  //   title: "실습 템플릿",
  //   description: "프롬프트 및 자동화 실습 파일",
  //   url: "https://example.com/practice-template",
  //   label: "T",
  // },
  // {
  //   title: "구글시트 자동화",
  //   description: "데이터 정리 및 자동화 예제",
  //   url: "https://example.com/google-sheet",
  //   label: "S",
  // },
  // {
  //   title: "API 실습",
  //   description: "API 기본 개념과 호출 예제",
  //   url: "https://example.com/api-practice",
  //   label: "A",
  // },
  // {
  //   title: "설문 제출",
  //   description: "교육 만족도 및 피드백",
  //   url: "https://example.com/survey",
  //   label: "Q",
  // },
  // {
  //   title: "추가 참고 링크",
  //   description: "수업 후 살펴볼 생성형 AI 자료",
  //   url: "https://example.com/references",
  //   label: "R",
  // },
];

const linkGrid = document.querySelector("#linkGrid");

linkGrid.innerHTML = links
  .map(
    (link) => `
      <a class="link-card" href="${link.url}" target="_blank" rel="noopener noreferrer">
        <span class="link-icon">${link.label}</span>
        <span>
          <span class="link-title">${link.title}</span>
          <span class="link-desc">${link.description}</span>
        </span>
        <span class="link-arrow" aria-hidden="true">›</span>
      </a>
    `,
  )
  .join("");
