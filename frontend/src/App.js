import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from './views/home/Landing';
import About from './views/about/About';
import Services from './views/services/Services';
import Login from "./views/authentication/Login";
import Register from "./views/authentication/Register";
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
