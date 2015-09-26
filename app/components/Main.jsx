import React from 'react';

// Reflux Stores ===================================
import GenerateSmoothieStore from '../stores/GenerateSmoothieStore.js';
import TypeSelectionStore from '../stores/TypeSelectionStore.js';
import SavedStore from '../stores/SavedStore.js';

// Components ======================================
import GenerateSmoothie from './GenerateSmoothie.jsx'
import GeneratedSmoothie from './GeneratedSmoothie.jsx';

// TODO Find out what is poisonous - place warning. Rhubarb leaves!!!

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      type: '',
      ingredientsCard: '',
      savedCards: []
    }

    this.handleGenerateStoreUpdate = this.handleGenerateStoreUpdate.bind(this);
    this.handleSavedStoreUpdate = this.handleSavedStoreUpdate.bind(this);
    this.handleTypeStore = this.handleTypeStore.bind(this);
  }

  componentWillMount() {
    this.GenerateUnsubscribe = GenerateSmoothieStore.listen(this.handleGenerateStoreUpdate);
    this.saveUnsubscribe = SavedStore.listen(this.handleSavedStoreUpdate);
    let typeUnSubscribe = TypeSelectionStore.listen(this.handleTypeStore);
  }

  componentWillUnmount() {
    this.GenerateUnsubscribe();
    this.saveUnsubscribe();
    this.typeUnSubscribe();
  }

  handleGenerateStoreUpdate(res) {
    console.log('Main handle create card ', res);
    this.setState({
      ingredientsCard: res
    })
  }

  handleSavedStoreUpdate(res) {
    console.log('Main handle saved cards ', res);
  }

  handleTypeStore(res) {
    console.log('Main handle type change ', res);
    this.setState({
      type: res
    });
  }

  render() {
    let { title, type, ingredientsCard, savedCards } = this.state;
    console.log('Destructored type ', type);
    console.log('Destructored ingredientsCard ', ingredientsCard);

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
              <h3>What Do you fancy Today?</h3>
            </div>
          </div>
        </div>

        <div className="section-mid">
          <GenerateSmoothie type={type} />

          <GeneratedSmoothie ingredientsCard={ingredientsCard} />
        </div>

      </div>
    );
  }
}

Main.propTypes = { title: React.PropTypes.string };
Main.defaultProps = { title: 'Smoothie Selector' };
