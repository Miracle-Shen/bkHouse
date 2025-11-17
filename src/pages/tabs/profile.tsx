import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabaseClient';
import { useAuth } from '../../hook/useAuth';

function App() {
  const navigate = useNavigate();
  const session = useAuth((state: any) => state.session);

  return (
    <div className='min-h-screen flex flex-col items-center justify-center p-4'>
      {session ? (
        <div>
          <h1 className="text-2xl font-bold text-center my-4">个人中心</h1>
          <div
            className='text-center mb-4 text-gray-500 underline cursor-pointer'
            onClick={async () => {
              await supabase.auth.signOut();
              navigate('/sign-in');
            }}
          >
            退出登录
          </div>
        </div>
      ) : (
        <div>
          <div
            className='text-center mb-4 text-blue-500 underline cursor-pointer'
            onClick={() => navigate('/sign-in')}
          >
            登录
          </div>
          <div
            className='text-center mb-4 text-red-500 underline cursor-pointer'
            onClick={() => navigate('/sign-up')}
          >
            注册
          </div>
        </div>
      )}
    </div>
  );
}

export default App;