'use strict';

import Reflux from 'reflux';
import Actions from '../actions/SmoothieActions.js';

let data = {
  loading: false,
  type: ''
}

const TypeSelectionStore = Reflux.createStore({
  listenables: Actions,

  onRequiredType(type) {
    if (!type) return;

    let newData = data;

    newData.type = type;

    this.trigger(type);
  }

});

export default TypeSelectionStore;
