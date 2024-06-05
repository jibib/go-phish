import './App.css';
import Bar from './Bar.js';
import Body from './Body.js';
import Footer from './Footer.js';


function App() {
  return (
    <div className="App">
      <header>
        <Bar></Bar>
      </header>
      <div style={{ minHeight:"100vh",}}>
        <Body></Body>
      </div>
      <footer>
        <Footer/>
      </footer>
      
    </div>
  );
}

export default App;
