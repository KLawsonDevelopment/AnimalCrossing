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
        this.setState({ newCharacter: cloneNewCharacter })
    }

    addNewCharacter = (event) => {
        event.preventDefault()
        axios.post('/api/characters', {
            name: this.state.newCharacter.name,
            species: this.state.newCharacter.species,
            gender: this.state.newCharacter.gender,
            service: this.state.newCharacter.service,
            birthday: this.state.newCharacter.birthday,
            coffee: this.state.newCharacter.coffee,
            img: this.state.newCharacter.img,
            timeAwake: this.state.newCharacter.timeAwake
        })
            .then((res) => {
                const characterList = [...this.state.characters]
                characterList.unshift(res.data)
                this.setState({
                    newCharacter: {
                        name: '',
                        species: '',
                        gender: '',
                        service: '',
                        birthday: '',
                        coffee: '',
                        img: '',
                        timeAwake: ''
                    },
                    newCharacterForm: false,
                    characters: characterList
                })
            })
    }

    toggleNewForm = () => {
        this.setState({ newCharacterForm: !this.state.newCharacterForm })
    }
    render() {

        const characters = this.state.characters.map((character, i) => {
            return (
                <div key={i} className="characterList">
                    <Link to={`/character/${character._id}`} className="character-link">
                        <img src={character.img} alt={character.name} />{character.name}
                    </Link>
                </div>
            )
        })
        return (
            <div style={{width: '100%'}}>
                <button onClick={this.toggleNewForm}>New Character</button>
                {
                    this.state.newCharacterForm
                        ? <form onSubmit={this.addNewCharacter}>
                            <div>
                                <label value="Name">Name</label>
                                <input type="text" name="name" onChange={this.handleChange} defaultValue={this.state.newCharacter.name}></input>
                            </div>
                            <div>
                                <label value="Species">Species</label>
                                <input type="text" name="species" onChange={this.handleChange} defaultValue={this.state.newCharacter.species}></input>
                            </div>
                            <div>
                                <label value="gender">Gender</label>
                                <input type="text" name="gender" onChange={this.handleChange} defaultValue={this.state.newCharacter.gender}></input>
                            </div>
                            <div>
                                <label value="service">Service</label>
                                <input type="text" name="service" onChange={this.handleChange} defaultValue={this.state.newCharacter.service}></input>
                            </div>
                            <div>
                                <label value="birthday">Birthday</label>
                                <input type="text" name="birthday" onChange={this.handleChange} defaultValue={this.state.newCharacter.birthday}></input>
                            </div>
                            <div>
                                <label value="coffee">Coffee</label>
                                <textarea name="coffee" rows="3" cols="20" onChange={this.handleChange} defaultValue={this.state.newCharacter.coffee}></textarea>
                            </div>
                            <div>
                                <label value="img">Villager Image</label>
                                <input type="text" name="img" onChange={this.handleChange} defaultValue={this.state.newCharacter.img}></input>
                            </div>
                            <div>
                                <label value="timeAwake">Times Awake</label>
                                <input type="text" name="timeAwake" onChange={this.handleChange} defaultValue={this.state.newCharacter.timeAwake}></input>
                            </div>
                            <button>Submit</button>
                        </form>
                        : null
                }
                <h1>Characters</h1>
                <div className="characterFlexbox">{characters}</div>

            </div>
        );
    }
}

export default Characters;