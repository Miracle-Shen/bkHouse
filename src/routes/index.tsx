import { Routes, Route, Outlet } from 'react-router-dom';
import TabBar from '../components/layout/TabBar'; // 底部导航栏组件

// 导入页面组件
import Home from '../pages/tabs/index'; // 首页（包含发现/关注标签）
import IndexAll from '../pages/tabs/index_all'; // 发现页
import IndexFollow from '../pages/tabs/index_follow'; // 关注页
import Add from '../pages/tabs/add'; // 发布页
import Profile from '../pages/tabs/profile'; // 个人中心页
import PostDetail from '../pages/detail/[post_id]'; // 帖子详情页（动态路由）
import SignIn from '../pages/auth/sign_in'; // 登录页
import SignUp from '../pages/auth/sign_up'; // 注册页
import NotFound from '../pages/404'; // 404 页面

// 带底部导航栏的布局（包裹首页、发布、个人中心等）
const TabLayout = () => (
  <>
    <Outlet /> {/* 动态渲染子路由内容 */}
    <TabBar /> {/* 底部导航栏（在子路由页面中显示） */}
  </>
);

// 路由配置
const AppRoutes = () => {
  return (
    <Routes>
      {/* 不需要底部导航的页面（如登录、详情页） */}
      <Route path="/auth/sign-in" element={<SignIn />} />
      <Route path="/auth/sign-up" element={<SignUp />} />
      <Route path="/detail/:post_id" element={<PostDetail />} /> {/* 动态路由：帖子ID */}

      {/* 需要底部导航的页面（包裹在 TabLayout 中） */}
      <Route element={<TabLayout />}>
        <Route path="/" element={<Home />}>
          {/* 首页嵌套子路由（发现/关注标签页） */}
          <Route index element={<IndexAll />} /> {/* 默认显示发现页 */}
          <Route path="follow" element={<IndexFollow />} /> {/* 关注页 */}
        </Route>
        <Route path="/add" element={<Add />} /> {/* 发布页 */}
        <Route path="/profile" element={<Profile />} /> {/* 个人中心页 */}
      </Route>

      {/* 404 页面（匹配所有未定义的路由） */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;