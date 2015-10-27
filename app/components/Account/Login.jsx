import React from 'react';

import Actions from '../../actions/SmoothieActions.js';
import UserStore from '../../stores/UserStore.js';

const propTypes = {

};

export default class Login extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
     name: 'Philip'
   }

   this.loginUser = this.loginUser.bind(this);
   this.passwordHandler = this.passwordHandler.bind(this);
   this.handleUpdateUser = this.handleUpdateUser.bind(this);
 }

 componentWillMount() {
   this.handleUserUnsubscribe = UserStore.listen(this.handleUpdateUser);
 }

 componentWillUnmount() {
   this.handleUserUnsubscribe();
 }

 handleUpdateUser(user) {
   this.setState({
     name: user.name
   });
 }

 passwordHandler(e) {
   let pw = e.target.value
   this.setState({
     pw: pw
   });
 }

 loginUser(e) {
   e.preventDefault();
   this.setState({
     pw: ''
   });
   Actions.updateUserDetails(this.state);
 }

 render() {
   return (
     <div className="login-container__form">
       <div className="login-container__form--header">
         <h1>Login, {this.state.name}</h1>
       </div>
       <div className="login-container__form--row">
         <input type="password" onChange={this.passwordHandler} value={this.state.pw} />
       </div>
       <div className="login-container__form--row">
         <button type="button" onClick={this.loginUser}>Enter</button>
       </div>
     </div>
   );
 }
};

Login.propTypes = propTypes;
