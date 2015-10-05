'use strict';

import Reflux from 'reflux';
import Actions from '../actions/SmoothieActions.js';

let data = {
  loading: false,
  type: '',
  amount: 0
}

const TypeSelectionStore = Reflux.createStore({
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
  }

});

export default TypeSelectionStore;
