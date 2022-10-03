import { Routes, Route } from "react-router-dom";
import { About } from "./components/About";
import { Home } from "./components/Home";
import { Layout } from "./components/Layout";
import { MyProjects } from "./components/MyProjects";
import "animate.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="projects" element={<MyProjects />} />
      </Route>
    </Routes>
  );
}

export default App;
