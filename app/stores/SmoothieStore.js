'use strict';

import Reflux from 'reflux';
import Actions from '../actions/SmoothieActions.js';

let data = {
  fruit: ['apple'],
  veg: ['carrot']
};

const SmoothieStore = Reflux.createStore({
  listenables: Actions,

  onFindIngredients(type) {
    if (!type) { return };

    let result;

    type === 'fruit' ? result = this.findFruit() : result = this.findVeg();

    this.trigger(result);
  },

  // TODO put in a helper module?
  findFruit() {
    return data.fruit;
  },

  findVeg() {
    return data.veg;
  },

  onRequiredType(type) {
    if (!type) return;

    this.trigger(type);
  }

});

export default SmoothieStore;
