import React from 'react';

// Components ======================================
import IngredientCard from './IngredientCard/IngredientCard.jsx'

const propTypes = {
  currentIngredientsCards: React.PropTypes.array
};

export default class GeneratedSmoothie extends React.Component{
 constructor(props) {
   super(props);
 }

 /**
 *
 */
 renderCards() {
   let cards = this.props.currentIngredientsCards.map((card, index) => {
     let count = index;
     return (
       <div className="section-mid__block--element">
         <IngredientCard ingredientCard={card} index={count} key={index} />
       </div>
     );
   });
   return cards;
 }

 render() {
   let cards = this.renderCards();

   return (
     <div className="section-mid__block">
       { cards }
     </div>
   );
 }
}

GeneratedSmoothie.propTypes = propTypes;
