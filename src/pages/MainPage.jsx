import {
  Main,
  GreenContainer,
  SearchInput,
  Container,
  ContentBox,
  SquareBtn,
  StyledLink,
  LoginInput,
  Title,
} from '../styles/MainPage';

const MainPage = () => {
  return (
    <Main>
      <GreenContainer>
        <SearchInput placeholder="약 이름을 입력하세요" />
      </GreenContainer>
      <Container>
        <ContentBox>
          <Title>&nbsp;&nbsp;회원 로그인</Title>
          <LoginInput placeholder={'아이디'} />
          <LoginInput placeholder={'비밀번호'} />
          <SquareBtn>로그인</SquareBtn>
          <StyledLink to={'/sign-up'}>회원가입</StyledLink>
          <StyledLink to={'/sign-up'}>아이디 찾기</StyledLink>
          <StyledLink to={'/sign-up'}>비밀번호 찾기</StyledLink>
        </ContentBox>
        <ContentBox>폐의약품</ContentBox>
        <ContentBox>편의점 약</ContentBox>
      </Container>
    </Main>
  );
};

export default MainPage;
