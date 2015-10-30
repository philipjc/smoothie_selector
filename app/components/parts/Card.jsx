import React from 'react';

import CardButtons from '../parts/CardButtons.jsx';
import ListItem from '../parts/ListItem.jsx';

const propTypes = {

};

export default class Card extends React.Component {
 constructor(props) {
   super(props);
   this.state = {

   }

   this.makeTrashButton = this.makeTrashButton.bind(this);
   this.makeReblendButton = this.makeReblendButton.bind(this);
   this.renderEachIngredient = this.renderEachIngredient.bind(this);
 }

 makeTrashButton() {
   return (
     <i className="fa fa-trash-o" onClick={this.trashCard}></i>
   );
 }

 makeReblendButton() {
   return (
     <ReBlendButton reblend={this.handleReplaceIngredients} />
   );
 }

 renderEachIngredient(ingredientCard) {
   let { ingredients, isSaved } = ingredientCard;

   let items = ingredients.map((ingredient, index) => {
     return (
       <ListItem item={ingredient}
                 saved={isSaved}
                 itemChecked={this.handleCheckedItem}
                 key={index}
                 />
     );
   });
   return items;
 }

 render() {
   let { card } = this.props;
   let { type, liquid } = card;
   let ingredientsList = this.renderEachIngredient(card);

   let trashButton, reBlendButton;

   if (card.saved) {
     trashButton = this.makeTrashButton();
   };

   if (this.props.checkedLength) {
     reBlendButton = this.makeReblendButton();
   }

   return(
     <div className="card">
       <div className="card__image">
         <div className={'card__image--type card__image--' + type}>
           <span>{trashButton}</span>
         </div>
       </div>
       <div className="card__header">
         <h2>{type}</h2>
       </div>
       <div className="card__list">
         <ul>
           <li className="card__list--ingredient">
             {liquid}
           </li>
           {ingredientsList}
         </ul>
       </div>

       <CardButtons name="save-card"
                    save={this.props.saveCard}
                    trash={this.props.trashCard}
                    />

      { reBlendButton }
     </div>
   );
 }
};

Card.propTypes = propTypes;
