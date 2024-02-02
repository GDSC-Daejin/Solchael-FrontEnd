import styled from "styled-components"

import { Colors } from '../styles/Colors';

import Pills from '../imgs/알약들.png';
import PowderPill  from '../imgs/가루약.png';
import LiquidPill from '../imgs/시럽약.png';

const ProcessContainer = styled.div`

`

const ProcessIntroBox = styled.h1`
  padding: 10px;
  background-color: ${Colors.main1};
  font-weight: bold;
  span {
    color: ${Colors.green10};
  }
  .red_text {
    color: red;
  }
`

const ProcessBox = styled.div`

`

const ProcessPage = () => {
  return (
    <ProcessContainer>
      <ProcessIntroBox>
          유통기한 지난 폐의약품,<br/>
          <span>올바른 분리배출 방법</span>은??
      </ProcessIntroBox>
      <ProcessIntroBox>
          포장지를 제거해 약국, 보건소에 배치된 <span className="red_text">폐의약품 전용 수거함</span>에 배출!!<br/>
          <span>*건강기능식품은 수거 대상이 아니라는 점 참고하세요!!*</span>
      </ProcessIntroBox>
      <ProcessBox>
        <div>
          <img src={Pills} alt="#" />
          <div>
            <h1>알약</h1>
            <p>포장된 비닐, 종이등을 제거한 후 내용물만 봉투에 담아 배출</p>
          </div>
        </div>
        <div>
          <img src={PowderPill} alt="#" />
          <div>
            <h1>가루약</h1>
            <p>포장지를 뜯지 않고 그대로 배출</p>
          </div>
        </div>
        <div>
          <img src={LiquidPill} alt="#" />
          <div>
            <h1>물약</h1>
            <p>한방에 모은 후 새지도 않도록 밀봉해 배출</p>
          </div>
        </div>
      </ProcessBox>
    </ProcessContainer>
  )
}

export default ProcessPage