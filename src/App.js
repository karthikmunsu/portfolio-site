import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/HeaderComponent/Header';
import Home from './components/HomeComponent/Home';
import Detail from "./components/DetailComponent/Detail";

export default function App() {
  return(
    <BrowserRouter>
      <div>
        <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/detail" component={Detail} />            
          </Switch>
      </div>
    </BrowserRouter>
  );
}