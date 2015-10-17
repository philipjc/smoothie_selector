'use strict';

import Reflux from 'reflux';
import Actions from '../actions/SmoothieActions.js';

let data = {
  loading: false,
  type: '',
  amount: 0,
  liquid: ''
}

const FormSelectionStore = Reflux.createStore({
  listenables: Actions,

  onRequiredType(type) {
    if (!type) return;

    let newData = data;

    newData.type = type;

    this.trigger(type);
  },

  onRequiredAmount(amount) {
    if (!amount) return;

    let newData = data;

    newData.amount = amount;

    this.trigger(amount);
  },

  onRequiredLiquid(liquid) {
    if (!liquid) return;

    let newData = data;

    newData.liquid = liquid;

    this.trigger(liquid);
  }

});

export default FormSelectionStore;
