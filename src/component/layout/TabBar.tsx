// src/components/layout/TabBar.tsx
import { NavLink } from 'react-router-dom';
import './TabBar.css'; // 导航栏样式

const TabBar = () => {
  return (
    <nav className="tab-bar">
      <NavLink 
        to="/" 
        className={({ isActive }) => isActive ? "tab-item active" : "tab-item"}
        end // 精确匹配根路由
      >
        <span>首页</span>
      </NavLink>
      <NavLink 
        to="/add" 
        className={({ isActive }) => isActive ? "tab-item active" : "tab-item"}
      >
        <span>发布</span>
      </NavLink>
      <NavLink 
        to="/profile" 
        className={({ isActive }) => isActive ? "tab-item active" : "tab-item"}
      >
        <span>我的</span>
      </NavLink>
    </nav>
  );
};

export default TabBar;