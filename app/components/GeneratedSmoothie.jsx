import React from 'react';

// Components ======================================
import IngredientCard from './IngredientCard.jsx'

const propTypes = {
  ingredientsCard: React.PropTypes.array
};

export default class GeneratedSmoothie extends React.Component{
 constructor(props) {
   super(props);
 }

 render() {
   let cards = this.props.ingredientsCard.map((card, index) => {
     let count = index;
     return (
       <div className="section-mid__block--element">
         <IngredientCard ingredientCard={card} index={count} key={index} />
       </div>
     );
   });

   return (
     <div className="section-mid__block">
       { cards }
     </div>
   );
 }
}

GeneratedSmoothie.propTypes = propTypes;
