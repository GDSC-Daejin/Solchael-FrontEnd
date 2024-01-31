import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import SignUpPage from './pages/SignUpPage';
import DetailPage from './pages/DetailPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/sign-up" element={<SignUpPage />}></Route>
          <Route path="/detail" element={<DetailPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
