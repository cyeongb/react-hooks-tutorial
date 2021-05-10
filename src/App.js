import { useState, useMemo } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import { UserContext } from "./UserContext";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
          </ul>
        </nav>
        <UserContext.Provider value={value}>
          <Route exact path="/" component={Index} />
          <Route exact path="/about/" component={About} />
        </UserContext.Provider>
      </div>
    </Router>
  );
}

export default App;
