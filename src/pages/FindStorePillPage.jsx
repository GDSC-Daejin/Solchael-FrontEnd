import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";
import styled from 'styled-components';

import "swiper/css/pagination";
import 'swiper/css';

import { FaSearch } from "react-icons/fa";
import { Colors } from '../styles/Colors';

import Cold from '../imgs/감기.png';
import Indigestion from '../imgs/소화불량.png';
import Headache from '../imgs/두통.png';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';

import drugBackground from "../imgs/drugsBackground.jpeg";
import usersImg from "../imgs/usersImg.svg";
import maleUser from "../imgs/maleUser.svg";

const RecommendContainer = styled.div`
`

const RecommendTopbox = styled.div`
  display: flex;
  height: 400px;
  padding-bottom: 120px;
  border-bottom: 10px solid #D6D6D6;
  img {
    position: absolute;
    left: 50%;
    top: -150px;
    width: 100%;
    height: 800px;
    transform: translateX(-50%);
    z-index: -1;
  }
  @media screen and (max-width: 460px) {
    height: 300px;
  }
`

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  h1 {
    position: relative;
    top: -70px;
    margin: 0px 150px;
  }
  input {
    width: 50vw;
    height: 50px;
    padding: 10px 40px;
    font-size: 2rem;
    outline: none;
    border: none;
    border-radius: 30px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    @media screen and (max-width: 460px) {
      height: 35px;
      margin-left: 35px;
      padding: 10px 60px 10px 20px;
      font-size: 20px;
    }
  }
  .search_icon {
    position: relative;
    left: -50px;
    padding: 20px;
    background-color: ${Colors.main3};
    border-radius: 0px 30px 30px 0px;
    cursor: pointer;
    @media screen and (max-width: 460px) {
      padding: 13px;
    }
  }
`

const SwiperContainer = styled.div`
  padding: 30px;
  .slide {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: aliceblue;
    border-radius: 30px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    img {
      width: 150px;
      object-fit: cover;
      @media screen and (max-width: 460px) {
        width: 100px;
      }
    }
    div {
      width: 100%;
      padding: 20px 0px;
      background-color: ${Colors.main1};
      border-radius: 0px 0px 30px 30px;
      text-align: center;
      h1 {
        font-weight: bold;
        color: orange;
        @media screen and (max-width: 460px) {
          font-size: 24px;
        }
      }
    }
    button {
      width: 200px;
      padding: 10px;
      background-color: ${Colors.main3};
      border-radius: 30px;
      border: none;
      outline: none;
      font-size: 20px;
      color: white;
      @media screen and (max-width: 460px) {
        width: 150px;
        font-size: 1rem;
      }
    }
  }
`

const RecommendMyPageContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #9EC198;
  h1 {

  }
  button {
    position: relative;
    width: 250px;
    height: 50px;
    right: -70px;
    top: 15px;
    background-color:white;
    font-size: 24px;
    font-weight: bold;
    outline: none;
    border: none;
    cursor: pointer;
    border-radius: 15px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
  img {
    position: relative;
    top: 50px;
    width: 220px;
    object-fit: cover;
  }
`

const RecommendTalkContainer = styled.div`
  
`

const TalkTopBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 100px;
  margin-left: 130px;
  div {
    flex-grow: 1;
    height: 5px;
    margin: 0px 50px;
    background-color: #C5CBC5;
  }
`

const TalkBottomContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 100px;
  height: 500px;
`

const TalkBottomBox = styled.div`
  width: 450px;
  height: 60%;
  padding: 10px;
  background-color: ${props => props.color};
  border-radius: 5px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  div {
    display: flex;
    align-items: center;
    img {
      width: 70px;
      margin-right: 30px;
      background-color: white;
      border-radius: 100%;
      object-fit: cover;
    }
    h2 {
      font-size: 1.5rem;
    }
  }
  p {
    padding: 30px;
    font-size: 1.2rem;
  }
  button {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    width: 300px;
    padding: 10px;
    background-color: white;
    font-size: 20px;
    border-radius: 50px;
    outline: none;
    border: none;
    cursor: pointer;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
  &::after {
    content: "";
    display: block;
    position: relative;
    top: 50px;
    right: -350px;
    width: 55px;
    height: 50px;
    background-color: ${props => props.color};
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    clip-path: polygon(0 0, 50% 100%, 100% 0);
  }
`


