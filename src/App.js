import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Bar from './Bar.js';
import Home from './Home.js';
import NewBody from './NewBody.js';

function App() {
  return (
    <Router>
    <div className="App">
      <Bar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/test" element={<NewBody/>} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
