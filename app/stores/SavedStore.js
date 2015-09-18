'use strict';

import Reflux from 'reflux';
import Actions from '../actions/SmoothieActions.js';

// card: {
//   saved: true,
//   ingredients: []
// }

let data = {
  cards: []
}

const SavedStore = Reflux.createStore({
  listenables: Actions,

  onSaveThisCard(data) {
    console.log('from save store ', data);

    this.trigger(data);
  }

});

export default SavedStore;
