import React from 'react';

import IngredientCard from './IngredientCard.jsx';

class SavedSmoothies extends React.Component {
 constructor(props) {
   super(props);

   this.renderCards = this.renderCards.bind(this);
 }

 renderCards(cards) {
   let items = cards.map((card, index) => {
     return (
       <IngredientCard ingredients={card} />
     );
   });
   return items;
 }

 render() {
   let { cards } = this.props;
   let cardsDisplay = this.renderCards(cards);

   return(
     <div>
       {cardsDisplay}
     </div>
   );
 }
}

module.exports = SavedSmoothies;
