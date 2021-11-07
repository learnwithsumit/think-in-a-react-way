import { Redirect, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Hello from "./components/Hello";
import Post from "./components/Post";
import Posts from "./components/Posts";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/hello" />
        </Route>
        <Route path="/hello">
          <Hello />
        </Route>
        <Route path="/posts" exact>
          <Posts />
        </Route>
        <Route path="/posts/:postId">
          <Post />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
