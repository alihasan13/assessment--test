import logo from './logo.svg';
import './App.css';
import ListItemComponent from './Components/ListItemComponent'
import { BrowserRouter as Router, Route, Switch   } from 'react-router-dom';
import Footer from './Components/Footer'
import Header from './Components/Header'
import GetAuthor from './Components/GetAuthor'

function App() {
  return (
    <Router>
    <div>
       <Header/>
       <div>
         <Switch >
           <Route exact path = '/author'>
           <GetAuthor/>
           </Route>
           {/* <Route path = '/favauthor'>
           <GetFavAuthor/>
           </Route> */}
         </Switch >
       </div>
       <Footer/>
    </div>
    </Router>
  );
}

export default App;
