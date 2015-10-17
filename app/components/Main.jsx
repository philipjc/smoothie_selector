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
  title: React.PropTypes.string
};

const defaultProps = {
  title: 'Smoothie Selector. What Do you fancy?'
};

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      type: '',
      amount: 0,
      liquid: '',
      ingredientsCard: [],
      savedCards: []
    }

    this.handleGenerateStoreUpdate = this.handleGenerateStoreUpdate.bind(this);
    this.handleSavedStoreUpdate = this.handleSavedStoreUpdate.bind(this);
    this.handleFormSelectionStore = this.handleFormSelectionStore.bind(this);
  }

  // To use the same Store, you can check a property, if found perform method.
  componentWillMount() {
    this.GenerateUnsubscribe = GenerateSmoothieStore.listen(this.handleGenerateStoreUpdate);
    this.saveUnsubscribe = SavedStore.listen(this.handleSavedStoreUpdate);
    this.formUnSubscribe = FormSelectionStore.listen(this.handleFormSelectionStore);
  }

  componentWillUnmount() {
    this.GenerateUnsubscribe();
    this.saveUnsubscribe();
    this.formUnSubscribe();
  }

  handleGenerateStoreUpdate(res) {
    this.setState({
      ingredientsCard: res
    })
  }

  handleSavedStoreUpdate(res) {
    this.setState({
      savedCards: res
    });
  }

  handleFormSelectionStore(res) {
    console.log('handleFormSelectionStore', res);
    if (res === 'fruit' || res === 'vegetable' || res === 'mixed') {
      this.setState({
        type: res
      });

    } else if (res === 'water' || res === 'milk' || res === 'juice') {
      this.setState({
        liquid: res
      });

    } else if (typeof res === 'number') {
      this.setState({
        amount: res
      });
    }
  }

  render() {
    let { title, type, amount, liquid, ingredientsCard, savedCards } = this.state;
    let typeString = type ? `${type} smoothies `: ``;
    let amountString = amount ? `${amount}, `: ``;
    let liquidString = `with ${liquid}`;

    return (
      <div className="main-container">
        <div className="section-upper">
          <div className="section-upper__header">
            <h1 className="section-upper__header--title">{title}</h1>
            <div className="section-upper__header--logo">
              <img src="" alt="" />
            </div>
          </div>

          <div className="section-upper__intro">
            <div className="section-upper__intro--heading">
              <h3>{amountString + typeString + liquidString}</h3>
            </div>
          </div>

          <GenerateSmoothie type={type} amount={amount} liquid={liquid} />
        </div>

        <div className="section-mid">
          <GeneratedSmoothie ingredientsCard={ingredientsCard} />

          <SavedSmoothies savedCards={savedCards} />
        </div>

      </div>
    );
  }
}

Main.propTypes = propTypes;
Main.defaultProps = defaultProps;
