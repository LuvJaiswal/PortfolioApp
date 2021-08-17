
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import { Switch } from "react-router";
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';

function App() {
  return (
    <Router>

      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">

              <Sidebar />


            </div>
            <div className="col-lg-9 app_main-content">
              <Navbar />
              <Switch>

                <Route path="/Resume">
                  <Resume />
                </Route>

                <Route exact path="/">
                  <About />
                </Route>

                <Route exact path="/Projects" component={Projects} />

                <Route>
                  <Redirect to="/" />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </div >

    </Router>
  );
}

export default App;
