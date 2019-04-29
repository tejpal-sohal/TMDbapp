import React, { Component } from 'react';
import Search from './Search';
import cover from '../img/actors.jpg'
import Actor from './ActorCom';
import key from './api';

class People extends Component {
    state = {
        people: [],
        page: 2,
        search: ""
    }

    componentDidMount() {
        document.title = 'TMDb App-People/Actors';
        let bg = document.getElementsByClassName('jumbotron') 
        bg[0].style.backgroundImage = `url(${cover})`;
        document.getElementsByClassName('navbar-brand')[0].innerText= "Actors"
        fetch(`https://api.themoviedb.org/3/person/popular?api_key=${key.key}`)
            .then(this.handleErrors.bind(this))
            .then(res => res.json())
            .then((data) => {
                this.setState({
                    people: data.results,
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

    getMorepeople() {
        this.setState({
            page: this.state.page+1
        })
        fetch(`https://api.themoviedb.org/3/person/popular?api_key=${key.key}&page=${this.state.page}`)
            .then(res => res.json())
            .then((data) => {
                this.setState({
                    people: this.state.people.concat(data.results)
                })
            })

    }

    render() {
        const people = this.state.people;
        let renderpeople = people.filter((people) => {
            return people.name.toLowerCase().search(
                this.state.search.toLowerCase()) !== -1;
        }).map((people, key) => {
            let ProfileImageCheck = people.profile_path === null ? "https://is4-ssl.mzstatic.com/image/thumb/Purple128/v4/1e/80/3f/1e803f98-e9a6-6eab-2cb5-bc32638417c1/source/512x512bb.jpg" : `https://image.tmdb.org/t/p/w500/${people.profile_path}`
            return <Actor
            customeModalId={key}
            modalImg={`${ProfileImageCheck}`}
            title={people.name}
            poster={`${ProfileImageCheck}`}
            key={key}
            ArrayItems={people.known_for}
            modal={`#modal${key}`}
            date={people.release_date}
            rate={`${people.popularity.toFixed()}%`}
            modalText={people.overview}
          />
        })
        return (
            <div>
            <div className="sticky-search">
            <Search name="Search People/Actors" OnChange={this.search.bind(this)} />
            </div>
            <div className="row">
             {renderpeople}
            </div>
            <button className="btn btn-dark" onClick={this.getMorepeople.bind(this)}>More Actors</button>
        </div>
        )
    }
}


export default People;

