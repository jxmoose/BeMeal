import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./routes/Home";
import Register from "./routes/Register";
import Login from "./routes/Login";
import Test from "./routes/Test";
import "./App.css"

function App() {
  return <Router>
      <Switch>
        <Route path="/register">
          <Register/>
        </Route>
        <Route path="/test">
          <Test/>
        </Route>
        <Route path="/home">
          <Home/>
        </Route>
        <Route path="/">
          <Login/>
        </Route>
      </Switch>
    </Router>
  
}

export default App;