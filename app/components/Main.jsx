import React from 'react';

// Reflux Stores ===================================
import MainStore from '../stores/MainStore.js';

// Components ======================================
import GenerateSmoothie from './GenerateSmoothie.jsx'
import GeneratedSmoothie from './GeneratedSmoothie.jsx';
import SavedSmoothies from './SavedSmoothies.jsx';

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
    this.setState(res);
  }

  /**
  *
  */
  render() {
    // TODO one variable for string. if true string = this text. if this && this string = this etc. in method?
    let { title, type, amount, liquid, extras, savedCards } = this.state;
    let typeString = type ? `${type} smoothies `: ``;
    let amountString = amount ? `${amount}, `: ``;
    let liquidString;
    liquid ? liquidString = `with ${liquid}` : liquidString = '';

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
              <h3>{amountString + typeString + liquidString}</h3>
            </div>
          </div>

          <GenerateSmoothie type={type}
                            amount={amount}
                            liquid={liquid}
                            extras={extras}
                            currentCards={this.state.currentIngredientsCards}
                            />
        </div>

        <div className="section-mid">
          <GeneratedSmoothie currentIngredientsCards={this.state.currentIngredientsCards} />

          <SavedSmoothies savedCards={savedCards} />
        </div>

      </div>
    );
  }
};

Main.propTypes = propTypes;
