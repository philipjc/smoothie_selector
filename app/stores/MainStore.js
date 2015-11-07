'use strict';

import Reflux from 'reflux';
import Actions from '../actions/SmoothieActions.js';
import GenerateSmoothieStore from './GenerateSmoothieStore.js';
import FormSelectionStore from '../stores/FormSelectionStore.js';
import SavedSmoothieStore from '../stores/SavedSmoothieStore.js';


const MainStore = Reflux.createStore({
  listenables: Actions,

  /**
  *
  */
  init() {
    this.listenTo(GenerateSmoothieStore, this.updateCurrentCards);
    this.listenTo(FormSelectionStore, this.updateOptions);
    this.listenTo(SavedSmoothieStore, this.updateSavedCards);

    this.state = {
      type: '',
      amount: 0,
      liquid: '',
      extras: '',
      currentIngredientsCards: [],
      savedCards: []
    };
  },

  /**
  *
  */
  updateCurrentCards(data) {
    this.state.currentIngredientsCards = data || [];
    this.trigger(this.state);
  },

  /**
  *
  */
  updateOptions(data) {
    this.state.type = data.type || '';
    this.state.amount = data.amount || 0;
    this.state.liquid = data.liquid || '';
    this.state.extras = data.extras || '';
    this.trigger(this.state);
  },

  /**
  *
  */
  updateSavedCards(data) {
    this.state.savedCards = data || [];
    this.trigger(this.state);
  }

});

export default MainStore;
