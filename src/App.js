import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Features from './pages/Features';
import Pricing from './pages/Pricing'
import Demo from './pages/Demo';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions'
import Eula from './pages/Eula';
import Refund from './pages/Refund';
import NotFound from './pages/NotFound';
import Test from './pages/Test';
import Respiratory from './pages/Respiratory';
import ChildImmunity from './pages/ChildImmunity';
import Cancer from './pages/Cancer';

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Switch>
          <Route path='/' exact={true}>
            <Home />
          </Route>

          <Route path='/about' exact={true}>
            <Features />
          </Route>
          
          <Route path='/pricing' exact={true}>
            <Pricing />
          </Route>

          <Route path='/demo' exact={true}>
            <Demo />
          </Route>

          <Route path='/gynaecological-clinic' exact={true}>
            <Eula />
          </Route>

          <Route path='/respiratory' exact={true}>
            <Respiratory />
          </Route>

          <Route path='/childimmunity-clinic' exact={true}>
            <ChildImmunity />
          </Route>

          <Route path='/cancer' exact={true}>
            <Cancer />
          </Route>

          <Route path='/stone-kidney-clinic' exact={true}>
            <PrivacyPolicy />
          </Route>

          <Route path='/respiratory-clinic' exact={true}>
            <TermsAndConditions />
          </Route>
       
          <Route path='/thyroid-clinic' exact={true}>
            <Refund />
          </Route>

          <Route path='/mind-clinic' exact={true}>
            <Test />
          </Route>

          <Route path='/*' >
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
