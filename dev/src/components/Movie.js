import React, { Component } from 'react';
import Search from './Search';
import cover from '../img/movies.jpg'
import LayoutCom from './LayoutCom';
import key from './api';

class Movie extends Component {
    state = {
        movies: [],
        page: 2,
        search: ""
    }

    componentDidMount() {
        document.title = 'TMDb App-Movies';
        let bg = document.getElementsByClassName('jumbotron') 
        bg[0].style.backgroundImage = `url(${cover})`;
        document.getElementsByClassName('navbar-brand')[0].innerText= "Movies"
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${key.key}`)
            .then(this.handleErrors.bind(this))
            .then(res => res.json())
            .then((data) => {
                this.setState({
                    movies: data.results,
                })
            })

    }

    handleErrors(response) {
        if (!response.ok) {
            console.log(response.statusText);
        }
        return response;
    }

    search(e) {
        this.setState({
            search: e.target.value
        });
    }

    getMoreMovies() {
        this.setState({
            page: this.state.page+1
        })
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${key.key}&page=${this.state.page}`)
            .then(res => res.json())
            .then((data) => {
                this.setState({
                    movies: this.state.movies.concat(data.results)
                })
            })
    }

    render() {
        const movies = this.state.movies;
        let RenderMovies = movies.filter((movie) => {
            return movie.title.toLowerCase().search(
                this.state.search.toLowerCase()) !== -1;
        }).map((movie, key) => {
              return <LayoutCom 
                         customeModalId={key}
                         modalImg={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                         title={movie.title}
                         poster={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                         key={key}
                         text={movie.overview.slice(0, 230).concat("...")}
                         modal={`#modal${key}`}
                         date={movie.release_date}
                         rate={movie.vote_average}
                         modalText={movie.overview}
                         />
        })
        return (
            <div>
                <div className="sticky-search">
                <Search name="Search Movies" OnChange={this.search.bind(this)} />
                </div>
                <div className="row">
                 {RenderMovies}
                </div>
                <button className="btn btn-dark" onClick={this.getMoreMovies.bind(this)}>More Movies</button>
            </div>
        )
    }
}


export default Movie;

