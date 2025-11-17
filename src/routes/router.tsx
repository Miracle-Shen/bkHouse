import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "../pages/index";
import NotFound from "../pages/404.tsx";
import Detail from "../pages/detail/[postId].tsx";
import SignIn from "../pages/auth/signIn.tsx";
import SignUp from "../pages/auth/signUp.tsx";
import Profile from "../pages/tabs/profile.tsx";
import Add from "../pages/tabs/add.tsx";
import TabBar from "../component/layout/TabBar";
const TabLayout = () => (
  <div className="min-h-screen flex flex-col">
    <Outlet className="flex-1" />
    <TabBar />
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <TabLayout />, // 应用底部导航的布局
    children: [
      { index: true, element: <Home /> }, // 首页（默认子路由）
      { path: "add", element: <Add /> }, // 发布页
      { path: "profile", element: <Profile /> }, // 个人中心
    ],
  },
  // 不需要底部导航的页面（如详情页、登录页）
  { path: "/detail/:postId", element: <Detail /> },
  { path: "/sign-in", element: <SignIn /> },
  { path: "/sign-up", element: <SignUp /> },
  { path: "*", element: <NotFound /> },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}