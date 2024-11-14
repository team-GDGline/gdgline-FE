import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage"; // 메인 페이지 컴포넌트 가져오기
import StartPage from "../pages/Start/StartPage";
import BookPage from "../pages/Book/BookPage"; // 도감 컴포넌트 가져오기
import LoadingPage from "../pages/LoadingPage/LoadingPage"; // 로딩 페이지 컴포넌트 가져오기/ 메인 페이지 컴포넌트 가져오기
import AnalysisPage from "../pages/Analysis/AnalysisPage";
import NotFoundPage from "../pages/NotFound/NotFoundPage";
import { RouterPath } from "./path"; // 경로 상수 가져오기

// 라우터 정의
const router = createBrowserRouter(
  [
    {
      path: RouterPath.root,
      element: <StartPage />,
    },
    { 
      path: RouterPath.main,
      element: <MainPage />,
    },
    {
      path: RouterPath.book,
      element: <BookPage />,
    },
    {
      path: RouterPath.loading,
      element: <LoadingPage />,
    },
    {
      path: RouterPath.analysis,
      element: <AnalysisPage />,
    },
    {
      path: RouterPath.notFound,
      element: <NotFoundPage />,
    },
  ],
  {
    future: {
      v7_fetcherPersist: true,
    },
  }
);

// 라우터를 렌더링하는 컴포넌트
export const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
