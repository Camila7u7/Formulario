import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Rutes } from './app/routes/Rutes';
import { Header } from './app/components/Header';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
      {/* <Header/> */}
      <Rutes/>
      </BrowserRouter>
    </div>
  );
}

export default App;
