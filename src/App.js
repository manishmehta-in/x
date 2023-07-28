import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import LeftNavbar from "./components/LeftNavbar/LeftNavbar";

function App() {
  return (
    <BrowserRouter>
      <div className="container ">
        <div className="row p-0 m-0">
          <div className="col-lg-3 p-0 m-0">
            <LeftNavbar />
          </div>
          <div className="col-lg-9 row">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
          
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
