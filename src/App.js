import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavbarComponent from './components/NavbarComponent';
import News from './components/News';
import About from './components/About';

function App() {

  return (
    <>
      <BrowserRouter>
        <NavbarComponent />
        <Switch>
          <Route exact path="/">
            <News/>
          </Route>
          <Route path="/About">
            <About />
          </Route>
          
        </Switch>


       
      </BrowserRouter>
    </>

  );
}

export default App;
