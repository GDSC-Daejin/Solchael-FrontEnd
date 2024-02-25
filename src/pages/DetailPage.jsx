import { BottomSheet } from 'react-spring-bottom-sheet';
import axios from 'axios';

import 'react-spring-bottom-sheet/dist/style.css';

import styled from 'styled-components';

import { Colors } from '../styles/Colors';
import Pill from '../imgs/알약.png';
import Navbar from '../components/Navbar';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { useState } from 'react';

import notFoundImg from '../imgs/notfoundImg.jpeg';

const DetailContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
  margin: 100px auto;
  background-color: ${Colors.main2};
  border-radius: 30px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  @media screen and (max-width: 460px) {
    width: 95%;
  }
`;

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
    box-shadow:
      rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
      rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  }
  img {
    width: 100%;
    object-fit: cover;
  }
`;

const DetailIntroBox = styled.div`
  width: 90%;
  margin: 90px 20px 20px;
  background-color: white;
  border-radius: 30px;
  text-align: center;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  h1 {
    font-size: 2.5rem;
  }
  p {
    padding: 0px 50px;
    font-size: 1.7rem;
  }
  @media screen and (max-width: 460px) {
    h1 {
      font-size: 1.5rem;
    }
    p {
      font-size: 1.2rem;
    }
  }
`;

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
`;

const SheetBox = styled.div`
  margin: 50px 0px;
  text-align: center;
  border-top: 1px solid #e0e0e0;
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
`;

const DetailPage = () => {
  const { id } = useParams();
  const [open, setOpen] = useState(false);

  const fetchDetailPill = async () => {
    const response = await axios.get(`http://35.216.98.123:8080/api/v1/medicine/${id}`);
    return response.data;
  };

  const { data, isError, isLoading } = useQuery({
    queryKey: ['findDetailPill'],
    queryFn: fetchDetailPill,
  });

  const handleDismiss = () => {
    setOpen(false);
  };

  if (isError) return <p>에러가 발생했습니다..</p>;
  if (isLoading) return <p>로딩중입니다..</p>;

  return (
    <>
      <Navbar />
      <DetailContainer>
        <DetailImgBox>
          <div>
            <img src={Pill} alt="#" />
          </div>
        </DetailImgBox>
        <DetailIntroBox>
          <h1>{data?.name}</h1>
          <h1>사용법</h1>
          <p>{data?.useMethodQesitm}</p>
          <h1>부작용</h1>
          <p>{data?.efcyQesitm}</p>
        </DetailIntroBox>
        <ButtonContainer onClick={() => setOpen(!open)}>더 자세한 정보</ButtonContainer>
        <BottomSheet
          open={open}
          snapPoints={({ minHeight, maxHeight }) => [minHeight * 1.5, maxHeight * 0.5]}
          onDismiss={handleDismiss}
        >
          <SheetBox>
            <h1>약 제품 사진</h1>
            <img src={data?.itemImage ?? notFoundImg} alt="#" />
          </SheetBox>
          <SheetBox>
            <h1>주의 사항</h1>
            <p>{data?.atpnQesitm}</p>
          </SheetBox>
          <SheetBox>
            <h1>주의 사항-2</h1>
            <p>{data?.seQesitm}</p>
          </SheetBox>
        </BottomSheet>
      </DetailContainer>
    </>
  );
};

export default DetailPage;
