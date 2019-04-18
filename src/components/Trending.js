import React, { Component } from "react";
import "../css/App.css";
import MovieRow from "./MovieRow";
import { fetchMedia } from "../lib/fetchMedia";
import * as helpers from "../helpers/general";

class Trending extends Component {
  constructor(props) {
    super(props);

    console.log(props);

    this.state = {
      trending_type: "tv",
      rows: []
    };

    this.performSearch();
  }

  performSearch = helpers.debounce(() => {
    const that = this;

    fetchMedia(null, this.state.trending_type)
      .then(function(data) {
        const results = data.results;

        let movieRows = results.map(function(result) {
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
              media_type={that.state.trending_type}
              key={result.id}
              movie={result}
            />
          );
        });

        console.log(results);

        that.setState({ rows: movieRows });
      })
      .catch(function(error) {
        console.log(
          "There has been a problem with your fetch operation: ",
          error.message
        );
      });
  }, 500);

  switchTrendingType = () => {
    if (this.state.trending_type === "movie") {
      this.setState({
        trending_type: "tv"
      });
    } else {
      this.setState({
        trending_type: "movie"
      });
    }

    this.performSearch();
  };

  render() {
    return (
      <div>
        <div className="flex">
          <h1 className="mr-2">Trending {this.state.trending_type} </h1>
          <button onClick={this.switchTrendingType}>
            - Switch to trending{" "}
            {this.state.trending_type === "movie" ? "Tv Shows" : "Movies"}
          </button>
        </div>
        {this.state.rows}
      </div>
    );
  }
}

export default Trending;
