import {registerLocale} from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
    Wrapper,
    H1, Container, MarginTop,
} from "../../assets/css/setting/MainStyleCSS";
import styled from "styled-components";
import {useState} from "react";
import ko from "date-fns/locale/ko";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import moment from "moment";


registerLocale('ko', ko);

const 메인 = styled.div`
  border: black solid 1px; // 테두리 << 일단 확인용 나중에 지워
  ::-webkit-scrollbar {
    display: none;
  }
`;

const 사이드 = styled.div`
  margin-left: 20px;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const 스크롤처리 = styled.div`
    overflow-y: auto; // 내부 수직 스크롤바
    max-height: 85.6vh;  // 계산 끝
`;

const 달력자리 = styled.div`
  align-items: center; // 자식 요소를 수직으로 중앙 정렬
  width: 330px;
  border: lightgray solid 1px; // 실선 테두리
  border-radius: 15px;
  display: flex;
  flex-direction: column;
`;

const 예매하기 = styled.div`
  display: flex;
  width: 332px;
  height: 50px;
  margin-top: 10px;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  background-color: #8e43e7; 
  cursor: pointer;
  color: white;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 0.1em;
`;

const StyledCalendar = styled(Calendar)`
  border: none;

  .react-calendar__navigation { // 년, 월
    margin-bottom: 0px
  }

  .react-calendar__navigation__label { // 년, 월
    font-size: 17px;
  }

  .react-calendar__navigation__arrow { // 년, 월 옆 네비게이션 버튼
    font-size: 22px;
  }

  .react-calendar__month-view__weekdays { // 요일 전체 div
    background-color: #f0f0f0; /* 밝은 회색 배경 설정 */
  }

  .react-calendar__month-view__weekdays__weekday {
    font-size: 16px;
  }

  .react-calendar__month-view__days__day--weekend { // 주말 숫자
    color: #000000; /* 주말의 기본 색상 (토요일, 일요일) */
  }

  .react-calendar__month-view__days__day { // 일일(숫자)
    font-size: 16px;
  }
  
  .react-calendar__navigation__prev2-button,
  .react-calendar__navigation__next2-button { // 년 이동 버튼
    display: none;
  }

  .react-calendar__navigation__prev-button { // 이전월 이동 버튼
    color: #CCC;
    margin-left: 40px;
  }
  .react-calendar__navigation__next-button { // 다음월 이동 버튼
    color: #CCC;
    margin-right: 40px;
  }
`;

const LightGrayLine = styled.div`
  width: 100%;
  border-top: lightgray solid 1px;
`;

function MainDetailPage() {
    const [value, onChange] = useState(new Date());

    return (
        <Wrapper>
            <MarginTop>
                <Container>
                    <메인>
                        <스크롤처리>
                            <Container>
                                <div style={{width: '300px', height: '400px' , backgroundColor: '#CCC'}}>
                                    포스터 이미지
                                    <br/>
                                    300x400 사이즈
                                    <br/>
                                    <br/>
                                    <br/>
                                    ← 테두리 삭제 예정
                                </div>
                                <div style={{ width: '584px', height: '400px', marginLeft: '40px', border: '1px solid #000' }}>
                                    <H1>제목 : </H1>
                                    <H1>장소 : </H1>
                                    <H1>공연기간 : </H1>
                                    <H1>관람연령 : </H1>
                                    <H1>가격 : </H1>
                                    <H1>※ 테이블 구조로 바꿔보자</H1>
                                    <H1>(↓테두리 삭제예정)</H1>
                                </div>
                            </Container>
                            <H1>공연정보</H1>
                            <H1>(디테일이미지 전 공지사항, 매진 등 입력 가능)</H1>
                            <div style={{width: '926px', height: '2000px' , backgroundColor: '#CCC'}}>
                                <H1>상세페이지 이미지</H1>
                                <H1>첨부한 파일_(아래스크롤)</H1>
                                <Calendar />
                                <a>이건 기본 캘린더</a>
                            </div>
                            <H1>그 외 기타 추가 내용이 있을까</H1>
                        </스크롤처리>
                    </메인>
                    <사이드>
                        <스크롤처리 >
                            <달력자리>
                                <div style={{width:'90%', marginTop:'10px' }}>
                                    <div style={{ textAlign: 'left', fontSize: '14px', fontWeight: 'bold' }}>관람일</div>
                                    <StyledCalendar
                                        onChange={onChange}
                                        value={value}
                                        locale="ko"
                                        formatDay={(locale, date) => moment(date).format('D')}
                                        showNeighboringMonth={false}
                                        calendarType="US" // 일요일부터 시작
                                    />
                                </div>
                                <LightGrayLine />
                                <div style={{width:'90%', margin:'10px 0'}}>
                                    <div style={{ textAlign: 'left', fontSize: '14px', fontWeight: 'bold' }}>회차</div>
                                    <div style={{ marginTop: '5px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                                        <div style={{ textAlign: 'center', fontSize: '14px', fontWeight: 'bold', border:'black solid 1px', borderRadius: '5px', padding:'10px'}}>1회 09:00</div>
                                        <div style={{ textAlign: 'center', fontSize: '14px', fontWeight: 'bold', border:'black solid 1px', borderRadius: '5px', padding:'10px'}}>2회 13:00</div>
                                        <div style={{ textAlign: 'center', fontSize: '14px', fontWeight: 'bold', border:'black solid 1px', borderRadius: '5px', padding:'10px'}}>3회 19:00</div>
                                    </div>
                                </div>
                                <LightGrayLine />
                                <div style={{width:'90%', margin:'10px 0'}}>
                                    <div style={{ textAlign: 'left', fontSize: '14px', fontWeight: 'bold' }}>좌석</div>
                                    <div style={{ marginTop: '5px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                                        <div style={{ textAlign: 'center', fontSize: '14px', fontWeight: 'bold', border:'black solid 1px', borderRadius: '5px', padding:'10px'}}>VIP석</div>
                                        <div style={{ textAlign: 'center', fontSize: '14px', fontWeight: 'bold', border:'black solid 1px', borderRadius: '5px', padding:'10px'}}>R석</div>
                                        <div style={{ textAlign: 'center', fontSize: '14px', fontWeight: 'bold', border:'black solid 1px', borderRadius: '5px', padding:'10px'}}>S석</div>
                                    </div>
                                </div>
                                <LightGrayLine />
                                <div style={{width:'90%', margin:'10px 0'}}>
                                    <div style={{ textAlign: 'left', fontSize: '14px', fontWeight: 'bold' }}>수량</div>
                                    <div style={{ marginTop: '5px' }}>
                                        <select>
                                            {[...Array(10).keys()].map((value) => (
                                                <option key={value + 1} value={value + 1}>{value + 1}</option>
                                            ))}
                                        </select> 개
                                    </div>
                                </div>
                                <LightGrayLine />
                                <div style={{width:'90%', margin:'10px 0'}}>
                                    <div style={{ textAlign: 'left', fontSize: '14px', fontWeight: 'bold' }}>선택정보</div>
                                    <div style={{ width: '90%', margin: '10px 0 0 0', display: 'grid' }}>
                                        <div style={{ textAlign: 'left', fontSize: '14px', fontWeight: 'bold' }}>
                                            yyyy년 MM월 dd일 hh:mm
                                            <br/>
                                            VIP석 1개
                                        </div>
                                    </div>
                                </div>
                            </달력자리>
                            <예매하기>
                                예매하기
                            </예매하기>
                        </스크롤처리>

                    </사이드>
                </Container>
            </MarginTop>
        </Wrapper>
    );
};

export default MainDetailPage;