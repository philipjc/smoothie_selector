'use strict';

import Reflux from 'reflux';
import Actions from '../actions/SmoothieActions.js';


const UserStore = Reflux.createStore({
  listenables: Actions,

  init() {
    this.user = {
      name: '',
      pw: ''
    }
  },

  onUpdateUserDetails(user) {
    console.log('from user store ', user);
    this.user.name = user.name;
    this.user.pw = user.pw;

    this.sendUser();
  },

  onsomeotherAction() {

    this.sendUser
  },

  sendUser() {
    this.trigger(this.user);
  }

});

export default UserStore;
