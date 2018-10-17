
//Dependencies

import React, { Component } from 'react';
// import axios from 'axios';
import { FormErrors } from './FormErrors';
import { SocialIcon } from 'react-social-icons';
// import TextFieldGroup from '../../common/TextFieldGroup'
import PropTypes from 'prop-types';
import '../../styles/sign-up.css';
import API from '../../api';


class SignUpForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      username: '',
      nombre: '',
      apellido: '',
      email: '',
      password: '',
      confirmpassword: '',
      formErrors: {username: '', nombre: '', apellido: '', email: '', password: '', confirmpassword: ''},

      usernameValid: false,
      usernameNotExists: false,
      namesValid: false,
      lastnameValid: false,
      emailValid: false,
      emailNotExists: false,
      passwordValid: false,
      confirmpasswordValid: false,
      formValid: false,
      confirmPass: false
    }
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
                  () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {

    let fieldValidationErrors = this.state.formErrors;
    let usernameValid=this.state.usernameValid;
    let namesValid =this.state.namesValid;
    let lastnameValid =this.state.lastnameValid;
    let emailValid = this.state.emailValid;
    let emailNotExists = this.state.emailNotExists;
    let passwordValid = this.state.passwordValid;
    let confirmpasswordValid = this.state.confirmpasswordValid;

    switch(fieldName) {

      case 'username':

        API.post(`/api/users/user_exist`, { "username": this.state.username }).then(
          (res) => {this.state.usernameValid= true
            fieldValidationErrors.username = '' },
            (err) => {this.state.usernameValid= false
              fieldValidationErrors.username = 'Nombre de usuario ya existe'}
            );
      // fieldValidationErrors.username =  usernameValid ? '' : 'Nombre de usuario ya existe';

      break;

      case 'nombre':
      namesValid = value.length >= 2;
      fieldValidationErrors.nombre =  namesValid ? '' : 'Nombre invalido';
      break;


      case 'email':
      API.post(`/api/users/email_exist`, { "email": this.state.email })
      .then(
        (res) => {this.state.usernameValid= true
        fieldValidationErrors.emailNotExists = '' },
        (err) => {this.state.usernameValid= false
        fieldValidationErrors.emailNotExists = 'Email ya existe'}
      )

        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : 'Email invalido';
        break;

      case 'password':

        passwordValid = value.length >= 8;
        fieldValidationErrors.password = passwordValid ? '': 'Tu contrasena debe tener al menos 8 caracteres';

        confirmpasswordValid= (this.state.password===this.state.confirmpassword || passwordValid===false)
        fieldValidationErrors.confirmpassword = confirmpasswordValid ? '': 'Las contrasenas no coinciden';

        break;

      case 'confirmpassword':
      if(this.state.password===this.state.confirmpassword){
        confirmpasswordValid= true;
      }
      else{
        confirmpasswordValid=false;
      }
          fieldValidationErrors.confirmpassword = confirmpasswordValid ? '': 'Las contrasenas no coinciden';
          break;


      default:
        break;
    }


    this.setState({formErrors: fieldValidationErrors,
                    usernameValid: usernameValid,
                    namesValid: namesValid,
                    lastnameValid: lastnameValid,
                    emailValid: emailValid,
                    emailNotExists: emailNotExists,
                    passwordValid: passwordValid,
                    confirmpasswordValid: confirmpasswordValid
                  }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.usernameValid && this.state.namesValid && this.state.emailValid && this.state.emailNotExists && this.state.passwordValid && this.state.confirmpasswordValid});
  }


  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      username: this.state.username,
      name: this.state.nombre,
      lastname: this.state.apellido,
      email: this.state.email,
      password: this.state.password,
      city_id: 1
    };
    console.log(user);
    //
    // this.props.userSignupRequest({user});
    this.props.userSignupRequest({user}).then(
      (res) => this.context.router.history.push('/FragmentsPage'),
      (err) => console.log('')
    );
    // axios.post(`http://localhost:3000/api/signup`, { user })
    //   .then(res => {
    //     console.log(res);
    //     console.log(res.data);
    //   })
  }


  render () {
    return (

      <div className="col-sm-12" id = "Form">
      <form className="demoForm" onSubmit={this.handleSubmit}>
        <h2 className="SignUp-Title" >Crea tu cuenta</h2>


        <div className="panel panel-default">
          <FormErrors formErrors={this.state.formErrors} />
        </div>


        <div className={`form-group ${this.errorClass(this.state.formErrors.username)}`}>
          <label htmlFor="username">Usuario</label>

            <div className="input-group">


        <input type="text" required className="form-control" name="username"
            placeholder="Nombre de usuario"
            value={this.state.username}
            onChange={this.handleUserInput}  />
          </div>

        </div>


        <div className="form-group row">
          <div className="col-sm-6">
        <div className={`form-group ${this.errorClass(this.state.formErrors.nombre)}`}>
          <label htmlFor="nombre">Nombres</label>
        <input type="text" required className="form-control" name="nombre"
            placeholder="Nombres"
            value={this.state.nombre}
            onChange={this.handleUserInput}  />
        </div>
        </div>
          <div className="col-sm-6">
        <div className={`form-group ${this.errorClass(this.state.formErrors.apellido)}`}>
          <label htmlFor="nombre">Apellidos</label>
        <input type="text" required className="form-control" name="apellido"
            placeholder="Apellidos"
            value={this.state.apellido}
            onChange={this.handleUserInput}  />
        </div>
        </div>
        </div>


        <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
          <label htmlFor="email">Correo</label>
          <input type="email" required className="form-control" name="email"
            placeholder="Ingresa tu correo"
            value={this.state.email}
            onChange={this.handleUserInput}  />
        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
          <label htmlFor="password">Contraseña</label>
          <input type="password" className="form-control" name="password"
            placeholder="Ingresa tu contraseña"
            value={this.state.password}
            onChange={this.handleUserInput}  />
        </div>

        { this.state.passwordValid ?
          <div className={`form-group ${this.errorClass(this.state.formErrors.confirmpassword)}`}>
            <label htmlFor="confirmpassword">Repite tu contraseña</label>
          <input type="password" className="form-control" name="confirmpassword"
              placeholder="Repite tu contraseña"
              value={this.state.confirmpassword}
              onChange={this.handleUserInput}  />
          </div>


          : null }


      <div className="SignUp-Button">
        <button  type="submit" className="btn btn-primary" disabled={!this.state.formValid}>Registrarme</button>
        <br/>
        <h6></h6>
      <h6>O ingresa con tus redes sociales</h6> &nbsp;
        <br/>
        <h6></h6>
        <SocialIcon url="http://facebook.com/" /> &emsp;
        <SocialIcon url="http://twitter.com/" /> &emsp;
        <SocialIcon url="http://google.com/" /> &emsp;
      </div>
      </form>
    </div>

    )
  }
}

SignUpForm.propTypes = {
  userSignupRequest: PropTypes.func.isRequired
  // isUserExists: React.PropTypes.func.isRequired
}

SignUpForm.contextTypes = {
  router: PropTypes.object.isRequired
}

export default SignUpForm;
