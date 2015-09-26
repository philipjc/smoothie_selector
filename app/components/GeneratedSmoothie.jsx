import React from 'react';

// Components ======================================
import IngredientCard from './IngredientCard.jsx'


class GeneratedSmoothie extends React.Component{
 constructor(props) {
   super(props);
 }

 render() {
   let { ingredientsCard } = this.props;
   console.log('GeneratedSmoothie Compo ingredients ', ingredientsCard);

   if (ingredientsCard) {
     return(
       <div className="section-mid__block">
         <IngredientCard ingredientsCard={ingredientsCard} />
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
