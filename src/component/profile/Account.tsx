import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabaseClient';
import Avatar from './Avatar';
export default function Account({ session }) {
  // 定义状态变量
  const [loading, setLoading] = useState(true); // 加载状态
  const [username, setUsername] = useState<string | null>(null); // 用户名
  const [password, setPassword] = useState<string | null>(null); // 密码
  const [avatar_url, setAvatarUrl] = useState<string | null>(null); // 头像 URL

  // 使用 useEffect 获取用户资料
  useEffect(() => {
    let ignore = false; // 防止组件卸载后更新状态

    async function getProfile() {
      setLoading(true); // 设置加载状态为 true
      const { user } = session; // 从会话中获取用户信息

      // 从 Supabase 数据库中查询用户资料
      const { data, error } = await supabase
        .from('profiles')
        .select(`username, password, avatar_url`)
        .eq('id', user.id)
        .single();

      if (!ignore) {
        if (error) {
          console.warn(error);
        } else if (data) {
          setUsername(data.username);
          setPassword(data.password);
          setAvatarUrl(data.avatar_url);
        }
      }

      setLoading(false); // 设置加载状态为 false
    }

    getProfile(); // 调用获取用户资料的函数

    return () => {
      ignore = true; // 组件卸载时设置 ignore 为 true
    };
  }, [session]); 

  // 更新用户资料的函数
  async function updateProfile(event: React.FormEvent, avatarUrl: string) {
    event.preventDefault(); // 阻止表单默认提交行为

    setLoading(true); // 设置加载状态为 true
    const { user } = session; // 从会话中获取用户信息

    // 构造更新数据对象
    const updates = {
      id: user.id,
      username,
      password,
      avatar_url: avatarUrl,
      updated_at: new Date(), // 设置更新时间
    };

    // 调用 Supabase 的 upsert 方法更新用户资料
    const { error } = await supabase.from('profiles').upsert(updates);

    if (error) {
      alert(error.message); // 如果出错，弹出错误信息
    } else {
      setAvatarUrl(avatarUrl); // 更新头像 URL 状态
    }
    setLoading(false); // 设置加载状态为 false
  }

  return (
    <form onSubmit={(e) => updateProfile(e, avatar_url || '')} className="form-widget">
      <div>
        <label htmlFor="email">邮箱</label>
        {/* 显示用户邮箱，禁止编辑 */}
        <input id="email" type="text" value={session.user.email} disabled />
      </div>
      <div>
        <label htmlFor="username">用户名</label>
        {/* 输入框，用于更新用户名 */}
        <input
          id="username"
          type="text"
          required
          value={username || ''}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">密码</label>
        {/* 输入框，用于更新个人网站 */}
        <input
          id="password"
          type="text"
          value={password || ''}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

        <Avatar
      url={avatar_url}
      size={150}
      onUpload={(event, url) => {
        updateProfile(event, url)
      }}
    />

      <div>
        {/* 提交按钮，用于更新用户资料 */}
        <button className="button block primary" type="submit" disabled={loading}>
          {loading ? '加载中 ...' : '注册'}
        </button>
      </div>

      {/* <div>
        <button className="button block" type="button" onClick={() => supabase.auth.signOut()">
          注销
        </button>
      </div> */}
    </form>
  );
}