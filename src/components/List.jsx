import React from 'react';
import ListItem from './ListItem.jsx';

var ingredients = [{"id": 1, "text":"salami"}, {"id":2, "text": "cheese"}, {"id":3, "text":"potatoes"}];

var List = React.createClass({
  render: function(){
    var listItems = ingredients.map(function(item){
      return <ListItem key={item.id} ingredient={item.text} />;
    });

    return (<ul>{listItems}</ul>);
  }
});

export default List;