const FindStorePillPage = () => {

  const navigate = useNavigate();
  const [disease, setDisease] = useState("");

  const onHandleChange = (e) => {
    setDisease(e.target.value)
  }

  const onHandleClick = () => {
    navigate(`/storepill/${disease}`)
  }

  return (
    <>
    <Navbar/>
    <RecommendContainer>
      <RecommendTopbox>
        <SearchContainer>
          <h1>질병만 입력해도 어떤 약이 <br/> 필요한지 확인해 보세요.</h1>
          <input type="text" value={disease} onChange={onHandleChange} placeholder='질병 이름을 입력해 보세요.' />
          <FaSearch onClick={onHandleClick} className='search_icon' size={30} />
        </SearchContainer>
        <img src={drugBackground} alt="#" />
      </RecommendTopbox>
      <SwiperContainer>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={100}
          slidesPerView={3}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false
          }}
          breakpoints={{
            300: {
              slidesPerView: 2,
              spaceBetween: 30
            },
            900: {
              slidesPerView: 3,
              spaceBetween: 40
            }
          }}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide className='slide'>
            <img src={Cold} alt="#" />
            <div>
              <h1>감기</h1>
              <button>필요한 약 보러 가기</button>
            </div>
          </SwiperSlide>
          <SwiperSlide className='slide'>
            <img src={Indigestion} alt="#" />
            <div>
              <h1>소화불량</h1>
              <button>필요한 약 보러 가기</button>
            </div>
          </SwiperSlide>
          <SwiperSlide className='slide'>
            <img src={Headache} alt="#" />
            <div>
              <h1>두통</h1>
              <button>필요한 약 보러 가기</button>
            </div>
          </SwiperSlide>
        </Swiper>
      </SwiperContainer>
      <RecommendMyPageContainer>
          <h1>저장한 약들을 마이 페이지에서<br/> 확인하세요.</h1>
          <button>마이 페이지 가기</button>
          <img src={usersImg} alt="#" />
      </RecommendMyPageContainer>
      <RecommendTalkContainer>
        <TalkTopBox>
          <h1>같이 이야기 해 볼까요?</h1>
          <div></div>
        </TalkTopBox>
        <TalkBottomContainer>

          <TalkBottomBox color='#78B96F'>
            <div>
              <img src={maleUser} alt="#" />
              <h2>몸이 으슬으슬하고 머리가 아파요..</h2>
            </div>
            <p>몸이 몸살이 걸린 것 처럼 기운이 많이 없고 머리도 누가 때리는 것 처럼 많이 아파요...</p>
            <button onClick={() => (navigate(`/storepill/몸살`))}>필요한 약 보러 가기</button>
          </TalkBottomBox>

          <TalkBottomBox color='#EEEEEE'>
            <div>
              <img src={maleUser} alt="#" />
              <h2>아침부터 계속 기침을 합니다.</h2>
            </div>
            <p>기침을 계속 하고 가래도 많이 생기는 것 같아요.. 또 숨만 쉬면 목이 간지럽구요...</p>
            <button onClick={() => (navigate(`/storepill/감기`))}>필요한 약 보러 가기</button>
          </TalkBottomBox>

          <TalkBottomBox color='#EEEEEE'>
            <div>
              <img src={maleUser} alt="#" />
              <h2>머리가 계속 찌르는듯이 아파요..</h2>
            </div>
            <p>머리가 계속 지끈지끈 합니다. 아침부터 그러는데 어떤 약을 먹어야 하나요?</p>
            <button onClick={() => (navigate(`/storepill/두통`))}>필요한 약 보러 가기</button>
          </TalkBottomBox>

        </TalkBottomContainer>
      </RecommendTalkContainer>
    </RecommendContainer>
    </>
  )
}

export default FindStorePillPage 