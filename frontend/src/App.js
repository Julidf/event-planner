import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from './pages/home/Landing';
import About from './pages/About';
import Services from './pages/Services';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" Component={Landing} />
          <Route path="/about" Component={About} />
          <Route path="/services" Component={Services} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
