import React from 'react';

// Components ======================================
import IngredientCard from './IngredientCard.jsx'


class GeneratedSmoothie extends React.Component{
 constructor(props) {
   super(props);
 }

 render() {
   let cards = this.props.ingredientsCard.map((card, index) => {
     let key = index;
     return (
       <div className="section-mid__block--element">
         <IngredientCard ingredientCard={card} index={index} key={key} />
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

module.exports = GeneratedSmoothie;

GeneratedSmoothie.propTypes = {
  ingredientsCard: React.PropTypes.array
}
