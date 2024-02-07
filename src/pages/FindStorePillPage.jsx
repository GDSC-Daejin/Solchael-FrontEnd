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


const RecommendContainer = styled.div`
`

const RecommendTopbox = styled.div`
  display: flex;
  justify-content: center;
  height: 500px;
  background-color: ${Colors.main2};
  @media screen and (max-width: 460px) {
    height: 300px;
  }
`

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  input {
    width: 50vw;
    height: 50px;
    padding: 10px 40px;
    font-size: 2rem;
    outline: none;
    border: none;
    border-radius: 30px;
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
          <input type="text" value={disease} onChange={onHandleChange} placeholder='질병 이름을 입력해 보세요.' />
          <FaSearch onClick={onHandleClick} className='search_icon' size={30} />
        </SearchContainer>
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
    </RecommendContainer>
    </>
  )
}

export default FindStorePillPage 