import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MainPage from './pages/MainPage';
import SignUpPage from './pages/SignUpPage';
import DetailPage from './pages/DetailPage';
import StorePillFindPage from './pages/FindStorePillPage';
import ProcessPage from './pages/ProcessPage';
import Mypage from './pages/Mypage';
import DetailSearchPage from './pages/DetailSearchPage';
import StorePillpage from './pages/StorePillpage';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/sign-up" element={<SignUpPage />}></Route>
          <Route path="/detailsearch" element={<DetailSearchPage />}></Route>
          <Route path="/detail/:id" element={<DetailPage />}></Route>
          <Route path="/findstorepill" element={<StorePillFindPage/>}></Route>
          <Route path="/storepill/:name" element={<StorePillpage />}></Route>
          <Route path="/process" element={<ProcessPage />}></Route>
          <Route path="/mypage" element={<Mypage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
