<template>
  <div class="mainbody">
    <head>
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      <link rel="icon" href="<%= BASE_URL %>favicon.ico" />
      <title>Changsoo's Tokyo Diary</title>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css"
      />
      <link href="../assets/dist/css/bootstrap.min.css" rel="stylesheet" />
    </head>
    <body>
      <main class="container">
        <div class="p-4 p-md-5 mb-4 rounded text-bg-dark" id="background">
          <div class="col-md-6 px-0">
            <h1 class="display-4 fst-italic">Trip to Tokyo</h1>
            <p class="lead my-3">
              Day 1: 네즈거리 + 애니메이션 "너의 이름은" 성지
            </p>
            <p class="lead my-3">Day 2: 에비스 + 아키하바라 + 롯폰기</p>
            <p class="lead my-3">Day 3: 도쿄역 + 긴자</p>
          </div>
        </div>

        <div class="row mb-2">
          <div class="col-md-6">
            <div
              class="
                row
                g-0
                border
                rounded
                overflow-hidden
                flex-md-row
                mb-4
                shadow-sm
                h-md-250
                position-relative
              "
            >
              <div class="col p-4 d-flex flex-column position-static">
                <strong class="d-inline-block mb-2 text-primary">Day 1</strong>
                <h3 class="mb-0">네즈거리, "너의 이름은" 성지</h3>
                <div class="mb-1 text-muted">Nov 18 2022</div>
                <p class="mb-auto">
                  일본 애니메이션과, 평범한 도쿄의 풍경을 즐길 수 있는 여행지
                </p>
                <router-link to="/day1"
                  ><a class="stretched-link"
                    >더 많은 사진과 내용 보기</a
                  ></router-link
                >
              </div>
              <div class="col-auto d-none d-lg-block">
                <img
                  class="bd-placeholder-img"
                  width="200"
                  height="250"
                  src="../assets/day1-7.jpeg"
                  role="img"
                  aria-label="Placeholder: Thumbnail"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                />
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#55595c" />
                <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                  Thumbnail
                </text>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div
              class="
                row
                g-0
                border
                rounded
                overflow-hidden
                flex-md-row
                mb-4
                shadow-sm
                h-md-250
                position-relative
              "
            >
              <div class="col p-4 d-flex flex-column position-static">
                <strong class="d-inline-block mb-2 text-success">Day 2</strong>
                <h3 class="mb-0">에비스, 아키하바라, 롯폰기</h3>
                <div class="mb-1 text-muted">Nov 19 2022</div>
                <p class="mb-auto">
                  20대에게 핫한 에비스, 일본에서만 느낄 수 있는 아키하바라,
                  청담동 느낌의 부촌 롯폰기
                </p>
                <router-link to="/day2"
                  ><a class="stretched-link"
                    >더 많은 사진과 내용 보기</a
                  ></router-link
                >
              </div>
              <div class="col-auto d-none d-lg-block">
                <img
                  class="bd-placeholder-img"
                  width="200"
                  height="250"
                  src="../assets/day2-3.jpeg"
                  role="img"
                  aria-label="Placeholder: Thumbnail"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                />
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#55595c" />
                <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                  Thumbnail
                </text>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div
              class="
                row
                g-0
                border
                rounded
                overflow-hidden
                flex-md-row
                mb-4
                shadow-sm
                h-md-250
                position-relative
              "
            >
              <div class="col p-4 d-flex flex-column position-static">
                <strong class="d-inline-block mb-2 text-primary">Day 3</strong>
                <h3 class="mb-0">도쿄 역, 긴자</h3>
                <div class="mb-1 text-muted">Nov 20 2022</div>
                <p class="mb-auto">
                  메이지 신궁과 거대한 도쿄역, 일본의 강남 긴자
                </p>
                <router-link to="/day3"
                  ><a class="stretched-link"
                    >더 많은 사진과 내용 보기</a
                  ></router-link
                >
              </div>
              <div class="col-auto d-none d-lg-block">
                <img
                  class="bd-placeholder-img"
                  width="200"
                  height="250"
                  src="../assets/day3-1.jpeg"
                  role="img"
                  aria-label="Placeholder: Thumbnail"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                />
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#55595c" />
                <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                  Thumbnail
                </text>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div
              class="
                row
                g-0
                border
                rounded
                overflow-hidden
                flex-md-row
                mb-4
                shadow-sm
                h-md-250
                position-relative
              "
            >
              <div class="col p-4 d-flex flex-column position-static">
                <strong class="d-inline-block mb-2 text-success"
                  >Day 1~3</strong
                >
                <h3 class="mb-0">Foodies</h3>
                <div class="mb-1 text-muted">Nov 18~20 2022</div>
                <p class="mb-auto">도쿄에서 먹었던 모든 것</p>
                <router-link to="/foodies"
                  ><a class="stretched-link"
                    >더 많은 사진과 내용 보기</a
                  ></router-link
                >
              </div>
              <div class="col-auto d-none d-lg-block">
                <img
                  class="bd-placeholder-img"
                  width="200"
                  height="250"
                  src="../assets/Food8.jpeg"
                  role="img"
                  aria-label="Placeholder: Thumbnail"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                />
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#55595c" />
                <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                  Thumbnail
                </text>
              </div>
            </div>
          </div>
        </div>

        <div class="row g-5">
          <div class="col-md-8">
            <h3 class="pb-4 mb-4 fst-italic border-bottom">
              2022/11/18 ~ 2022/11/20 일본 여행
            </h3>

            <article class="blog-post">
              <h2 class="blog-post-title mb-1">여행지 : 도쿄</h2>
              <p class="blog-post-meta">
                날짜 : 2022년 11월 18일 ~ 2022년 11월 20일(2박 3일)
              </p>

              <p>
                목적 : 대학 졸업 후 세상 밖에 나가기 전에, 더 넓은 세상을 느끼며
                세상을 보는 시야를 넓히고, 도쿄라는 거대한 도시로부터 영감을
                받기 위해서 옆 나라 일본의 수도이자 깊은 역사를 자랑하는 도쿄를
                여행지로 정하게 되었다.
              </p>
              <hr />

              <h2>여행 계획 및 예산</h2>
              <p>총 4인의 일본 여행 예산은?</p>
              <blockquote class="blockquote">
                <p>1인당 70만원!</p>
              </blockquote>
              <hr />
            </article>

            <article class="blog-post">
              <h3>여행 예산 계획안</h3>
              <p>출발부터 복귀까지의 모든 경비</p>
              <table class="table">
                <thead>
                  <tr>
                    <th>항목</th>
                    <th>비용(4인 기준)</th>
                    <th>총합</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>비행기 표(왕복)</td>
                    <td>35만원 * 4인 = 140만원</td>
                    <td>1,400,000</td>
                  </tr>
                  <tr>
                    <td>숙소</td>
                    <td>15 * 2일 = 30만원</td>
                    <td>1,700,000</td>
                  </tr>
                  <tr>
                    <td>교통비(공항까지 왕복)</td>
                    <td>50,000 * 4명 = 20만원</td>
                    <td>1,900,000</td>
                  </tr>
                  <tr>
                    <td>교통비(일본에서)</td>
                    <td>70,000 * 4명 = 28만원</td>
                    <td>2,180,000</td>
                  </tr>
                  <tr>
                    <td>식비(일본에서)</td>
                    <td>50,000 * 3일 * 4명 = 60만원</td>
                    <td>2,780,000</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td>Totals</td>
                    <td>-</td>
                    <td>2,780,000원</td>
                  </tr>
                </tfoot>
              </table>

              <p>
                1인당 예산 70만원 * 4인 = 2,800,000 원에 맞추어 예산 편성을
                완료하였고, 인당 10만원의 예비비를 추가하기로 하였다.
              </p>
              <hr />
            </article>

            <article class="blog-post">
              <h3>여행 타임 테이블</h3>
              <p>Day 1 ~ Day 3 세부 일정 계획</p>
              <table class="table" id="time-table">
                <thead>
                  <tr>
                    <th>시간</th>
                    <th>Day 1</th>
                    <th>Day 2</th>
                    <th>Day 3</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>08:00</td>
                    <td rowspan="3">비행기 탑승 및 수속</td>
                    <td>기상 및 아침식사</td>
                    <td>기상 및 아침식사</td>
                  </tr>
                  <tr>
                    <td>09:00</td>
                    <td>에비스로 이동</td>
                    <td>도쿄역으로 이동</td>
                  </tr>
                  <tr>
                    <td>10:00</td>
                    <td rowspan="2">에비스 거리 구경</td>
                    <td rowspan="3">짐 보관 후 메이지신궁 관광</td>
                  </tr>
                  <tr>
                    <td>11:00</td>
                    <td rowspan="2">네즈 거리 관광</td>
                  </tr>
                  <tr>
                    <td>12:00</td>

                    <td>점심식사</td>
                  </tr>
                  <tr>
                    <td>13:00</td>
                    <td>점심 식사</td>
                    <td>아키하바라로 이동</td>
                    <td>점심 식사</td>
                  </tr>
                  <tr>
                    <td>14:00</td>
                    <td rowspan="4">너의 이름은 성지 투어</td>
                    <td rowspan="2">메이드 카페 관광</td>
                    <td rowspan="5">긴자 쇼핑</td>
                  </tr>
                  <tr>
                    <td>15:00</td>
                  </tr>
                  <tr>
                    <td>16:00</td>

                    <td rowspan="2">아키하바라 관광</td>
                  </tr>
                  <tr>
                    <td>17:00</td>
                  </tr>
                  <tr>
                    <td>18:00</td>
                    <td rowspan="3">저녁 식사 및 음주</td>
                    <td>저녁 식사</td>
                  </tr>
                  <tr>
                    <td>19:00</td>

                    <td>롯폰기로 이동</td>
                    <td>저녁 식사</td>
                  </tr>
                  <tr>
                    <td>20:00</td>

                    <td>롯폰기 관광</td>
                    <td>공항으로 이동</td>
                  </tr>
                  <tr>
                    <td>21:00</td>
                    <td rowspan="2">신주쿠 야경 구경</td>
                    <td rowspan="2">이자카야</td>
                    <td rowspan="3">수속 및 비행기 탑승</td>
                  </tr>
                  <tr>
                    <td>22:00</td>
                  </tr>
                  <tr>
                    <td>23:00</td>
                    <td colspan="2">취침 준비 및 취침</td>
                  </tr>
                </tbody>
              </table>

              <p></p>
              <hr />
            </article>
          </div>

          <div class="col-md-4">
            <div class="position-sticky" style="top: 2rem">
              <div class="p-4 mb-3 bg-light rounded">
                <h4 class="fst-italic">About Me</h4>
                <img src="../assets/Me.jpeg" width="100%" id="img1" alt="" />
                <hr />
                <p class="mb-0">이름 : 이창수</p>
                <p class="mb-0">나이 : 25</p>
                <p class="mb-0">장래희망 : CEO</p>
                <p class="mb-0">
                  자기소개 : 꿈을 향해 떠날 준비중인 예비 졸업생
                </p>
                <p></p>
                <p class="mb-0">대학생활 주요 활동</p>
                <p class="mb-0">- 17년도 컴퓨터 공학부 과대표</p>
                <p class="mb-0">- 20년도 스쿼시 동아리 SAM 회장</p>
                <p class="mb-0">- 21~22 창업동아리 ProjectUniverse 대표</p>
              </div>

              <div class="p-4">
                <h4 class="fst-italic">My Pages</h4>
                <ol class="list-unstyled">
                  <li>
                    <img src="../assets/github.png" width="20px" alt="" /><a
                      href="https://github.com/swa05142"
                      >GitHub</a
                    >
                  </li>
                  <li>
                    <img src="../assets/tistory.png" width="20px" alt="" />
                    <a href="https://tech-archive.tistory.com/"
                      >Tistory 블로그</a
                    >
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </main>
    </body>
  </div>
</template>

<script>
export default {};
</script>

<style>
.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}

.b-example-divider {
  height: 3rem;
  background-color: rgba(0, 0, 0, 0.1);
  border: solid rgba(0, 0, 0, 0.15);
  border-width: 1px 0;
  box-shadow: inset 0 0.5em 1.5em rgba(0, 0, 0, 0.1),
    inset 0 0.125em 0.5em rgba(0, 0, 0, 0.15);
}

.b-example-vr {
  flex-shrink: 0;
  width: 1.5rem;
  height: 100vh;
}

.bi {
  vertical-align: -0.125em;
  fill: currentColor;
}

.nav-scroller {
  position: relative;
  z-index: 2;
  height: 2.75rem;
  overflow-y: hidden;
}

.nav-scroller .nav {
  display: flex;
  flex-wrap: nowrap;
  padding-bottom: 1rem;
  margin-top: -1px;
  overflow-x: auto;
  text-align: center;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
}
#background {
  background-image: url("../assets/IncheonAirport.jpeg");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: auto;
  width: 100%;
}
#img1 {
  align-items: center;
}
#time-table {
  text-align: center;
  vertical-align: middle;
}
footer {
  text-align: center;
}
</style>