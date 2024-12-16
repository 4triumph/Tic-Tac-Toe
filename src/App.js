import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductList from "./components/ProductList";
import TicTacToe from "./components/TicTacToe";

function App() {
  return (
    <Router>
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h1>React Demos</h1>
        <nav style={{ marginBottom: "20px" }}>
          <Link to="/productlist" style={{ marginRight: "15px" }}>
            产品列表
          </Link>
          <Link to="/tictactoe">井字棋</Link>
        </nav>

        {/* 路由配置 */}
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
