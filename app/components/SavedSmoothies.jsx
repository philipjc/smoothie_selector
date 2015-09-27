import React from 'react';

// Components ======================================
import IngredientCard from './IngredientCard.jsx';

class SavedSmoothies extends React.Component {
  constructor(props) {
  super(props);
  }


  // TODO Want to displap multi Cards? .map ingredientsCard
  // TODO Need to get saved and current to pass the same structure to IngredientCard.
  // TODO On every n cards return with a element with block css for new row.
  render() {
    console.log('saved props ',this.props.savedCards);
    let cards = this.props.savedCards.map(card => {
      return (
        <div className="section-mid__block--element">
          <IngredientCard ingredientsCard={card} />
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
