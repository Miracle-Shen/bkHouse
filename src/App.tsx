import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TabLayout from "./pages/_layout.tsx";

// import Home from './pages/Home';
// import Add from './pages/Add';
// import Profile from './pages/Profile';
// import NotFound from './pages/NotFound';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
     <BrowserRouter>
      <Routes>
        {/* 嵌套路由：所有标签页页面都嵌套在 TabLayout 中 */}
        <Route path="/" element={<TabLayout />}>
          {/* <Route index element={<Home />} /> 
          <Route path="add" element={<Add />} /> 
          <Route path="profile" element={<Profile />} />  */}
        </Route>

        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
