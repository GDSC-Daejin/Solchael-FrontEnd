import { useState } from "react";
import { BottomSheet } from 'react-spring-bottom-sheet';

import 'react-spring-bottom-sheet/dist/style.css'

import styled from 'styled-components';

import { Colors } from '../styles/Colors';
import Pill from '../imgs/알약.png';

const DetailContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;
  margin: 100px auto;
  background-color: ${Colors.main2};
  border-radius: 30px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  @media screen and (max-width: 460px) {
    width: 95%;
  }
`

const DetailImgBox = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 130px;
  top: -70px;
  padding: 10px;
  background-color: ${Colors.main2};
  border-radius: 100%;
  div {
    padding: 10px;
    background-color: white;
    border-radius: 100%;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  }
  img {
    width: 100%;
    object-fit: cover;
  }
`

const DetailIntroBox = styled.div`
  width: 90%;
  margin: 90px 20px 20px;
  background-color: white;
  border-radius: 30px;
  text-align: center;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  h1 {
    font-size: 4rem;
  }
  p {
    padding: 0px 50px;
    font-size: 2rem;
  }
  @media screen and (max-width: 460px) {
    h1 {
      font-size: 3rem;
    }
    p {
      font-size: 24px;
    }
  }
`

const ButtonContainer = styled.button`
  width: 350px;
  margin: 10px;
  padding: 15px;
  background-color: ${Colors.main3};
  color: white;
  font-size: 2rem;
  border-radius: 40px;
  border: none;
  outline: none;
  cursor: pointer;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  @media screen and (max-width: 460px) {
    width: 250px;
    font-size: 24px;
  }
`

const DetailPage = () => {
  
  const [open, setOpen] = useState(false);

  const handleDismiss = () => {
    setOpen(false)
  }

  return (
    <>
    <DetailContainer>
      <DetailImgBox>
        <div>
          <img src={Pill} alt="#" />
        </div>
      </DetailImgBox>
      <DetailIntroBox>
        <h1>게보린</h1>
        <h1>사용법</h1>
        <p>이걸 사용하려면 어쩌구 저쩌구 이러쿵 저러쿵 뚝딱뚝딱 이렇게 저렇게...</p>
        <h1>효능</h1>
        <p>게보린은 한국인에게 가장 친근한 진통제중 하나로 심한 통증이라도 투약 후 5 ~ 20분 이내에 효과가 나타납니다.</p>
      </DetailIntroBox>
      <ButtonContainer onClick={() => setOpen(!open)}>더 자세한 정보</ButtonContainer>
      <div className="SheetContainer">
        <BottomSheet 
          open={open}
          snapPoints={({ minHeight, maxHeight }) => [minHeight * 7, maxHeight * 0.5]}
          onDismiss={handleDismiss}
        >
          <div className="SheetBox">box</div>
          <div className="SheetBox">box</div>
          <div className="SheetBox">box</div>
          <div className="SheetBox">box</div>
        </BottomSheet>
      </div>
    </DetailContainer>
    </>
  )
}

export default DetailPage