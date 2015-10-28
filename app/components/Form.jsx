import React from 'react';

import Actions from '../actions/SmoothieActions.js';

import Square from './parts/Square.jsx';

const propTypes = {
  formConfig: React.PropTypes.object
};

export default class Form extends React.Component{
 constructor(props) {
   super(props);

   this.formHandler = this.formHandler.bind(this);
   this.renderSquares = this.renderSquares.bind(this);
 }

 formHandler(e) {
   let formField = this.props.formConfig.name;
   let selection = e.target.textContent;
   Actions.updateForm(formField, selection);
   this.setState({
     [formField]: selection
   });
 }

 renderSquares(names) {
   let render = names.map(name => {
     return (
       <Square name={name} onClick={this.formHandler} />
     )
   });
   return render;
 }

 render() {

   let display = this.renderSquares(this.props.formConfig.values);

   return (
     <div className="section-upper__form-block">
       {display}
     </div>
   );
 }
}

Form.propTypes = propTypes;
