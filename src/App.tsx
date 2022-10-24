import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Layout } from "./components/Layout";
import { MyProjects } from "./components/MyProjects";
import "animate.css";
import { NotFound } from "./components/NotFound";

function App() {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="projects" element={<MyProjects />} />
      </Route>
    </Routes>
  );
}

export default App;
