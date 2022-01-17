import logo from "./logo.svg";
import "./App.css";
import ListItemComponent from "./Components/ListItemComponent";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import GetAuthor from "./Container/AllAuthor/GetAuthor";
import Drawer from "./Components/Drawer";
import GetFavAuthor from "./Container/AllAuthor/GetFavAuthor";

function App() {
  return (
    <Router>
      <div>
        <Drawer />
        </div>
        <div >
          <Header />
          <Switch>
            <Route
              exact
              from="/"
              render={(props) => <GetAuthor {...props} />}
            />
            <Route
              exact
              path="/contact"
              render={(props) => <GetFavAuthor {...props} />}
            />
          </Switch>
        </div>
        <div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
