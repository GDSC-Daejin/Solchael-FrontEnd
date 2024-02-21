import { useState } from 'react';
import Search from '../components/Search';
import { postLogin, postLogout } from '../apis/User';
import {
  Main,
  Container,
  ContentBox,
  SquareBtn,
  StyledLink,
  LoginInput,
  Title,
  Image,
  RoundLink,
  Welcome,
  LinkBox,
} from '../styles/MainPage';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const MainPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isLogin = sessionStorage.getItem('isLogin');
  const sessionId = sessionStorage.getItem('sessionId');
  const nickname = sessionStorage.getItem('nickname');

  const handleLogin = async () => {
    try {
      const response = await postLogin({ email, password });
      sessionStorage.setItem('isLogin', true);
      sessionStorage.setItem('sessionId', response.data.sessionId);
      sessionStorage.setItem('nickname', response.data.nickname);
      alert('로그인 성공');
      window.location.reload();
    } catch (error) {
      alert('로그인 실패');
    }
  };
  const handleLogout = async () => {
    try {
      const response = await postLogout();
      sessionStorage.setItem('isLogin', false);
      sessionStorage.removeItem('sessionId');
      sessionStorage.removeItem('nickname');
      alert('로그아웃 성공');
      window.location.reload();
    } catch (error) {
      console.error('로그아웃 실패:', error);
      alert('로그아웃 실패');
    }
  };

  return (
    <>
      <Navbar />
      <Main>
        <Search placeholder={'약 이름을 입력하세요'}></Search>
        <Container>
          {isLogin && sessionId ? (
            <ContentBox>
              <Welcome>
                {nickname}님 <br />
                반갑습니다.
              </Welcome>
              <SquareBtn>
                <Link to={'/mypage'}>마이페이지</Link>
              </SquareBtn>
              <SquareBtn onClick={handleLogout}>로그아웃</SquareBtn>
            </ContentBox>
          ) : (
            <ContentBox>
              <Title>&nbsp;&nbsp;회원 로그인</Title>
              <LoginInput placeholder={'아이디'} value={email} onChange={(e) => setEmail(e.target.value)} />
              <LoginInput
                placeholder={'비밀번호'}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <SquareBtn onClick={handleLogin}>로그인</SquareBtn>
              <LinkBox>
                <StyledLink to={'/sign-up'}>회원가입</StyledLink>
                <StyledLink to={'/sign-up'}>아이디 찾기</StyledLink>
                <StyledLink to={'/sign-up'}>비밀번호 찾기</StyledLink>
              </LinkBox>
            </ContentBox>
          )}

          <ContentBox>
            <Title>&nbsp;&nbsp;폐의약품 처리 방법</Title>
            <Image src="src/imgs/약상자.png"></Image>
            <RoundLink to={'/process'}>보러 가기</RoundLink>
          </ContentBox>
          <ContentBox>
            <Title>편의점 약 추천</Title>
            <Image src="src/imgs/약편의점.png"></Image>
            <RoundLink to={'/findstorepill'}>보러 가기</RoundLink>
          </ContentBox>
          <ContentBox>
            <Title>폐의약품 수거함 위치</Title>
            <Image src="src/imgs/폐의약품수거함.jpg"></Image>
            <RoundLink to={'/collectionmap'}>보러 가기</RoundLink>
          </ContentBox>
        </Container>
      </Main>
    </>
  );
};

export default MainPage;
