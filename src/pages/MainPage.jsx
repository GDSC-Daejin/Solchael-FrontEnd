import { Main, GreenContainer, SearchInput, Container, ContentBox } from '../styles/MainPage';

const MainPage = () => {
  return (
    <Main>
      <GreenContainer>
        <SearchInput placeholder="약 이름을 입력하세요" />
      </GreenContainer>
      <Container>
        <ContentBox>로그인</ContentBox>
        <ContentBox>폐의약품</ContentBox>
        <ContentBox>편의점 약</ContentBox>
      </Container>
    </Main>
  );
};

export default MainPage;
