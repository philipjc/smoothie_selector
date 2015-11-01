import React from 'react';
import classnames from 'classnames';


const propTypes = {
  item: React.PropTypes.string,
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

 render() {
   let { item, saved } = this.props;

   let checked = this.state.checked;
   let checkClasses = classnames('fa', {
     'fa fa-check': checked
   });

   let mouseOver = this.state.mouseOver;
   let mouseOverClasses = classnames('fa', {
     'fa fa-check fa-check-opac': mouseOver
   });

   let mouseClasses = `${checkClasses} ${mouseOverClasses}`;

   if (!saved) {
     return (
       <li className="card__list--ingredient"
           onMouseOver={this.handleItemMouseOver}
           onMouseOut={this.handleItemMouseOver}
           onClick={this.handleItemCheck}>
         {item} <i className={mouseClasses}></i>
       </li>
     );
   } else {
     return (
       <li className="card__list--ingredient">
         {item}
       </li>
     );
   }
 }
}

ListItem.propTypes = propTypes;
