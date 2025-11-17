import { NavLink } from 'react-router-dom';
import { FaHome, FaPlus, FaUser } from 'react-icons/fa'; // 替换为需要的图标

export default function TabBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 h-15 flex-row justify-around items-center bg-green-100 border-t border-gray-200 z-50">
      {/* 首页 Tab */}
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          `flex flex-col items-center justify-center text-sm gap-1 ${isActive ? 'text-green-400' : 'text-gray-500'}`
        }
      >
        <FaHome size={20} />
        <span>首页</span>
      </NavLink>

      {/* 发布 Tab（中间突出按钮） */}
      <NavLink
        to="/add"
        className="flex items-center justify-center w-12 h-12 rounded-full bg-green-400 text-white mb-5 shadow-md"
      >
        <FaPlus size={24} />
      </NavLink>

      {/* 个人中心 Tab */}
      <NavLink
        to="/profile"
        className={({ isActive }) =>
          `flex flex-col items-center justify-center text-sm gap-1 ${isActive ? 'text-green-400' : 'text-gray-500'}`
        }
      >
        <FaUser size={20} />
        <span>我的</span>
      </NavLink>
    </div>
  );
}