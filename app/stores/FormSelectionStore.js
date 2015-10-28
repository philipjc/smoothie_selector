'use strict';

import Reflux from 'reflux';
import Actions from '../actions/SmoothieActions.js';


const FormSelectionStore = Reflux.createStore({
  listenables: Actions,

  init() {
    this.loading = false;

    this.data = {
      type: '',
      amount: 0,
      liquid: ''
    }
  },

  onUpdateForm(type, selection) {
    if (!type) return;
    this.data[type] = selection;
    this.trigger(this.data);
  }

});

export default FormSelectionStore;
