import NavBar from './components/NavBar';
import Footer from './components/Footer';
import './index.css';

import { createBrowserRouter } from 'react-router-dom'; // 라우터를 생성할 수 있게끔 해줌
import { RouterProvider } from 'react-router-dom'; // 라우터를 제공해줌
import { Outlet } from 'react-router-dom'; // 자식 컴포넌트를 랜더링하는 자리를 마련해줌

import MainPage from './pages/MainPage';
import About from './pages/About';
import Leadership from './pages/Leadership';
import Board from './pages/Board';
import Contact from './pages/Contact';
import Services from './pages/Services';

function Layout () {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <MainPage />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/leadership',
        element: <Leadership />
      },
      {
        path: '/board',
        element: <Board />
      },
      {
        path: '/our-services',
        element: <Services />
      },
      {
        path: '/contact',
        element: <Contact />
      },
    ]
  }
]);

// index: true는 부모 라우트의 기본 경로로 접속했을 때 보여줄 페이지를 지정하는 역할을 함

function App () {
  return <RouterProvider router={router} />
}

// 자식 요소 페이지 설정하고 뭐 라우터 설정 짝짝꿍 하고 한걸 App.jsx가 실행할 수 있도록 꽂아주는 역할을 함


export default App;
