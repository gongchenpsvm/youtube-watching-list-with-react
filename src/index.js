import React from 'react';//React core works with making components
import ReactDOM from 'react-dom';//React dom shows the components

import SearchBar from './components/search_bar';//own file needs a reference

const API_KEY = 'AIzaSyC3Uoj6VbqnJrB1ZAajvzLiu3IgOKFfkHE';

//Create new component, which produces some html
//Take the generated html to page
//Make and show
const App = () => {
  return <div>
    <SearchBar />
  </div>;
};

//This APP component is a class.
// ReactDOM.render(App);
//We need an instance. Add JSX closing tag to make the component instance

// ReactDOM.render(<App />);
//But not specified place to put the dom
//Need a container to place our component instance
ReactDOM.render(<App />, document.querySelector('.container'));
