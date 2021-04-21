
import './App.css';
// import Login from "./components/Login";
// import Signup from "./components/Signup";
import { Route, BrowserRouter} from "react-router-dom";
import Home from "./components/Home"
function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <Route
          path="/"
          render={(props) => <Home display={true} {...props} />}
        />
    </div>
    </BrowserRouter>
  );
}

export default App;
