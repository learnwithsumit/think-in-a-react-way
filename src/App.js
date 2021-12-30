import { Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import Homepage from "./components/Homepage";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>
        <Route path="/dashboard" exact>
          <Dashboard />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
