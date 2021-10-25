import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Sidebar} />
          {/* <Route exact path="/main" component={Main} />

          <Route path="/about" component={Info} /> */}
          <Route path="/sidebar">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
