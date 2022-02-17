import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignIn } from "./pages/signin";
import { NotAuthorized } from "./pages/not_authorized";
import { Nav } from "./components/nav";
import { SignUp } from "./pages/signup";
import { Homepage } from "./pages/home";

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <BrowserRouter>
        <Routes>
          <Route exact path="/signin" element={<SignIn />}></Route>
          <Route exact path="/signup" element={<SignUp />}></Route>
          <Route exact path="/" element={<Homepage />}></Route>
          <Route path="*" element={<NotAuthorized />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
