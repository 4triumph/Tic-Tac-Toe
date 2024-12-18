import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductList from './components/ProductList/ProductList';
import TicTacToe from './components/TicTacToe/TicTacToe';
import './index.css';
import './App.css'
function App() {
  return (
    <Router>
      <div className='app-container'>
        <h1>React Demos</h1>

        {/* 导航栏部分 */}
        <nav className='nav-links'>
          <Link to="/productlist" style={{ marginRight: "15px" }}>
            产品列表
          </Link>
          <Link to="/tictactoe">井字棋</Link>
        </nav>

        {/* 路由配置部分 */}
        <Routes>
          <Route path="/" element={<h2>点击上方链接进入对应的 Demo</h2>} />
          <Route path="/productlist" element={<ProductList />} />
          <Route path="/tictactoe" element={<TicTacToe />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
