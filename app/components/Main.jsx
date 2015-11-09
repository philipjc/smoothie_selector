import React from 'react';

// Reflux Stores ===================================
import MainStore from '../stores/MainStore.js';

// Components ======================================
import GenerateSmoothie from './GenerateSmoothie.jsx'
import CardsDisplays from './CardsDisplays.jsx';

// TODO Find out what is poisonous - place warning. Rhubarb leaves!!!
const propTypes = {
  title: React.PropTypes.string.isRequired,
  logout: React.PropTypes.func.isRequired
};

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      type: '',
      amount: 0,
      liquid: '',
      extras: '',
      currentIngredientsCards: [],
      savedCards: []
    };

    this.handleMainStoreUpdate = this.handleMainStoreUpdate.bind(this);
    this.handleRenderString = this.handleRenderString.bind(this);
  }

  // To use the same Store, you can check a property, if found perform method.
  componentWillMount() {
    this.mainUnsubscribe = MainStore.listen(this.handleMainStoreUpdate);
  }

  componentWillUnmount() {
    this.mainUnsubscribe();
  }

  /**
  *
  */
  handleMainStoreUpdate(res) {
    this.handleRenderString();
    this.setState(res);
  }

  /**
  *
  */
  handleRenderString() {
    let { type, amount, liquid, extras } = this.state;
    let generated = '';
    if (type) {
      generated = `${type}?`;
    }
    if (type && amount) {
      generated = `${amount}, ${type} smoothie with?`;
    }
    if (type && amount && liquid) {
      generated = `${amount}, ${type} smoothie with ${liquid}`;
    }
    if (type && amount && liquid && extras) {
      generated = `${amount}, ${type} smoothie with ${liquid} and ${extras}`;
    }
    return generated;
  }

  /**
  *
  */
  render() {
    // TODO one variable for string. if true string = this text. if this && this string = this etc. in method?
    let { title, type, amount, liquid, extras, currentIngredientsCards, savedCards } = this.state;
    let dynamicString = this.handleRenderString();

    // let cards = GenerateSmoothieStore.storeData.cards;

    return (
      <div className="main-container">
        <div className="section-upper">
          <div className="section-upper__header">
            <h1 className="section-upper__header--title">{title}</h1>
            <div className="section-upper__header--logo">
              <img src="" alt="" />
            </div>
            <button onClick={this.props.logout}>logout</button>
          </div>

          <div className="section-upper__intro">
            <div className="section-upper__intro--heading">
              <h3>{ dynamicString }</h3>
            </div>
          </div>

          <GenerateSmoothie type={type}
                            amount={amount}
                            liquid={liquid}
                            extras={extras}
                            currentCards={currentIngredientsCards}
                            />
        </div>

        <div className="section-mid">
          <CardsDisplays cards={currentIngredientsCards} />

          <CardsDisplays cards={savedCards} />
        </div>

      </div>
    );
  }
};

Main.propTypes = propTypes;
