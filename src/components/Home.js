import React, { Component } from "react";
import "../css/App.css";
import MovieRow from "./MovieRow";
import SearchBar from "./SearchBar";
import  * as helpers from "../helpers/general";
import { fetchMedia } from "../lib/fetchMedia";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      media_type: "movie",
      searchTerm: ""
    };

    this.performSearch();
  }

    performSearch = helpers.debounce(searchTerm => {
    const that = this;

    fetchMedia(searchTerm, this.state.media_type)
      .then(function(data) {
        const results = data.results;

        let mediaRows = results.map(function(result) {
          if (result.poster_path) {
            result.poster_src =
              localStorage.getItem("image_base_url") +
              localStorage.getItem("poster_size") +
              result.poster_path;
          } else if (result.profile_path) {
            result.poster_src =
              localStorage.getItem("image_base_url") +
              localStorage.getItem("poster_size") +
              result.profile_path;
          }

          return (
            <MovieRow
              media_type={
                result.media_type ? result.media_type : that.state.media_type
              }
              key={result.id}
              movie={result}
            />
          );
        });

        console.log(results);

        that.setState({ mediaRows: mediaRows });
      })
      .catch(function(error) {
        console.log(
          "There has been a problem with your fetch operation: ",
          error.message
        );
      });
  }, 500);

  searchChangeHandler = event => {
    const searchTerm = event.target.value;

    this.setState(
      {
        searchTerm: searchTerm
      },
      () => this.performSearch(this.state.searchTerm)
    );
  };

  render() {
    return (
      <div>
        <SearchBar searchChangeHandler={this.searchChangeHandler} />

        {this.state.mediaRows}
      </div>
    );
  }
}

export default App;
