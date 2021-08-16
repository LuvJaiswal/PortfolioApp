
import './App.css';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">

            <Sidebar />

          </div>
          <div className="col-lg-9 app_main-content">
            <h1> Mainbar</h1>

          </div>
        </div>
      </div>
    </div >

  );
}

export default App;
