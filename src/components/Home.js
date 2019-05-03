import React, {Component} from "react";
import "../css/App.css";
import MovieRow from "./MovieRow";
import SearchBar from "./SearchBar";
import * as helpers from "../helpers/general";
import {fetchMedia} from "../lib/fetchMedia";

import {withFirebase} from "./Firebase";
import {withAuthorization} from './Session';

class Home extends Component {
    _isMounted = false;

    constructor(props) {
        super(props);

        this.state = {
            media_type: "movie",
            searchTerm: "",
            loading: false,
            users: []
        };
    }

    componentWillMount() {
        console.log('test');
    }

    componentDidMount() {
        this._isMounted = true;
        this.setState({loading: true});

        if (this._isMounted) {
            this.performSearch();
        }

        this.props.firebase.users().on("value", snapshot => {
            const usersObject = snapshot.val();

            console.log("usersobj", usersObject);

            const usersList = Object.keys(usersObject).map(key => ({
                ...usersObject[key],
                uid: key
            }));

            console.log("userList", usersObject);

            this.setState({
                users: usersList,
                loading: false
            });
        });
    }

    performSearch = helpers.debounce(searchTerm => {
        const that = this;

        if (this._isMounted) {
            fetchMedia(searchTerm, this.state.media_type)
                .then(function (data) {
                    const results = data.results;

                    let mediaRows = results.map(function (result) {
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

                    that.setState({mediaRows: mediaRows});
                })
                .catch(function (error) {
                    console.log(
                        "There has been a problem with your fetch operation: ",
                        error.message
                    );
                });
        }
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

    componentWillUnmount() {
        console.log('cucu2');
        this.props.firebase.users().off();
        this._isMounted = false;
    }

    render() {
        const {users} = this.state;
        console.log(users);

        return (
            <div>
                <SearchBar searchChangeHandler={this.searchChangeHandler}/>

                {this.state.mediaRows}
            </div>
        );
    }
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(withFirebase(Home));
