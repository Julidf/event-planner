import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from './pages/Landing';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" Component={Landing} />
          <Route path="/about" Component={About} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
