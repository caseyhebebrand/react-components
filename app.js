
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
  render() {
    return (
      <li>{this.props.item}</li>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById("app"));
