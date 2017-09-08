
// class GroceryListItem extends React.component {
//   render() {
//     return(
//       <li>this.props.todo</li>
//     )
//   }
// }
//
// class GroceryList extends React.component {
//  render() {
//    return(
//      <ul>
//       {props.groceryItems.map(todo =>
//         <GroceryListItem todo={todo} />
//       )}
//       </ul>
//    );
//  }
// }
var App = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList groceryItems={['chips', 'coffee']}/>
  </div>
);

var GroceryList = (props) => (
  <ul>
    {props.groceryItems.map(item =>
      <GroceryListItem item={item} />
    )}
  </ul>
)

class GroceryListItem extends React.Component{
  constructor(props) {
    super(props);
    // `state` is just an object literal
    this.state = {
      done: false,
      hover: false
    };
  }

  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  onMouseEnterFunc () {
    this.setState({
      hover: true
    })
  }

  onMouseLeaveFunc () {
    this.setState({
      hover: false
    })
  }

  render() {
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none',
      fontWeight: this.state.hover ? 'bold' : 'normal'
    };

    return (
      <li style={style} onClick={this.onListItemClick.bind(this)} onMouseEnter={this.onMouseEnterFunc.bind(this)} onMouseLeave={this.onMouseLeaveFunc.bind(this)}>{this.props.item}</li>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById("app"));
