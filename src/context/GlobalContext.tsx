// 示例：保留原状态管理逻辑，如user、refreshUser等
import { createContext, useContext, useState, ReactNode } from 'react';

const GlobalContext = createContext<any>(null);

export function GlobalContextProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<any>(null);
  const [freshPostCnt, setFreshPostCnt] = useState(0);

  const refreshUser = async () => {
    // 原逻辑：从Appwrite获取用户信息
  };

  const refreshPosts = () => {
    setFreshPostCnt(prev => prev + 1);
  };

  return (
    <GlobalContext.Provider value={{ user, refreshUser, freshPostCnt, refreshPosts }}>
      {children}
    </GlobalContext.Provider>
  );
}

export const useGlobalContext = () => useContext(GlobalContext);