import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Redirect ,Switch } from 'react-router-dom';
import Home from './pages/home/App';
import NotFound from './pages/notFound/NotFound';
import DesejosCadastrar from './pages/desejosCadastrar/DesejosCadastrar';
import DesejosListar from './pages/desejosListar/DesejosListar';
import reportWebVitals from './reportWebVitals';

const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/desejosListar" component={DesejosListar}/>
        <Route path="/desejosCadastrar" component={DesejosCadastrar}/>
        <Route path="/notFound" component={NotFound}/>
        <Redirect to="/notFound" />
      </Switch>
    </div>
  </Router>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
