import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Search from "./components/pages/Search";

const App = () => {
  return (
    <main className="flex flex-col min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </main>
  );
};
export default App;
