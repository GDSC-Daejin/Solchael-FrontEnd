import styled from 'styled-components';

import { Colors } from '../styles/Colors';
import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';
import React from 'react';
import Navbar from '../components/Navbar';
import { getPillSearch } from '../apis/MyPill';
import { useNavigate } from 'react-router-dom';
import Modal from '../layouts/Mypage/Modal';

export const GreenContainer = styled.div`
  background-color: ${Colors.main2};
  border-radius: 0 0 25px 25px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 100%;
  height: 30vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 40px;
  input {
    width: 50vw;
    height: 50px;
    padding: 10px 30px;
    font-size: 2rem;
    outline: 3px solid ${Colors.main3};
    border: none;
    border-radius: 30px;
    @media screen and (max-width: 460px) {
      height: 35px;
      margin-left: 35px;
      padding: 10px 60px 10px 20px;
      font-size: 20px;
    }
  }
  div {
    color: #000;
    .search_icon {
      position: relative;
      left: -50px;
      top: 2px;
      padding: 22px;
      background-color: ${Colors.main3};
      border-radius: 0px 30px 30px 0px;
      outline: 3px solid ${Colors.main3};
      cursor: pointer;
      @media screen and (max-width: 460px) {
        padding: 13px;
      }
    }
  }
`;
const ResultBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto;
  width: 70%;
  max-width: 800px;
  @media screen and (max-width: 460px) {
    width: 90%;
  }
`;

const Result = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-left: 20px;
  margin-bottom: 30px;
  background-color: white;
  border-radius: 0px 30px 30px 0px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  h1 {
    font-size: 1.5rem;
  }
  .right {
    width: 110px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ec787f;
    border-radius: 0px 30px 30px 0px;
    cursor: pointer;
    font-size: 1.2rem;
  }
  @media screen and (max-width: 460px) {
    width: 90%;
    h1 {
      font-size: 1.2rem;
    }
    .right {
      width: 90px;
    }
  }
`;

const MypillSearch = () => {
  const [name, setName] = useState('');
  const [result, setResult] = useState([]);
  const [modal, setModal] = useState(false);
  const [medicineId, setMedicineId] = useState(1);
  const navigate = useNavigate();

  const onHandleChange = (e) => {
    setName(e.target.value);
  };

  const handleSearch = async (name) => {
    try {
      console.log(name);
      const response = await getPillSearch(name);
      setResult(response.data);
    } catch (error) {}
  };

  return (
    <div>
      <Navbar />
      <GreenContainer>
        <SearchContainer>
          <input type="text" placeholder={'약 이름을 입력하세요'} value={name} onChange={onHandleChange} />
          <div onClick={() => handleSearch(name)}>
            <FaSearch className="search_icon" size={26} />
          </div>
        </SearchContainer>
      </GreenContainer>
      <ResultBox>
        {result.map((item, index) => (
          <Result key={index}>
            <h1>{item.name}</h1>
            <div
              className="right"
              onClick={() => {
                setModal(true);
                setMedicineId(item.id);
              }}
            >
              등록하기
            </div>
          </Result>
        ))}
      </ResultBox>
      {modal ? <Modal setModal={setModal} medicineId={medicineId} /> : null}
    </div>
  );
};

export default MypillSearch;
