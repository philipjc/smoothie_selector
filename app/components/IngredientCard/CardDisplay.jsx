import React from 'react';

// Reflux ===================================================
import Actions from '../../actions/SmoothieActions.js';
import CardStore from '../../stores/CardStore.js';

// Components ===================================================
import CardControl from './CardControl.jsx';
import ListItem from './ListItem.jsx';

const propTypes = {
  saveCard: React.PropTypes.func,
  trashCard: React.PropTypes.func,
  card: React.PropTypes.object,
  index: React.PropTypes.string
};

export default class Card extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
     checkedItems: []
   }

   this.handleCheckedItems = this.handleCheckedItems.bind(this);
   this.handleReplaceIngredients = this.handleReplaceIngredients.bind(this);

   this.renderCardControl = this.renderCardControl.bind(this);
   this.renderSavedCardTrashButton = this.renderSavedCardTrashButton.bind(this);
   this.renderEachIngredient = this.renderEachIngredient.bind(this);
 }

 /**
 * Populate checkedItems Array with ingredient name, IF ListItem state.
 * @param {item} String
 * @param {state} Boolean
 */
 handleCheckedItems(item, state) {
   let itemStr = item.trim();

   if (state) {
     let checkedItemsCopy = this.state.checkedItems;
     checkedItemsCopy.push(itemStr);
     this.setState({
       checkedItems: checkedItemsCopy
     });

   } else {
     let checkedItemsCopy = this.state.checkedItems;
     let idx = checkedItemsCopy.indexOf(itemStr);
     checkedItemsCopy.splice(idx, 1);
     this.setState({
       checkedItems: checkedItemsCopy
     });
   }
 }

 /**
 * IF not all checked, replace ticked.
 */
 handleReplaceIngredients() {
   // reblend will need to remove the card array and replace with new.
   // Put all logic in Store? set checked items as property?
   let checkedItems = this.state.checkedItems;
   if (checkedItems.length === 4) {
     return;
   }
   let { card, index } = this.props;
   let { type } = card;
   let amount = 4 - (checkedItems.length);

   Actions.replaceIngredients(type, amount, index, checkedItems);
 }

 /**
 *
 */
 renderSavedCardTrashButton() {
   return (
     <i className="fa fa-trash-o" onClick={this.props.trashCard}></i>
   );
 }

 /**
 *
 */
 renderEachIngredient(ingredientCard) {
   console.log(ingredientCard);
   let { ingredients, isSaved } = ingredientCard;

   let items = ingredients.map((ingredient, index) => {
     return (
       <ListItem
         card={this.props.card}
         item={ingredient}
         saved={isSaved}
         itemChecked={this.handleCheckedItems}
         key={index}
        />
     );
   });
   return items;
 }

 renderCardControl() {
   let checkedItemsLength = this.state.checkedItems.length;

   return (
     <CardControl
       card={this.props.card}
       index={this.props.index}
       save={this.props.saveCard}
       trash={this.props.trashCard}
       checkedItems={checkedItemsLength}
       reblend={this.handleReplaceIngredients}
       />
   );
 }

 render() {
   let { card, index } = this.props;
   let { type, liquid } = card;
   let trashButton, renderCardControls, savedClass = '';

   let ingredientsList = this.renderEachIngredient(card);

   if (card.saved) {
     savedClass = '-saved';
     trashButton = this.renderSavedCardTrashButton();
   };

   if (!card.saved) {
     renderCardControls = this.renderCardControl();
   };

   return (
     <div className={'card' + savedClass}>
       <div className="card__image">
         <div className={'card__image--type card__image--' + type}>
           <span>
             { trashButton }
           </span>
         </div>
       </div>
       <div className="card__header">
         <h2>
           { type }
         </h2>
       </div>
       <div className="card__list">
         <ul>
           <li className="card__list--ingredient-type">
             { liquid }
           </li>
         </ul>
         { ingredientsList }
       </div>

       { renderCardControls }

     </div>
   );
 }
};

Card.propTypes = propTypes;
