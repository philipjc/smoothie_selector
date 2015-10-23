import React from 'react';

// Reflux ===================================================
import Actions from '../actions/SmoothieActions.js';

// Components ===============================================
import CardButtons from './parts/CardButtons.jsx';
import ReBlendButton from './parts/ReBlendButton.jsx';
import ListItem from './parts/ListItem.jsx';

const propTypes = {
  ingredientsCard: React.PropTypes.object,
  index: React.PropTypes.number,
  key: React.PropTypes.number
};

export default class IngredientCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedItems: []
    }

    this.saveCard = this.saveCard.bind(this);
    this.trashCard = this.trashCard.bind(this);
    this.handleCheckedItem = this.handleCheckedItem.bind(this);
    this.handleReplaceIngredients = this.handleReplaceIngredients.bind(this);
    this.renderEachIngredient = this.renderEachIngredient.bind(this);
  }

  saveCard() {
    let card = this.props.ingredientCard;
    Actions.saveThisCard(card);
  }

  trashCard() {
    let card = this.props.ingredientCard;
    let cardIndex = this.props.index;

    if (card.saved) {
      Actions.trashSavedCard(cardIndex);

    } else {
      Actions.trashGeneratedCard(cardIndex);
    }
  }

  handleCheckedItem(item, state) {
    let itemStr = item.trim();

    if (state) {
      let checkedItemsCopy = this.state.checkedItems;
      checkedItemsCopy.push(itemStr);
      this.setState({
        checkedItems: checkedItemsCopy
      });

    } else {
      let checkedItemsCopy = this.state.checkedItems;
      let idx = checkedItemsCopy.indexOf(itemStr);
      checkedItemsCopy.splice(idx, 1);
      this.setState({
        checkedItems: checkedItemsCopy
      });
    }
  }

  handleReplaceIngredients() {
    // reblend will need to remove the card array and replace with new.
    // Put all logic in Store? set checked items as property?
    let checkedItems = this.state.checkedItems;
    if (checkedItems.length === 4) {
      return;
    }
    let { ingredientCard, index } = this.props;
    let firstIngredient = ingredientCard.ingredients[0];

    let amount = 4 - (checkedItems.length);
    let type;
    firstIngredient === 'milk' ? type = 'fruit' : type = 'vegetable';
    Actions.replaceIngredients(type, amount, index, checkedItems);
  }

  renderEachIngredient(ingredientCard) {
    let ingredients = ingredientCard.ingredients;
    let isSaved = ingredientCard.saved;

    let items = ingredients.map((ingredient, index) => {
      return (
        <ListItem item={ingredient}
                  saved={isSaved}
                  itemChecked={this.handleCheckedItem}
                  key={index}
                  />
      );
    });
    return items;
  }

  // TODO Add CSS Object to style dynamic colors. Set default props?so don't ref twice.
  render() {
    let { ingredientCard, index } = this.props;
    let { type, liquid } = ingredientCard;
    let ingredientsList = this.renderEachIngredient(ingredientCard);
    let trashButton, reBlendButton;

    if (ingredientCard.saved) {
      trashButton = (
        <i className="fa fa-trash-o" onClick={this.trashCard}></i>
      );
    };

    if (this.state.checkedItems.length) {
      reBlendButton = (
        <ReBlendButton reblend={this.handleReplaceIngredients} />
      );
    }

    return (
      <div className="card">

        <div className="card__image">
          <div className={'card__image--type card__image--' + type}>
            <span>{trashButton}</span>
          </div>
        </div>

        <div className="card__header">
          <h2>{type}</h2>
        </div>

        <div className="card__list">
          <ul>
            <li className="card__list--ingredient">
              {liquid}
            </li>
            {ingredientsList}
          </ul>
        </div>

        <CardButtons name="save-card"
                     save={this.saveCard}
                     trash={this.trashCard}
        />

      { reBlendButton }

      </div>
    );
  }
}

IngredientCard.propTypes = propTypes;
