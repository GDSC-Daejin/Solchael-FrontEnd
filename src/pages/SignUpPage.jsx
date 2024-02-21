import { postEmailExist, postJoin, postUserExist } from '../apis/User';
import { useState } from 'react';
import { Container, Line, InfoContainer, Topic, GreenInput, Alert, JoinBtn } from '../styles/SignUpPage';

const SignUpPage = () => {
  const [nickName, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userExist, setUserExist] = useState(false);
  const [emailExist, setEmailExist] = useState(false);

  const handleSignup = async () => {
    try {
      // 조건 확인
      if (password !== confirmPassword) {
        alert('비밀번호가 일치하지 않습니다.');
        return;
      } else if (userExist || emailExist) {
        alert('아이디와 닉네임 중복 확인을 바랍니다.');
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
  const handleUserExist = async () => {
    try {
      const userExist = await postUserExist(nickName);
      setUserExist(userExist.data);
      console.log(userExist.data);
    } catch (error) {}
  };
  const handleEmailExist = async () => {
    try {
      const emailExist = await postEmailExist(nickName);
      setEmailExist(emailExist.data);
      console.log(emailExist.data);
    } catch (error) {}
  };

  return (
    <Container>
      <h2>회원가입</h2>
      <Line />
      <InfoContainer>
        <Topic>아이디</Topic>
        <GreenInput placeholder={'이메일'} value={email} onChange={(e) => setEmail(e.target.value)} />
        <Alert>영문 소문자와 숫자만 사용하여 영문 소문자로 시작하는 4 ~ 12자의 아이디를 입력해 주세요.</Alert>
        <button className='button-10' onClick={() => handleEmailExist()}>아이디 중복체크</button>
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
        <button className='button-10' onClick={() => handleUserExist()}>닉네임 중복체크</button>
        <JoinBtn onClick={handleSignup}>가입하기</JoinBtn>
      </InfoContainer>
    </Container>
  );
};

export default SignUpPage;
