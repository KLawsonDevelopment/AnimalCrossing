import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

class SingleCharacter extends Component {
    state = {
        character: {
            name: '',
            species: '',
            gender: '',
            service: '',
            birthday: '',
            coffee: '',
            img: "",
            timeAwake: '',
            items: []
        }
    }

    componentDidMount= () =>{
        this.getCharacter()
    }

    getCharacter = async () => {
        const res = await axios.get(`/api/characters/${this.props.match.params.id}`)
        this.setState({character: res.data})
    }
    render() {
        const {name, species, gender, service, birthday, coffee, img, timeAwake, items} = this.state.character
        return (
            <div>
                <h1>{name}</h1>
                <p>Species: {species}</p>
                <p>Gender: {gender}</p>
                <p>What service they provide: {service}</p>
                <p>Birthday: {birthday}</p>
                <p>Likes their coffee: {coffee}</p>
                <img src={img} alt={name}></img>
                <p>When they are awake: {timeAwake}</p>
                {/* <Link to={`/item/${items._id}`}>{items}</Link> */}
            </div>
        );
    }
}

export default SingleCharacter;