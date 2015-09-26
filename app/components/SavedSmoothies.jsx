import React from 'react';

import IngredientCard from './IngredientCard.jsx';

class SavedSmoothies extends React.Component {
 constructor(props) {
   super(props);

   this.renderCards = this.renderCards.bind(this);
 }

 renderCards(cards) {
   let item;
   cards.forEach((card, index) => {
     console.log('each card from saved ', card);
     item = <IngredientCard ingredients={card} />
   });
   return item;
 }

 // TODO Want to displap multi Cards? .map ingredientsCard 
 // TODO Need to get saved and current to pass the same structure to IngredientCard.
 render() {
   let cards = this.props.cards;
   console.log('from saved smoothies ', this.props);
   let cardsDisplay = this.renderCards(cards);

   return (
     <div>
       {cardsDisplay}
     </div>
   );
 }
}

module.exports = SavedSmoothies;
