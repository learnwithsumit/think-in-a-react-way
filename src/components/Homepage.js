import { Route } from "react-router-dom";
export default function Hello() {
  return (
    <div>
      <h1>Hello</h1>
      <p>This is the home page</p>
      <Route path="/hello/world">
        <p>This is world!</p>
      </Route>
    </div>
  );
}
