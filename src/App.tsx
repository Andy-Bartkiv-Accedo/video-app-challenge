import './App.css';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import Header from './components/Header';
import AppRouter from './components/AppRouter';


const App = () => {
  return (
    // <HashRouter>
    <BrowserRouter>

      
    <div className="App">

      <Header />

      {/* <Navbar /> */}
      
      <AppRouter />
    
    </div>
    </BrowserRouter>
  )
}

export default App;
