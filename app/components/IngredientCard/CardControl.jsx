import React from 'react';

// Reflux =====================================================================
import Actions from '../../actions/SmoothieActions.js';

// Components =================================================================
import ReBlendButton from './ReBlendButton.jsx';

const propTypes = {
  card: React.PropTypes.object,
  index: React.PropTypes.number,
  checkedItems: React.PropTypes.number,
  save: React.PropTypes.func,
  trash: React.PropTypes.func
};

export default class CardButtons extends React.Component {
 constructor(props) {
   super(props);

   this.renderReblendButton = this.renderReblendButton.bind(this);
 }

 /**
 *
 */
 renderReblendButton() {
   return (
     <ReBlendButton reblend={this.props.reblend} />
   );
 }

 render() {
   let reblendButton;

   if (this.props.checkedItems && !this.props.card.saved) {
     reblendButton = this.renderReblendButton();
   }

   return(
     <div className="card__buttons">
       <ul className={'card__buttons'}>
         <li className="btn"
             onClick={this.props.save}>
             <i className="fa fa-save"></i>
         </li>
         <li className="btn"
             onClick={this.props.trash}>
             <i className="fa fa-trash-o"></i>
         </li>
      </ul>
      { reblendButton }
     </div>
   );
 }
};

CardButtons.propTypes = propTypes;
