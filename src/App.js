import './App.css';
import Logo from './components/Logo';
import logo from './images/logo.svg';

function App() {
  return (
    <div className='min-h-screen flex flex-col justify-center'>
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <Logo src={`${logo}`} alt="Example image" />
    </div>
  );
}

export default App;
