import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import StatsContainer from './containers/StatsContainer';
import NavBar from './componenets/NavBar';

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/'></Route>
        <Route path='/standings' element={<StatsContainer/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
