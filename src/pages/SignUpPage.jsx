import styled from 'styled-components';
import { Colors } from '../styles/Colors';
import { postJoin } from '../apis/User';
import { useState } from 'react';

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
  const [nickName, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = async () => {
    try {
      // 비밀번호 확인
      if (password !== confirmPassword) {
        alert('비밀번호가 일치하지 않습니다.');
        return;
      }

      const response = await postJoin({ nickName, email, password });
      console.log('회원가입 성공:', response);
      //이후 메인 페이지로 이동
    } catch (error) {
      alert('회원가입 실패');
      console.error('회원가입 실패:', error);
    }
  };

  return (
    <Container>
      <h2>회원가입</h2>
      <Line />
      <InfoContainer>
        <Topic>아이디</Topic>
        <GreenInput placeholder={'이메일'} value={email} onChange={(e) => setEmail(e.target.value)} />
        <Alert>영문 소문자와 숫자만 사용하여 영문 소문자로 시작하는 4 ~ 12자의 아이디를 입력해 주세요.</Alert>
        <Topic>비밀번호</Topic>
        <GreenInput
          type={'password'}
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <GreenInput
          type={'password'}
          placeholder="비밀번호 확인"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Alert>영문 대문자와 소문자, 숫자, 특수문자 중 2가지 이상을 조합하여 6 ~ 20자로 입력해 주세요.</Alert>
        <Topic>닉네임</Topic>
        <GreenInput placeholder={'닉네임'} value={nickName} onChange={(e) => setNickname(e.target.value)} />
        <JoinBtn onClick={handleSignup}>가입하기</JoinBtn>
      </InfoContainer>
    </Container>
  );
};

export default SignUpPage;
