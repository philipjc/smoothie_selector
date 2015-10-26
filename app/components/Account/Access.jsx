import React from 'react';
import LoginForm from './LoginForm';

const propTypes = {
  flag: React.PropTypes.string.isRequired
};

export default class Access extends React.Component {
 constructor(props) {
   super(props);
   this.state = {

   }

   this.createUserHandler = this.createUserHandler.bind(this);
   this.renderCreate = this.renderCreate.bind(this);
   this.renderLogin = this.renderLogin.bind(this);
 }

 createUserHandler(name, pw) {
   this.props.createUser(name, pw);
 }

 renderCreate() {
   return (
     <div className="login-container">
       <LoginForm createUser={this.createUserHandler} user={this.props.user} />
     </div>
   );
 }

// TODO add form to just enter pw to temp sessionStorage
 renderLogin() {
   return (
     <div className="login-container">
       <p>Login form here</p>
     </div>
   );
 }

 render() {
   let flag = this.props.flag;
   let displayForm;
   if (flag === 'create') {
      displayForm = this.renderCreate();

   } else {
     displayForm = this.renderLogin();
   }

   return (
     <div>
       {displayForm}
     </div>
   );
 }
};

Access.propTypes = propTypes;
