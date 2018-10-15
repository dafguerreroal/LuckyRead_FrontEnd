import React, {Component} from 'react';
import Navbar from './components/layout/Navbar';
import Init from './components/Init/Init';
import About from './components/About/AboutPage';
import Contact from './components/Contact/Contact';
import SignUp from './components/SignUp_LogIn/SignUp';
import LogIn from './components/SignUp_LogIn/LogIn';
import FragmentsPage from './components/FragmentsPage/FragmentsPage';
import CategoriesPage from './components/CategoriesPage/CategoriesPage';
import Fragment from './components/FragmentsPage/Fragment';
import {Route, BrowserRouter, Switch} from 'react-router-dom';


class App extends Component {
  render() {
    return (<BrowserRouter>
      <div className="App">
        <Navbar/>
      <Switch>
        <Route exact="exact" path='/' component={Init}/>
        <Route path='/about' component={About}/>
        <Route path='/contact' component={Contact}/>
        <Route exact="exact" path='/signup' component={SignUp}/>
        <Route exact="exact" path='/login' component={LogIn}/>
        <Route exact="exact" path='/FragmentsPage' component={FragmentsPage}/>
        <Route exact="exact" path='/categoriespage' component={CategoriesPage}/>
      <Route path='/:fragment_id' component={Fragment}/>
    </Switch>
      </div>
    </BrowserRouter>);
  }
}

export default App;
