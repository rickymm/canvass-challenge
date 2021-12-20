import Layout from "./Layout";
import Navbar from "./navigation/Navbar";
import Sidebar from "./navigation/Sidebar";
import Projects from "./Projects";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Layout>
        <Navbar>
          <a href="/">Home</a>
          <a href="/projects">Projects</a>
        </Navbar>
        <Projects />
      </Layout>
    </div>
  );
}
