'use strict';

import Reflux from 'reflux';
import Actions from '../actions/SmoothieActions.js';


const CardStore = Reflux.createStore({
  listenables: Actions,

  /**
  *
  */
  init() {
    this.state = {
      checkedItems: []
    };
  },

  /**
  *
  */
  onCheckCardItem() {

    this.trigger();
  }

});

export default CardStore;
