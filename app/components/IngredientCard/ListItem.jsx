import React from 'react';
import classnames from 'classnames';


const propTypes = {
  card: React.PropTypes.object,
  item: React.PropTypes.string,
  saved: React.PropTypes.bool,
  itemChecked: React.PropTypes.bool,
  key: React.PropTypes.number
};

export default class ListItem extends React.Component{
 constructor(props) {
   super(props);
   this.state = {
     checked: false,
     mouseOver: false
   }

   this.handleItemCheck = this.handleItemCheck.bind(this);
   this.handleItemMouseOver = this.handleItemMouseOver.bind(this);
   this.renderSavedItem = this.renderSavedItem.bind(this);
   this.renderUnsavedItem = this.renderUnsavedItem.bind(this);
   this.handleReblendUncheck = this.handleReblendUncheck.bind(this);
 }

 handleReblendUncheck() {
   this.setState({
     checked: false
   });
 }

 handleItemCheck(e) {
   if (this.props.card.saved) { return; }
   let item = e.target.innerText;
   let state = !this.state.checked;

   this.setState({
     checked: state
   });
   this.props.itemChecked(item, state);
 }

 handleItemMouseOver() {
   if (this.props.card.saved) { return; }

   let state = !this.state.mouseOver;

   this.setState({
     mouseOver: state
   });
 }

 renderSavedItem() {
   let { item } = this.props;
   return (
     <li className="card__list--ingredient">
       {item}
     </li>
   );
 }

 renderUnsavedItem() {
   let checked = this.state.checked;
   let checkClasses = classnames('fa', {
     'fa fa-check': checked
   });

   let mouseOver = this.state.mouseOver;
   let mouseOverClasses = classnames('fa', {
     'fa fa-check fa-check-opac': mouseOver
   });

   let mouseClasses = `${checkClasses} ${mouseOverClasses}`;

   let { item } = this.props;
   return (
     <li className="card__list--ingredient"
         onMouseOver={this.handleItemMouseOver}
         onMouseOut={this.handleItemMouseOver}
         onClick={this.handleItemCheck}>
       {item} <i className={mouseClasses}></i>
     </li>
   );
 }

 render() {
   let { saved } = this.props;
   let item;

   saved ? item = this.renderSavedItem() : item = this.renderUnsavedItem();

   return (
     <ul>
       { item }
     </ul>
   );
 }
}

ListItem.propTypes = propTypes;
