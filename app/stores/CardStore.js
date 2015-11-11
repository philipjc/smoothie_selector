'use strict';

import Reflux from 'reflux';
import Actions from '../actions/SmoothieActions.js';


const CardStore = Reflux.createStore({
  listenables: Actions,

  // TODO When cardStore is active, can place card control in ingredientCard.

  /**
  *
  */
  init() {

  },

  /**
  *
  */
  onCardStoreSomething() {

    this.trigger();
  }

});

export default CardStore;
