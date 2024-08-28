import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  console.log('App render')
  return (
    <div className="">
      <Signup />
      <Login />
    </div>
  );
}

export default App;
