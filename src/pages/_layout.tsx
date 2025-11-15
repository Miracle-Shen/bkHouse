// src/components/TabLayout.jsx
import { NavLink, Outlet } from 'react-router-dom';
import { FiHome, FiPlusCircle, FiUser } from 'react-icons/fi'; // 可替换为其他图标库

export default function TabLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* 页面内容区域（显示当前路由对应的组件） */}
      <main className="flex-1 p-4">
            aasda
      </main>

      {/* 底部标签导航栏（Web 端模拟移动端 Tab 栏） */}
      <nav className="border-t bg-white py-2">
        <div className="flex justify-around">
          {/* 首页标签 */}
          <NavLink
            to="/"
            className={({ isActive }) => 
              `flex flex-col items-center ${isActive ? 'text-blue-600' : 'text-gray-500'}`
            }
          >
            <FiHome size={24} />
            <span className="text-xs mt-1">首页</span>
          </NavLink>

          {/* ADD 标签 */}
          <NavLink
            to="/add"
            className={({ isActive }) => 
              `flex flex-col items-center ${isActive ? 'text-blue-600' : 'text-gray-500'}`
            }
          >
            <FiPlusCircle size={24} />
            <span className="text-xs mt-1">ADD</span>
          </NavLink>

          {/* 个人中心标签 */}
          <NavLink
            to="/profile"
            className={({ isActive }) => 
              `flex flex-col items-center ${isActive ? 'text-blue-600' : 'text-gray-500'}`
            }
          >
            <FiUser size={24} />
            <span className="text-xs mt-1">我的</span>
          </NavLink>
        </div>
      </nav>
    </div>
  );
}