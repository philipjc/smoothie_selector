import React from 'react';

// Components ======================================
import IngredientCard from './IngredientCard.jsx';

class SavedSmoothies extends React.Component {
  constructor(props) {
  super(props);
  }


  // TODO Want to display multi Cards? .map ingredientsCard
  // TODO On every n cards return with a element with block css for new row?
  render() {
    let cards = this.props.savedCards.map((card, index) => {
      let key = index;
      return (
        <div className="section-mid__block--element">
          <IngredientCard ingredientCard={card} index={index} key={key}/>
        </div>
      );
    });

    return (
      <div className="section-mid__block">
        {cards}
      </div>
    );
  }
}

module.exports = SavedSmoothies;
