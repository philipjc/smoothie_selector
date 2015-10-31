import React from 'react';

// Components ======================================
import IngredientCard from './IngredientCard.jsx';

const propTypes = {
  savedCards: React.PropTypes.array
};

export default class SavedSmoothies extends React.Component {
  constructor(props) {
  super(props);

  this.renderSavedCards = this.renderSavedCards.bind(this);
  }

  /**
  *
  */
  renderSavedCards() {
    let cards = this.props.savedCards.map((card, index) => {
      let count = index;
      return (
        <div className="section-mid__block--element">
          <IngredientCard ingredientCard={card} index={count} key={card.name} />
        </div>
      );
    });
    return cards;
  }

  render() {
    let cards = this.renderSavedCards();

    return (
      <div className="section-mid__block">
        {cards}
      </div>
    );
  }
};

SavedSmoothies.propTypes = propTypes;
