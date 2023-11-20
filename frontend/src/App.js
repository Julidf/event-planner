import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from './views/home/Landing';
import About from './views/about/About';
import Category from './views/category/Category';
import Login from "./views/authentication/Login";
import Profile from "./views/profile/Profile";
import CreateService from "./views/createService/CreateService";
import EditService from "./views/editService/EditServices";
import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" Component={Landing} />
          <Route path="/about" Component={About} />
          <Route path="/categories" Component={Category} />
          <Route path="/categories/:param" Component={Category} />
          <Route path="/login" Component={Login} />
          <Route path="/profile" Component={Profile} />
          <Route path="/createService" Component={CreateService} />
          <Route path="/editService" Component={EditService} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
