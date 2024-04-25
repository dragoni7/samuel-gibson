import './css/App.css';
import './css/Font.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavMenu from './components/NavMenu';
import Banner from './components/Banner'
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
        <NavMenu />
        <Banner />
        <Skills />
        <Projects />
        <br />
    </div>
  );
}

export default App;
