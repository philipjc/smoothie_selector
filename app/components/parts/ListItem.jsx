import React from 'react';

class ListItem extends React.Component{
 constructor(props) {
   super(props);
 }

 render() {
   let { item } = this.props;
   return (
     <li className={'card__list--ingredient'}>
       {item}
     </li>
   );
 }
}

module.exports = ListItem;

ListItem.propTypes = {
  item: React.PropTypes.string,
  key: React.PropTypes.number
};
