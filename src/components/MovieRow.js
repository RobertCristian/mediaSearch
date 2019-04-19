import React, { Component } from "react";

class MovieRow extends Component {
  viewMovie = () => {
    let url = "";
    if (this.props.media_type === "movie") {
      url = "https://www.themoviedb.org/movie/" + this.props.movie.id;
    } else if (this.props.media_type === "tv") {
      url = "https://www.themoviedb.org/tv/" + this.props.movie.id;
    } else {
      url = "https://www.themoviedb.org/person/" + this.props.movie.id
    }
    window.location.href = url;
  };

  render() {
    let elementPoster;

    if (this.props.movie.poster_src) {
      elementPoster = (
        <img
          className="moviePoster"
          alt="poster"
          src={this.props.movie.poster_src}
        />
      );
    }

    return (
      <div className="mb-5 flex flex-col items-center sm:flex-row sm:items-start sm:mb-2 text-white">
        <div className="w-1/6">{elementPoster}</div>

        <div className="w-full flex flex-col items-center p-5">
          <h3 className="pb-2">
            {this.props.movie.title
              ? this.props.movie.title
              : this.props.movie.name}
          </h3>
          <p className="pb-2 max-w-3xl">{this.props.movie.overview}</p>

          <a
            href={
              this.props.media_type === "movie"
                ? "https://www.themoviedb.org/movie/" + this.props.movie.id
                : this.props.media_type === "tv"
                ? "https://www.themoviedb.org/tv/" + this.props.movie.id
                : "https://www.themoviedb.org/person/" + this.props.movie.id
            }
            rel="noreferrer noopener"
            target="_blank"
            className="bg-white hover:bg-grey-lightest text-grey-darkest font-semibold py-2 px-4 border border-grey-light rounded shadow">
            View Details
          </a>
        </div>
      </div>
    );
  }
}

export default MovieRow;
