import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import { Suspense } from "react";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <header>
        <Link to={"/"}>home</Link>
        <Link to={"/profile"}>profile</Link>
      </header>
      <Suspense fallback={<>Loading</>}>
        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
