import Search from '../components/Search';
import {
  Main,
  SearchInput,
  Container,
  ContentBox,
  SquareBtn,
  StyledLink,
  LoginInput,
  Title,
  Image,
  SmallInput,
  RoundBtn,
} from '../styles/MainPage';

const MainPage = () => {
  return (
    <Main>
      <Search placeholder={'약 이름을 입력하세요'}></Search>
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
        <ContentBox>
          <Title>&nbsp;&nbsp;폐의약품 처리 방법</Title>
          <Image src="src/imgs/약상자.png"></Image>
          <SmallInput placeholder="약 이름을 입력하세요" fontSize={16}></SmallInput>
        </ContentBox>
        <ContentBox>
          <Title>편의점 약 추천</Title>
          <Image src="src/imgs/약편의점.png"></Image>
          <RoundBtn>보러 가기</RoundBtn>
        </ContentBox>
      </Container>
    </Main>
  );
};

export default MainPage;
