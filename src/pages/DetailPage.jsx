import { useState } from "react";
import { BottomSheet } from 'react-spring-bottom-sheet';

import 'react-spring-bottom-sheet/dist/style.css'

import styled from 'styled-components';

import { Colors } from '../styles/Colors';
import Pill from '../imgs/알약.png';
import Pills from '../imgs/알약들.png';   // 임시 이미지
import Navbar from "../components/Navbar";

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

const SheetBox = styled.div`
  margin-top: 30px;
  text-align: center;
  border-top: 1px solid #E0E0E0;
  img {
    width: 20%;
    object-fit: cover;
  }
  p {
    width: 600px;
    margin: 0 auto;
    font-size: 26px;
  }
  @media screen and (max-width: 460px) {
    p {
      width: auto;
      padding: 10px 30px;
      font-size: 20px;
    }
  }
`

const DetailPage = () => {
  
  const [open, setOpen] = useState(false);

  const handleDismiss = () => {
    setOpen(false)
  }

  return (
    <>
    <Navbar/>
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
      <BottomSheet 
        open={open}
        snapPoints={({ minHeight, maxHeight }) => [minHeight * 1.5, maxHeight * 0.5]}
        onDismiss={handleDismiss}
      >
        <SheetBox>
          <h1>약 제품 사진</h1>
          <img src={Pills} alt="#" />
        </SheetBox>
        <SheetBox>
          <h1>주의 사항</h1>
          <p>복용하는 동안 고열을 동반하고, 발진, 발적, 가려움, 화상 모양의 수포 등 심한 증상이 전신 피부, 입과 눈의 점막에 나타나는 경우, 또는 구토, 변비, 식요욕부진 증상이 나타나면 복용을 중지하고 약사와 상의하세요</p>
        </SheetBox>
        <SheetBox>
          <h1>부작용</h1>
          <p>이걸 먹으면 두드러기가 발생하고 호흡곤란...</p>
        </SheetBox>
        <SheetBox>
          <h1>보관법</h1>
          <p>어쩌구 저쩌구</p>
        </SheetBox>
      </BottomSheet>
    </DetailContainer>
    </>
  )
}

export default DetailPage