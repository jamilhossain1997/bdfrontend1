
import './App.css';
import Header from './Component/Header';
import {BrowserRouter} from 'react-router-dom';
function App() {
  return (
    <div className="App">
       <BrowserRouter>
         <Header/>
        </BrowserRouter>
    </div>
  );
}

export default App;
