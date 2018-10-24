import React, {Component} from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Init from './components/Init/Init';
import About from './components/About/AboutPage';
import Contact from './components/Contact/Contact';
import SignUp from './components/SignUp_LogIn/SignUpPage';
import LoginPage from './components/SignUp_LogIn/LoginPage';
import FragmentsPage from './components/FragmentsPage/FragmentsPage';
import Categories_List from './components/CategoriesPage/Categories_List';
import My_Profile from './components/MyProfile/My_Profile';
import Fragment from './components/FragmentsPage/Fragment';
import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSmile } from '@fortawesome/free-solid-svg-icons'
import { faMeh } from '@fortawesome/free-solid-svg-icons'
import { faFrown } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'


import requireAuth from './utils/requireAuth';


class App extends Component {
  render() {
    return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path='/' component={Init}/>
          <Route path='/about' component={About}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/signup' component={SignUp}/>
          <Route path='/login' component={LoginPage}/>
          <Route path='/myprofile' component={requireAuth(My_Profile)}/>
          <Route path='/fragmentspage' component={requireAuth(FragmentsPage)}/>
          <Route path='/categoriespage' component={requireAuth(Categories_List)}/>
          <Route path='/:fragment_id' component={requireAuth(Fragment)}/>
        </Switch>
      </div>
    </BrowserRouter>);
  }
}

library.add(faSmile);
library.add(faMeh);
library.add(faFrown);
library.add(faCheck);


export default App;
