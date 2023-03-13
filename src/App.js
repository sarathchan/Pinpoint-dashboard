import Login from './Login/Login';
import './App.css';
import {Routes,Route} from "react-router-dom";
import Dashboard from './Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path="dashboard" element={<Dashboard />}></Route>
      </Routes>
    </div>
  );
}

export default App;
