import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./routes/Home.js";
import Register from "./routes/Register.js";
import Login from "./routes/Login.js";
import "./App.css"

function App() {
  return <div class=""> <Router>
      <Switch>
        <Route path="/register">
          <Register/>
        </Route>
        <Route path="/home">
          <Home/>
        </Route>
        <Route path="/">
          <Login/>
        </Route>
      </Switch>
    </Router>
  </div>
}

export default App;