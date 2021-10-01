import './App.css';
// import Navbar from './components/Navbar/index';
// import Sidebar from './components/sidebar';
import home from './components/pages/home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact component={home}/>
          <Route path='/menu' component='/'/>
          <Route path='/Location' component='/'/>
          <Route path='/About' component='/'/>
          <Route path='/Contact' component='/'/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
