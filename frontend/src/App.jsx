import { Routes,Route } from "react-router-dom";

import CreatePage from "./pages/CreatePage";
import HomePage from "./pages/HomePage"
import Navbar from "./component/Navbar";

function App() {
  return (
    <>
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
