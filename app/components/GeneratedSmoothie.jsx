import React from 'react';

// Components ======================================
import IngredientCard from './IngredientCard.jsx'


class GeneratedSmoothie extends React.Component{
 constructor(props) {
   super(props);
 }

 render() {
   let { ingredientsCard } = this.props;

   if (ingredientsCard) {
     return(
       <div className="section-mid__block">
         <div className="section-mid__block--element">
           <IngredientCard ingredientCard={ingredientsCard} />
          </div>
       </div>
     );
   } else {
     return (
       <div className="section-mid__block">
         <p>Get Blending!</p>
       </div>
     )
   }
 }
}

module.exports = GeneratedSmoothie;

GeneratedSmoothie.propTypes = {
  ingredientsCard: React.PropTypes.object
}
