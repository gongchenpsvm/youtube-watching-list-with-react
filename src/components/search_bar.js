import React, {Component} from 'react';

/*functional component*/
// const SearchBar = () => {
//   return <input />;
// };

/*class component*/
class SearchBar extends Component {
  constructor(props) {
    super(props);
    //Initialize state
    this.state = { term: '' };//only used in constructor
  }
  //Whenever state changes, this component rerenders
  //Value of the input: {this.state.term}
  //because of reference to the state, rerendering update info
  render() {
    return (
      <div className="search-bar">
          <input
            value={this.state.term}
            onChange={event => this.setState({ term: event.target.value })} />
      </div>
    );
    //Input element with an event hadnler
    //triggered whenever event "change" occurs
  }

  // onInputChange(myCoolEvent) {//Event handler
  //   console.log(myCoolEvent.target.value);
  // }
}

export default SearchBar;
