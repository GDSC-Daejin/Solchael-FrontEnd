import styled from "styled-components"

import { Colors } from '../styles/Colors';

import Pills from '../imgs/알약들.png';
import PowderPill  from '../imgs/가루약.png';
import LiquidPill from '../imgs/시럽약.png';
import Navbar from "../components/Navbar";

const ProcessContainer = styled.div`
`

const ProcessIntroBox = styled.div`
  margin-top: 50px;
  margin-left: 100px;
  h1 {
    width: 500px;
    padding: 10px 30px; 
    background-color: ${Colors.main1};
    font-weight: bold;
    border-radius: 15px;
    span {
      color: ${Colors.green10};
    }
    .red_text {
      color: red;
    }
  }
  @media screen and (max-width: 470px) {
    h1 {
      width: 250px;
      font-size: 24px;
    }
  }
`

const ProcessIntroBox1 = styled.div`
  display: flex;
  justify-content: end;
  margin-right: 100px;
  h1 {
    width: 700px;
    padding: 15px 30px; 
    background-color: ${Colors.main1};
    font-weight: bold;
    border-radius: 15px;
    span {
      color: ${Colors.green10};
    }
    .red_text {
      color: red;
    }
  }
  @media screen and (max-width: 470px) {
    margin-right: 0;
    justify-content: center;
    h1 {
      width: 300px;
      font-size: 24px;
    }
  }
`


const ProcessBox = styled.div`
  display: flex;
  justify-content: space-around;
  @media screen and (max-width: 470px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

const BoxInner = styled.div`
  margin-top: 60px;
  width: 300px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  border-radius: 15px;
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 20px;
    background-color: ${Colors.main1};
    h1 {
      color: orange;
    }
    p {
      font-size: 20px;
      font-weight: bold;
    }
  }
  @media screen and (max-width: 470px) {
    h1 {
      font-size: 24px;
    }
    p {
      font-size: 1rem;
    }
  }
`

const ProcessPage = () => {
  return (
    <ProcessContainer>
      <Navbar/>
      <ProcessIntroBox>
        <div>
          <h1>
            유통기한 지난 폐의약품,<br/>
            <span>올바른 분리배출 방법</span>은??
          </h1>
        </div>
      </ProcessIntroBox>
      <ProcessIntroBox1>
        <div>
          <h1>
            포장지를 제거해 약국, 보건소에 배치된 <span className="red_text">폐의약품 전용 수거함</span>에 배출!!<br/>
            <span>*건강기능식품은 수거 대상이 아니라는 점 참고하세요!!*</span>
          </h1>
        </div>
      </ProcessIntroBox1>
      <ProcessBox>
        <BoxInner>
          <img src={Pills} alt="#" />
          <div>
            <h1>알약</h1>
            <p>포장된 비닐, 종이등을 제거한 후 내용물만 봉투에 담아 배출</p>
          </div>
        </BoxInner>
        <BoxInner>
          <img src={PowderPill} alt="#" />
          <div>
            <h1>가루약</h1>
            <p>포장지를 그래도 보존하고 되도록 뜯지 않고 받은 그대로 배출</p>
          </div>
        </BoxInner>
        <BoxInner>
          <img src={LiquidPill} alt="#" />
          <div>
            <h1>물약</h1>
            <p>한병에 모은 후 되도록 새지 않도록 밀봉하여 배출</p>
          </div>
        </BoxInner>
      </ProcessBox>
    </ProcessContainer>
  )
}

export default ProcessPage