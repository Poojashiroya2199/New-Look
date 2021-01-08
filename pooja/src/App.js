
import './App.css';
// import Login from "./components/Login";
// import Signup from "./components/Signup";
import { Route, BrowserRouter} from "react-router-dom";
import Home from "./components/Home"
function App() {
  return (
    <BrowserRouter>
    <div className="App">
        {/* <Switch>
        <Route path="/signup" exact component={Signup} /> 
        <Route path="/login" exact component={Login} />  */}
        <Route
          path="/"
          render={(props) => <Home display={true} {...props} />}
        />
         {/* <Redirect to="/login" /> */}
         {/* </Switch> */}
    </div>
    </BrowserRouter>
  );
}

export default App;
