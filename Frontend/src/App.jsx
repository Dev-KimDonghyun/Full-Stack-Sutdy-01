import NavBar from './components/NavBar';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

function App () {
  return (
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  )
}

export default App
