import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import SignUpPage from './pages/SignUpPage';
import DetailPage from './pages/DetailPage';
import RecommendPage from './pages/RecommendPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/sign-up" element={<SignUpPage />}></Route>
          <Route path="/detail" element={<DetailPage />}></Route>
          <Route path="/recommend" element={<RecommendPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
