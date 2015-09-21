import React from 'react';

import IngredientCard from './IngredientCard.jsx';

class CurrentSmoothies extends React.Component{
 constructor(props) {
   super(props);
 }

 render() {
   console.log(this.props);

   // Passing the Array rather than props Object.
   return (
     <div className="section-mid__block">
       <IngredientCard ingredients={this.props.ingredients} />
     </div>
   );
 }
}

module.exports = CurrentSmoothies;
