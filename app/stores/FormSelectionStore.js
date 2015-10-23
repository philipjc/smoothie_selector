'use strict';

import Reflux from 'reflux';
import Actions from '../actions/SmoothieActions.js';


const FormSelectionStore = Reflux.createStore({
  listenables: Actions,

  init() {
    this.data = {
      loading: false,
      type: '',
      amount: 0,
      liquid: ''
    }
  },

  onRequiredType(type) {
    if (!type) return;

    let newData = this.data;

    newData.type = type;

    this.trigger(type);
  },

  onRequiredAmount(amount) {
    if (!amount) return;

    let newData = this.data;

    newData.amount = amount;

    this.trigger(amount);
  },

  onRequiredLiquid(liquid) {
    if (!liquid) return;

    let newData = this.data;

    newData.liquid = liquid;

    this.trigger(liquid);
  }

});

export default FormSelectionStore;
