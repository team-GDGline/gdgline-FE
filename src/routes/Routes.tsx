import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "../pages/main/MainPage"; // 메인 페이지 컴포넌트 가져오기
import StartPage from "../pages/startPage/StartPage";
import BookPage from "../pages/book/BookPage"; // 도감 컴포넌트 가져오기
import LoadingPage from "../pages/loading/LoadingPage"; // 로딩 페이지 컴포넌트 가져오기
import { RouterPath } from "./path"; // 경로 상수 가져오기

// 라우터 정의
const router = createBrowserRouter([
  {
    path: RouterPath.root,
    element: <StartPage />, // 메인 페이지를 직접 렌더링
  },
  {
    path: RouterPath.main,
    element: <MainPage/>,
  },
  {
    path: RouterPath.book,
    element: <BookPage />, // 도감 페이지를 직접 렌더링
  },
  {
    path: RouterPath.loading,
    element: <LoadingPage />, // 로딩 페이지를 직접 렌더링
  },
]);

// 라우터를 렌더링하는 컴포넌트
export const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
