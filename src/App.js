import Login from './Login/Login';
import './App.css';
import {Routes,Route} from "react-router-dom";
import {Analytics} from 'aws-amplify'
import { useEffect } from 'react';
import Dashboard from './Dashboard/Dashboard';

function App() {
  useEffect(() => {
    Analytics.record("Home Page Visit")
    Analytics.record({
      name: "UserSignIn",
      attributes:{
        userName:"chan"
      }
    })
  }, [])
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
