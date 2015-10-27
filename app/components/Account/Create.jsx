import React from 'react';

import Actions from '../../actions/SmoothieActions.js';

const propTypes = {

};

export default class LoginForm extends React.Component {
 constructor(props) {
   super(props);
   this.state = {

   }
   this.createUser = this.createUser.bind(this);
   this.nameHandler = this.nameHandler.bind(this);
   this.passwordHandler = this.passwordHandler.bind(this);
 }

 nameHandler(e) {
   let name = e.target.value
   this.setState({
     name: name
   });
 }

 passwordHandler(e) {
   let pw = e.target.value
   this.setState({
     pw: pw
   });
 }

 createUser(e) {
   e.preventDefault();
   this.setState({
     name: '',
     pw: ''
   });
   Actions.updateUserDetails(this.state);
 }

 render() {
   return(
     <div className="login-container__form">
       <div className="login-container__form--header">
         <h1>Create Account</h1>
       </div>
       <div className="login-container__form--row">
         <input type="text" onChange={this.nameHandler} value={this.state.name} />
       </div>
       <div className="login-container__form--row">
         <input type="password" onChange={this.passwordHandler} value={this.state.pw} />
       </div>
       <div className="login-container__form--row">
         <button type="button" onClick={this.createUser}>Create</button>
       </div>
     </div>
   );
 }
};

LoginForm.propTypes = propTypes;
