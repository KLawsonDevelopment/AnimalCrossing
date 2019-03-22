import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'


class Characters extends Component {
    state = {
        characters: []
    }

    componentDidMount = () => {
        this.getCharacters()
    }

    getCharacters = () => {
        axios.get('/api/characters').then(res => {
            this.setState({characters: res.data})
        })
    }
    render() {

        const characters = this.state.characters.map((character,i) => {
            return (
                <div key={i}>
                    <Link to={`/character/${character._id}`}>
                        <img src={character.img} alt={character.name}></img>
                    </Link>
                </div>
            )
        })
        return (
            <div>
                <h1>Characters</h1>
                {characters}
            </div>
        );
    }
}

export default Characters;