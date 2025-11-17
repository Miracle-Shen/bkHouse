import { useAuth } from "../../hook/useAuth";
import Avatar from '../../component/profile/Avatar'
import Auth from "../../component/profile/Auth";
import { useState, useEffect } from "react"; // 导入 React 的 useState 和 useEffect 钩子
import { supabase } from "../../lib/supabaseClient"; // 导入 Supabase 客户端实例
import Account from "../../component/profile/Account";
import type { Session } from "@supabase/supabase-js";

export default function SignUp(){
       const [session, setSession] = useState<Session | null>(null) // 定义 session 状态，用于存储用户会话信息
  
  useEffect(() => {
    // 获取当前用户会话信息
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session) // 将会话信息存储到状态中
    })

    // 监听用户认证状态的变化（登录、注销等）
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session) // 更新会话信息
    })
  }, []) // 空依赖数组，确保只执行一次
    return (
        <div className="container" style={{ padding: '50px 0 100px 0' }}>
      {!session ? (
        <Auth /> // 显示登录组件
      ) : (
        <Account key={session.user.id} session={session} /> // 显示账户管理组件，并传递会话信息
      )}
    </div>
    );
}