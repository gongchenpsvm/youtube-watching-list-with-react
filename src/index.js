import React, { Component } from 'react';//React core works with making components
import ReactDOM from 'react-dom';//React dom shows the components
import SearchBar from './components/search_bar';//own file needs a reference
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyC3Uoj6VbqnJrB1ZAajvzLiu3IgOKFfkHE';


//Create new component, which produces some html
//Take the generated html to page
//Make and show
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [ ],
                   selectedVideo: null
                 };

    YTSearch({key: API_KEY, term: 'dota2'}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
       });
    });
  }

  render(){
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

//This APP component is a class.
// ReactDOM.render(App);
//We need an instance. Add JSX closing tag to make the component instance

// ReactDOM.render(<App />);
//But not specified place to put the dom
//Need a container to place our component instance
ReactDOM.render(<App />, document.querySelector('.container'));
