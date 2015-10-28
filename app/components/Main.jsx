import React from 'react';

// Reflux Stores ===================================
import GenerateSmoothieStore from '../stores/GenerateSmoothieStore.js';
import FormSelectionStore from '../stores/FormSelectionStore.js';
import SavedStore from '../stores/SavedStore.js';

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
      currentIngredientsCards: [],
      savedCards: []
    }

    this.handleGenerateStoreUpdate = this.handleGenerateStoreUpdate.bind(this);
    this.handleSavedStoreUpdate = this.handleSavedStoreUpdate.bind(this);
    this.handleFormSelectionStore = this.handleFormSelectionStore.bind(this);
  }

  // To use the same Store, you can check a property, if found perform method.
  componentWillMount() {
    this.generateUnsubscribe = GenerateSmoothieStore.listen(this.handleGenerateStoreUpdate);
    this.saveUnsubscribe = SavedStore.listen(this.handleSavedStoreUpdate);
    this.formUnSubscribe = FormSelectionStore.listen(this.handleFormSelectionStore);
  }

  componentWillUnmount() {
    this.generateUnsubscribe();
    this.saveUnsubscribe();
    this.formUnSubscribe();
  }

  handleGenerateStoreUpdate(res) {
    this.setState({
      currentIngredientsCards: res
    })
  }

  handleSavedStoreUpdate(res) {
    this.setState({
      savedCards: res
    });
  }

  handleFormSelectionStore(res) {
    this.setState({
      type: res.type,
      amount: res.amount,
      liquid: res.liquid
    });
  }

  render() {
    let { title, type, amount, liquid, currentIngredientsCards, savedCards } = this.state;
    let typeString = type ? `${type} smoothies `: ``;
    let amountString = amount ? `${amount}, `: ``;
    let liquidString;
    liquid ? liquidString = `with ${liquid}` : liquidString = '';

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
                            currentCards={currentIngredientsCards}
                            />
        </div>

        <div className="section-mid">
          <GeneratedSmoothie currentIngredientsCards={currentIngredientsCards} />

          <SavedSmoothies savedCards={savedCards} />
        </div>

      </div>
    );
  }
};

Main.propTypes = propTypes;
