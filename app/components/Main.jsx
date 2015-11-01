import React from 'react';

// Reflux Stores ===================================
import GenerateSmoothieStore from '../stores/GenerateSmoothieStore.js';
import FormSelectionStore from '../stores/FormSelectionStore.js';
import SavedSmoothieStore from '../stores/SavedSmoothieStore.js';

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

    this.handleGenerateStoreUpdate = this.handleGenerateStoreUpdate.bind(this);
    this.handleSavedSmoothieStoreUpdate = this.handleSavedSmoothieStoreUpdate.bind(this);
    this.handleFormSelectionStore = this.handleFormSelectionStore.bind(this);
  }

  // To use the same Store, you can check a property, if found perform method.
  componentWillMount() {
    this.generateUnsubscribe = GenerateSmoothieStore.listen(this.handleGenerateStoreUpdate);
    this.saveUnsubscribe = SavedSmoothieStore.listen(this.handleSavedSmoothieStoreUpdate);
    this.formUnSubscribe = FormSelectionStore.listen(this.handleFormSelectionStore);
  }

  componentWillUnmount() {
    this.generateUnsubscribe();
    this.saveUnsubscribe();
    this.formUnSubscribe();
  }

  /**
  *
  */
  handleGenerateStoreUpdate(res) {
    this.setState({
      currentIngredientsCards: res
    })
  }

  /**
  *
  */
  handleSavedSmoothieStoreUpdate(res) {
    this.setState({
      savedCards: res
    });
  }

  /**
  *
  */
  handleFormSelectionStore(res) {
    this.setState({
      type: res.type,
      amount: res.amount,
      liquid: res.liquid,
      extras: res.extras
    });
  }

  /**
  *
  */
  render() {
    // TODO one variable for string. if true string = this text. if this && this string = this etc
    let { title, type, amount, liquid, extras, savedCards } = this.state;
    let typeString = type ? `${type} smoothies `: ``;
    let amountString = amount ? `${amount}, `: ``;
    let liquidString;
    liquid ? liquidString = `with ${liquid}` : liquidString = '';

    let cards = GenerateSmoothieStore.storeData.cards;

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
                            currentCards={cards}
                            />
        </div>

        <div className="section-mid">
          <GeneratedSmoothie currentIngredientsCards={cards} />

          <SavedSmoothies savedCards={savedCards} />
        </div>

      </div>
    );
  }
};

Main.propTypes = propTypes;
