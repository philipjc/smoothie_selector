'use strict';

import Reflux from 'reflux';

const Actions = Reflux.createActions([
  'findIngredients',
  'saveThisCard',
  'updateForm',
  'trashSavedCard',
  'trashGeneratedCard',
  'replaceIngredients',
  'updateUserDetails',
  'checkCardItem'
]);

export default Actions;
