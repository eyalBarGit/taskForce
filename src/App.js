import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './style/style.scss'
import { HomePage } from './pages/HomePage/HomePage'
import { AppHeader } from './cmps/AppHeader/AppHeader'
import { Board } from './cmps/Board/Board';
function App() {

  return (
    <div className="App ">
      <AppHeader/>

      <Switch>
      <Route component={HomePage} exact path="/" />
        <Route component={Board} path="/boards/:boardid/:listid?/:cardid?"/>
      </Switch>
      {/* <Footer/> */}
    </div>

  );
}

export default App;

