import React, { Component } from 'react';
import Search from './Search';
import cover from '../img/tv.jpg'
import LayoutCom from './LayoutCom';
import key from './api';

class TvShows extends Component {
    state = {
        tvShows: [],
        page: 1,
        search: ""
    }

    componentDidMount() {
        document.title = 'TMDb App-TV Shows';
        let bg = document.getElementsByClassName('jumbotron')
        bg[0].style.backgroundImage = `url(${cover})`;
        document.getElementsByClassName('navbar-brand')[0].innerText = "TV Shows"
        fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${key.key}`)
            .then(this.handleErrors.bind(this))
            .then(res => res.json())
            .then((data) => {
                this.setState({
                    tvShows: data.results,
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

    getMoretvShows() {
        this.setState({
            page: this.state.page++
        })
        fetch(`https://api.themoviedb.org/3/tv/popular?api_key=d0aea524bd07ed49cbc26dff63f357dd&page=${this.state.page}`)
            .then(res => res.json())
            .then((data) => {
                this.setState({
                    tvShows: this.state.tvShows.concat(data.results)
                })
            })

    }

    render() {
        const tvShows = this.state.tvShows;
        let RenderTvShows = tvShows.filter((tv) => {
            return tv.name.toLowerCase().search(
                this.state.search.toLowerCase()) !== -1;
        }).map((tv, key) => {
            return <LayoutCom
                customeModalId={key}
                modalImg={`https://image.tmdb.org/t/p/w500${tv.backdrop_path}`}
                title={tv.original_name}
                poster={`https://image.tmdb.org/t/p/w500${tv.poster_path}`}
                key={key}
                text={tv.overview.slice(0, 230).concat("...")}
                modal={`#modal${key}`}
                date={tv.release_date}
                rate={tv.vote_average}
                modalText={tv.overview}
            />
        })
    
        return (
            <div>
                <div className="sticky-search">
                    <Search name="Search Shows" OnChange={this.search.bind(this)} />
                </div>
                <div className="row">
                    {RenderTvShows}
                </div>
                <button className="btn btn-dark" onClick={this.getMoretvShows.bind(this)}>More Tv Shows</button>
            </div>

        )
    }
}


export default TvShows;

