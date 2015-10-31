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
   this.renderOptionBlock = this.renderOptionBlock.bind(this);
 }

 /**
 *
 */
 formHandler(e) {
   let formField = this.props.formConfig.name;
   let selection = e.target.textContent;
   Actions.updateForm(formField, selection);
   this.setState({
     [formField]: selection
   });
 }

 /**
 *
 */
 renderOptionBlock(names) {
   let render = names.map(name => {
     return (
       <Square name={name} onClick={this.formHandler} />
     );
   });
   return render;
 }

 render() {
   let type = this.props.formConfig.name;
   let display = this.renderOptionBlock(this.props.formConfig.values);

   return (
     <div className="section-upper__form--col">
       <span className="col-title">
         { type }
       </span>

       { display }
     </div>
   );
 }
}

Form.propTypes = propTypes;
