import styled from 'styled-components';
import { Colors } from '../styles/Colors';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    font-size: 30px;
    margin: 40px 0 40px;
  }
`;
const Line = styled.hr`
  width: 100%;
  border: 1px solid #373737;
`;
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 80vw;
  max-width: 400px;
`;
const GreenInput = styled.input`
  width: calc(100%-30px);
  border-radius: 10px;
  font-size: 1.2rem;
  padding: 15px;
  border: none;
  outline: none;
  background-color: ${Colors.main1};
  :active {
    outline: 2px solid ${Colors.main3};
  }
`;
const Topic = styled.div`
  font-size: 1.5rem;
  margin-top: 20px;
`;
const JoinBtn = styled.button`
  width: 100%;
  border-radius: 10px;
  font-size: 1.2rem;
  padding: 15px 30px;
  border: none;
  outline: none;
  background-color: #373737;
  color: #fff;
  margin-top: 20px;
`;
const Alert = styled.div`
  color: #dc8d98;
`;
const SignUpPage = () => {
  return (
    <Container>
      <h2>회원가입</h2>
      <Line />
      <InfoContainer>
        <Topic>아이디</Topic>
        <GreenInput placeholder="아이디" />
        <Alert>영문 소문자와 숫자만 사용하여 영문 소문자로 시작하는 4 ~ 12자의 아이디를 입력해 주세요.</Alert>
        <Topic>비밀번호</Topic>
        <GreenInput type={'password'} placeholder="비밀번호" />
        <GreenInput type={'password'} placeholder="비밀번호 확인" />
        <Alert>영문 대문자와 소문자, 숫자, 특수문자 중 2가지 이상을 조합하여 6 ~ 20자로 입력해 주세요.</Alert>
        <Topic>닉네임</Topic>
        <GreenInput placeholder="닉네임" />
        <JoinBtn>가입하기</JoinBtn>
      </InfoContainer>
    </Container>
  );
};

export default SignUpPage;
