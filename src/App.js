import Navbar from './Navbar';
import Home from './Home';
import Post from "./Post"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BookDetails from './BookDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/create">
              <Post/>
            </Route>
            <Route path="/books/:id">
              <BookDetails/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

//<Route exact path='/'> <home/> </Route>
