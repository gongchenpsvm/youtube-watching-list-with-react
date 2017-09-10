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
    this.state = { term: '' };
  }
  render() {
    return <input onChange={this.onInputChange}/>;
    //Input element with an event hadnler
    //triggered whenever event "change" occurs
  }

  onInputChange(myCoolEvent) {//Event handler
    console.log(myCoolEvent.target.value);
  }
}

export default SearchBar;
