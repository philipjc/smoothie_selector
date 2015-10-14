import React from 'react';

import Input from './parts/Input.jsx';

const propTypes = {

};

export default class Form extends React.Component{
 constructor(props) {
   super(props);
   this.state = {

   }
 }

 renderInputs() {
   let { formConfig } = this.props;
   let { name, type, values } = formConfig;
   let inputs = values.map((value) => {
     return (
       <Input type={type} name={name} value={value} />
      );
   });
   return inputs;
 }

 render() {
   let inputs = this.renderInputs();

   return(
     <div className="section-upper__form-block">
       <form>
         <div className="section-upper__form--inputs">
           {inputs}
         </div>
       </form>
     </div>
   );
 }
}

Form.propTypes = propTypes;
