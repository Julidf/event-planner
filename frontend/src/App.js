import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from './pages/home/Landing';
import About from './pages/About';
import Services from './pages/services/Services';
import Login from "./pages/authentication/Login";
import Register from "./pages/authentication/Register";
import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" Component={Landing} />
          <Route path="/about" Component={About} />
          <Route path="/services" Component={Services} />
          <Route path="/login" Component={Login} />
          <Route path="/register" Component={Register} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
