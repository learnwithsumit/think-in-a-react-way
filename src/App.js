import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Hello from "./components/Hello";
import Post from "./components/Post";
import Posts from "./components/Posts";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/hello" />} />
        <Route path="/hello/*" element={<Hello />}>
          <Route path="world" element={<p>This is world!</p>} />
        </Route>
        <Route path="/posts/" element={<Posts />} />
        <Route path="/posts/:postId" element={<Post />} />
      </Routes>
    </div>
  );
}

export default App;
