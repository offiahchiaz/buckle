import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Components/layout/Navbar';
import Dashboard from './Components/dashboard/Dashboard';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" component={ Dashboard } />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

