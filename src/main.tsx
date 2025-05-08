import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route, 
  createRoutesFromElements
} from "react-router-dom";
import App from "./App";
import Home from './pages/Home'; // 示例页面组件
import About from './pages/About'; // 示例页面组件

// 定义路由配置
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}> {/* App 可以作为布局组件，内部使用 <Outlet /> */}
      <Route index element={<Home />} /> {/* 默认首页 */}
      <Route path="about" element={<About />} />
      {/* 更多路由 */}
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
