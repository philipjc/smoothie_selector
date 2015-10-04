'use strict';

import Reflux from 'reflux';

const Actions = Reflux.createActions([
  'findIngredients',
  'requiredType',
  'saveThisCard',
  'trashSavedCard',
  'trashGeneratedCard'
]);

export default Actions;
