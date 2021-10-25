import "./App.css";
// import {
//   BrowserRouter as Router,
//   Route,
//   Switch,
//   Redirect,
// } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

import { useState } from "react";

function App() {
  const [showSide, setShowSide] = useState(true);
  // const [showMain, setShowMain] = useState(true);

  const btn_function = () => {
    console.log("in");
    setShowSide(!showSide);
  };

  return (
    <div className="App">
      {showSide && <Sidebar parent={btn_function} />}
      <Main parent={btn_function} />

      {/* <Router>
        <Switch>
          <Route exact path="/" component={Sidebar} />
          <Route exact path="/main" component={Main} />

          <Route path="/about" component={Info} />
          <Route path="/sidebar">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router> */}
    </div>
  );
}

export default App;
