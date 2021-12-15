import Layout from "./Layout";
import Navbar from "./navigation/Navbar";
import Sidebar from "./navigation/Sidebar";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Layout>
        <Navbar>
          <a href="/">Home</a>
          <a href="/projects">Projects</a>
        </Navbar>
        <Sidebar />
        {/* <h1>Hello CodeSandbox</h1> */}
        {/* <h2>Start editing to see some magic happen!</h2> */}
      </Layout>
    </div>
  );
}
