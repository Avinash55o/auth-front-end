import { BrowserRouter, Route, Routes } from "react-router-dom";
import signup from "./components/signup";
import login from "./components/login";
import dashBoard from "./components/dashBoard";
import userprofile from "./components/profile";
import home from "./components/home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" Component={signup} />
          <Route path="/login" Component={login} />
          <Route path="/" Component={home} />
          <Route path="/dashboard" Component={dashBoard} />
          <Route path="/profile" Component={userprofile} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
