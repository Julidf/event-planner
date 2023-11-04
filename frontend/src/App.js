import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from './views/home/Landing';
import About from './views/about/About';
import Category from './views/category/Category';
import Login from "./views/authentication/Login";
import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" Component={Landing} />
          <Route path="/about" Component={About} />
          <Route path="/categories" Component={Category} />
          <Route path="/login" Component={Login} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
