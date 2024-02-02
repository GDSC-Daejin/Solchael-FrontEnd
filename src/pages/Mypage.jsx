import styled from "styled-components";

import { FaCapsules } from "react-icons/fa";
import { BsCapsule } from "react-icons/bs";
import { MdDelete } from "react-icons/md";

import { Colors } from '../styles/Colors';
import Pills from '../imgs/알약들.png';
import Navbar from "../components/Navbar";

const MypageContainer = styled.div`
  background-color: #F4F4F4;
`

const MypageIntroBox= styled.div`
  background-color: ${Colors.main2};
  padding-bottom: 50px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`

const MypageUserInfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 100px;
  h1 {
    font-size: 4rem;
    font-weight: bold;
    
  }
  img {
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 100%;
    background-color: white;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
  @media screen and (max-width: 460px) {
    flex-direction: column;
    padding: 20px;
    h1 {
      font-size: 2rem;
    }
  }
`

const MypageMenuBox = styled.div`
  display: flex;
  justify-content: space-around;
  width: 50%;
  margin: 0 auto;
  background-color: white;
  border-radius: 30px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 30px 0px;
    cursor: pointer;
  }
  @media screen and (max-width: 460px) {
    width: 90%;
  }
`

const MypageCapsuleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  margin: 50px auto;
  background-color: white;
  border-radius: 15px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  @media screen and (max-width: 460px) {
    width: 90%;
  }
`

const MypageCapsuleBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
  margin: 30px 0px;
  background-color: white;
  border-radius: 0px 30px 30px 0px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  .left {
    padding-left: 50px;
    h1 {
      font-size: 3rem;
      font-weight: bold;
    }
    h3 {
      font-size: 2rem;
      color: #B3B3B3;
    }
  }
  .right {
    width: 110px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #EC787F;
    border-radius: 0px 30px 30px 0px;
    cursor: pointer;
  }
  @media screen and (max-width: 460px) {
    width: 90%;
    .left {
      padding-left: 10px;
      h1 {
        font-size: 2rem;
      }
      h3 {
        font-size: 1rem;
      }
    }
    .right {
      width: 90px;
    }
  }
`

const Mypage = () => {

  const capsul = [{ name: '게보린', date: '2023.9.30'},{ name: '게보린', date: '2023.9.30'},{ name: '게보린', date: '2023.9.30'}]

  return (
    <>
    <Navbar/>
    <MypageContainer>
      <MypageIntroBox>
        <MypageUserInfoBox>
          <h1>chan 님,<br/>안녕하세요.</h1>
          <img src={Pills} alt="test" />
        </MypageUserInfoBox>
        <MypageMenuBox>
          <div>
            <FaCapsules size={40}/>
            <h2>저장한 알약들</h2>
          </div>
          <div>
            <BsCapsule size={40}/>
            <h2>나의 알약</h2>
          </div>
        </MypageMenuBox>
      </MypageIntroBox>
      <MypageCapsuleContainer>
        {capsul.map((item,index) => (
          <MypageCapsuleBox key={index}>
            <div className="left">
              <h1>{item.name}</h1>
              <h3>{item.date}까지</h3>
            </div>
            <div className="right">
              <MdDelete size={40}/>
            </div>
        </MypageCapsuleBox>
        ))}
      </MypageCapsuleContainer>
    </MypageContainer>
    </>
  )
}

export default Mypage