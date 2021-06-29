import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AnimatedCursor from "react-animated-cursor";



import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import Footer from './components/Footer';
import WorkDescriptionScreen from './screens/WorkDescriptionScreen';
import Projects from './screens/Projects';
import AddProjects from './screens/AddProjects';

function App() {
  return (
    
    <div className="App">
      <AnimatedCursor
        innerSize={18}
        outerSize={10}
        color='193, 11, 111'
        // color='red'
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
      />
      <Router>
      <Header />
        <Switch>
          <Route exact path='/' component={HomeScreen}></Route>
          <Route exact path="/projects" component={Projects}></Route>
          <Route exact path="/addproject" component={AddProjects}></Route>
          <Route exact path="/work/:id" component={WorkDescriptionScreen}></Route>
        </Switch>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
