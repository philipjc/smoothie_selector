import React from 'react';
import Create from './Create';
import Login from './Login';

const propTypes = {
  flag: React.PropTypes.string.isRequired
};

export default class Access extends React.Component {
 constructor(props) {
   super(props);

   this.renderCreate = this.renderCreate.bind(this);
   this.renderLogin = this.renderLogin.bind(this);
 }

 renderCreate() {
   return (
     <div className="login-container">
       <Create />
     </div>
   );
 }

 renderLogin() {
   return (
     <div className="login-container">
       <Login />
     </div>
   );
 }

 render() {
   let flag = this.props.flag;
   let displayForm;
   flag === 'create' ? displayForm = this.renderCreate() : displayForm = this.renderLogin();

   return (
     <div>
       {displayForm}
     </div>
   );
 }
};

Access.propTypes = propTypes;
