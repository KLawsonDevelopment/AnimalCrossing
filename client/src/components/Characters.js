import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'


class Characters extends Component {
    state = {
        characters: [],
        newCharacter: {
            name: '',
            species: '',
            gender: '',
            service: '',
            birthday: '',
            coffee: '',
            img: "",
            timeAwake: ''
        },
        newCharacterForm: false
    }

    componentDidMount = () => {
        this.getCharacters()
    }

    getCharacters = () => {
        axios.get('/api/characters').then(res => {
            this.setState({ characters: res.data })
        })
    }

    handleChange = (event) => {
        const cloneNewCharacter = { ...this.state.newCharacter }
        cloneNewCharacter[event.target.name] = event.target.value
        this.setState({ character: cloneNewCharacter })
    }

    toggleNewForm = () => {
        this.setState((state, props) => {
            return { newCharacterForm: !state.newCharacterForm }
        })
    }
    render() {

        const characters = this.state.characters.map((character, i) => {
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
                <button onClick={this.toggleNewForm}>New Character</button>
                {
                    this.state.newCreatureForm
                        ? <form onSubmit={this.updateCharacter}>
                            <div>
                                <label value="Name">Name</label>
                                <input type="text" name="name" onChange={this.handleChange} value={this.state.newCharacter.name}></input>
                            </div>
                            <div>
                                <label value="Species">Species</label>
                                <input type="text" name="species" onChange={this.handleChange} value={this.state.newCharacter.species}></input>
                            </div>
                            <div>
                                <label value="gender">Gender</label>
                                <input type="text" name="gender" onChange={this.handleChange} value={this.state.newCharacter.gender}></input>
                            </div>
                            <div>
                                <label value="service">Service</label>
                                <input type="text" name="service" onChange={this.handleChange} value={this.state.newCharacter.service}></input>
                            </div>
                            <div>
                                <label value="birthday">Birthday</label>
                                <input type="text" name="birthday" onChange={this.handleChange} value={this.state.newCharacter.birthday}></input>
                            </div>
                            <div>
                                <label value="coffee">Coffee</label>
                                <input type="text" name="coffee" onChange={this.handleChange} value={this.state.newCharacter.coffee}></input>
                            </div>
                            <div>
                                <label value="img">Villager Image</label>
                                <input type="text" name="img" onChange={this.handleChange} value={this.state.newCharacter.img}></input>
                            </div>
                            <div>
                                <label value="timeAwake">Times Awake</label>
                                <input type="text" name="timeAwake" onChange={this.handleChange} value={this.state.newCharacter.timeAwake}></input>
                            </div>
                            <button>Submit</button>
                        </form>
                        : <p>Click the button to make a new character!</p>
                }
            </div>
        );
    }
}

export default Characters;