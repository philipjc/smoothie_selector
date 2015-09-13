'use strict';

import Reflux from 'reflux'
import Actions from '../actions/SmoothieActions';

let data = {

};

const SmoothieStore = Reflux.createStore({
  listenables: Actions,

  onFindIngredients(search) {
    if (!search) return;

    this.trigger(search);
  }

});

export default SmoothieStore;
