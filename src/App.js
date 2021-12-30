import './App.css';
import NavBar from './components/navbar/NavBar';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Photos from './components/Photos';
import Home from './components/Home';

function App() {
  return (
    <>
      <NavBar/>
      <Home/>
      <Projects/>
      <Resume/>
      <Photos/>
    </>
  );
}

export default App;
