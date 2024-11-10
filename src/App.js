import './styles/App.css';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar></Navbar>
      {/* <Signup></Signup> */}
      <Login></Login>
    </>
  );
}

export default App;
