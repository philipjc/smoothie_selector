import React from 'react';

class ListItem extends React.Component{
 constructor(props) {
   super(props);
 }

 render() {
   let { item, key } = this.props;
   return (
     <li className={'card__list--item card__list--item-' + key}>
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
