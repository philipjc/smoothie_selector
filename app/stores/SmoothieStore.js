'use strict';

import Reflux from 'reflux';
import Actions from '../actions/SmoothieActions.js';

import ingredients from '../constants.js';

let data = {
  ingredients
};

const SmoothieStore = Reflux.createStore({
  listenables: Actions,

  onFindIngredients(type) {

    type === 'mixed' ? this.multiSelect('mix') : this.typeSelect(type);
  },

  // TODO put in a helper module?
  singleSelect(type) {
    let newData = data.ingredients;

    if (type === 'fruit') {
      let fruit = newData.fruit;
    }

    // TODO loop through array and select items

    trigger();
  },

  multiSelect(type) {
    let newData = data.ingredients;

    // TODO loop through both arrays in object and select fruit and veg

    trigger();
  },

  typeSelect(type) {

    type === 'fruit' ? this.singleSelect('fruit') : this.singleSelect('veg');
  }

});

export default SmoothieStore;
