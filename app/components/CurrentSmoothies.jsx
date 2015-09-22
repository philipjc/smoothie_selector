import React from 'react';

import IngredientCard from './IngredientCard.jsx';

class CurrentSmoothies extends React.Component{
 constructor(props) {
   super(props);
 }

 render() {
   // perform logic in here to pass IngredientCard just an Object.
   console.log('from current IC pass in ', this.props.ingredients);
   // Passing the Array rather than props Object.
   return (
     <div className="section-mid__block">
       <IngredientCard ingredients={this.props.ingredients} />
     </div>
   );
 }
}

module.exports = CurrentSmoothies;
