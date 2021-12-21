import Layout from "./Layout";
import Navbar from "./components/navigation/Navbar";
import Projects from "./components/Projects";

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
