import { useEffect } from 'react';
import { GlobalContextProvider } from './context/GlobalContext';
import AppRoutes from './routes/router';

function App() {
  // 初始化操作（如主题设置、用户状态恢复等）
  useEffect(() => {
    // 可在这里添加 Web 端初始化逻辑（如检测深色模式偏好）
    const initApp = async () => {
      // 示例：从 localStorage 恢复主题设置
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        document.documentElement.classList.add(savedTheme);
      }
    };

    initApp();
  }, []);

  return (
    // 全局状态上下文包裹整个应用
    <GlobalContextProvider>
      {/* 路由容器 */}
      <AppRoutes />
    </GlobalContextProvider>
  );
}

export default App;