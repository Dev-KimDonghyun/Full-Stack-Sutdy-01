import NavBar from './components/NavBar';
import Footer from './components/Footer';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

function App () {
  return (
    <BrowserRouter>
      <NavBar />
      <Footer />
    </BrowserRouter>
  )
}

export default App
