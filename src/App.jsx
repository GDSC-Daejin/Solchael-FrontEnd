import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import SignUpPage from './pages/SignUpPage';
import DetailPage from './pages/DetailPage';
import RecommendPage from './pages/RecommendPage';
import ProcessPage from './pages/ProcessPage';
import Mypage from './pages/Mypage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/sign-up" element={<SignUpPage />}></Route>
          <Route path="/detail" element={<DetailPage />}></Route>
          <Route path="/recommend" element={<RecommendPage />}></Route>
          <Route path="/process" element={<ProcessPage />}></Route>
          <Route path="/mypage" element={<Mypage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
