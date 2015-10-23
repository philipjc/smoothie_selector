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

  onRequiredType(type) {
    if (!type) return;
    this.data.type = type;
    this.trigger(this.data);
  },

  onRequiredAmount(amount) {
    if (!amount) return;
    this.data.amount = amount;
    this.trigger(this.data);
  },

  onRequiredLiquid(liquid) {
    if (!liquid) return;
    this.data.liquid = liquid;
    this.trigger(this.data);
  }

});

export default FormSelectionStore;
