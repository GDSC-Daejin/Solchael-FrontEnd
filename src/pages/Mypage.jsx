import styled from 'styled-components';

import { FaCapsules } from 'react-icons/fa';
import { BsCapsule } from 'react-icons/bs';
import { MdDelete } from 'react-icons/md';

import { Colors } from '../styles/Colors';
import Pills from '../imgs/알약들.png';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import { useGetMyPills, deleteMyPills } from '../apis/MyPill';

const MypageContainer = styled.div`
  background-color: #f4f4f4;
`;

const MypageIntroBox = styled.div`
  background-color: ${Colors.main2};
  padding-bottom: 50px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 0 0 30px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MypageUserInfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    font-size: 4rem;
    font-weight: bold;
    width: 600px;
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
`;

const MypageMenuBox = styled.div`
  display: flex;
  justify-content: space-around;
  width: 50%;
  margin: 0 auto;
  background-color: white;
  border-radius: 30px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  div,
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 30px 0px 20px;
    cursor: pointer;
    text-decoration: none;
    color: #000;
  }
  @media screen and (max-width: 460px) {
    width: 90%;
  }
`;

const MypageCapsuleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 800px;
  margin: 50px auto;
  padding-top: 30px;
  background-color: white;
  border-radius: 15px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  @media screen and (max-width: 800px) {
    width: 90%;
  }
`;

const MypageCapsuleBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 85%;
  margin-bottom: 30px;
  background-color: white;
  border-radius: 0px 30px 30px 0px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  .left {
    padding-left: 50px;
    width: calc(85%-110px);
    h1 {
      font-size: 2rem;
      font-weight: bold;
    }
    h3 {
      font-size: 1.5rem;
      color: #b3b3b3;
    }
  }
  .right {
    width: 110px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ec787f;
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
`;

const Mypage = () => {
  const nickname = sessionStorage.getItem('nickname');

  const { data, isLoading, isError } = useGetMyPills(nickname);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;
  console.log(data);

  const handleDeletePill = async (id) => {
    const response = await deleteMyPills(id);
    console.log(response);
  };

  return (
    <>
      <Navbar />
      <MypageContainer>
        <MypageIntroBox>
          <MypageUserInfoBox>
            <h1>
              {nickname} 님,
              <br />
              안녕하세요.
            </h1>
            <img src={Pills} alt="test" />
          </MypageUserInfoBox>
          <MypageMenuBox>
            <div>
              <FaCapsules size={40} />
              <h2>나의 약</h2>
            </div>
            <Link to="mypillSearch">
              <BsCapsule size={40} />
              <h2>내 약 등록하기</h2>
            </Link>
          </MypageMenuBox>
        </MypageIntroBox>
        <MypageCapsuleContainer>
          {data.map((item, index) => (
            <MypageCapsuleBox key={index}>
              <div className="left">
                <h1>{item.name}</h1>
                <h3>{item.expiration.slice(0, 10)}까지</h3>
              </div>
              <div className="right" onClick={() => handleDeletePill(item.id)}>
                <MdDelete size={40} />
              </div>
            </MypageCapsuleBox>
          ))}
        </MypageCapsuleContainer>
      </MypageContainer>
    </>
  );
};

export default Mypage;
