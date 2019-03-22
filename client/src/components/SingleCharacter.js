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
        },
        displayEditForm: false
    }

    componentDidMount = () => {
        this.getCharacter()
    }

    getCharacter = async () => {
        const res = await axios.get(`/api/characters/${this.props.match.params.id}`)
        this.setState({ character: res.data })
    }

    handleChange = (event) => {
        const editCharacter = {...this.state.character}
        editCharacter[event.target.name] = event.target.value
        this.setState({character: editCharacter})
    }

    updateCharacter =  (event) => {
        event.preventDefault()
        axios.put(`/api/characters/${this.props.match.params.id}`, {
            name: this.state.character.name,
            species: this.state.character.species,
            gender: this.state.character.gender,
            service: this.state.character.service,
            birthday: this.state.character.birthday,
            coffee: this.state.character.coffee,
            img: this.state.character.img,
            timeAwake: this.state.character.timeAwake
        })
        .then((res) => {
            this.setState({character: res.data, displayEditForm:false})
        })
    }

    deleteCharacter = () => {
        axios.delete(`/api/characters/${this.props.match.params.id}`).then(() =>{
            this.props.history.goBack()
        })
    }

    toggleEditForm = () => {
        this.setState((state, props) => {
            return { displayEditForm: !state.displayEditForm }
        })
    }

    render() {
        const { name, species, gender, service, birthday, coffee, img, timeAwake } = this.state.character
        const items = this.state.character.items.map((item, i) => {
            return <div key={i}>
                <Link to={`/item/${item._id}`}><img src={item.itemImg} alt={item.name}></img></Link>
            </div>
        })
        return (
            <div>
                <div>
                    <Link to="/">Back to Home</Link> <br></br>
                    <Link to="/characters">Back to Character Select</Link>
                </div>

                <button onClick={this.toggleEditForm}>Edit This Character</button>

                {
                    this.state.displayEditForm
                        ? <form onSubmit={this.updateCharacter}>
                            <div>
                                <label value="Name">Name</label>
                                <input type="text" name="name" defaultValue={name} onChange={this.handleChange}></input>
                            </div>
                            <div>
                                <label value="Species">Species</label>
                                <input type="text" name="species" defaultValue={species} onChange={this.handleChange}></input>
                            </div>
                            <div>
                                <label value="gender">Gender</label>
                                <input defaultValue={gender} type="text" name="gender" onChange={this.handleChange}></input>
                            </div>
                            <div>
                                <label value="service">Service</label>
                                <input defaultValue={service} type="text" name="service" onChange={this.handleChange}></input>
                            </div>
                            <div>
                                <label value="birthday">Birthday</label>
                                <input defaultValue={birthday} type="text" name="birthday" onChange={this.handleChange}></input>
                            </div>
                            <div>
                                <label value="coffee">Coffee</label>
                                <input defaultValue={coffee} type="text" name="coffee" onChange={this.handleChange}></input>
                            </div>
                            <div>
                                <label value="img">Villager Image</label>
                                <input defaultValue={img} type="text" name="img" onChange={this.handleChange}></input>
                            </div>
                            <div>
                                <label value="timeAwake">Times Awake</label>
                                <input defaultValue={timeAwake} type="text" name="timeAwake" onChange={this.handleChange}></input>
                            </div>
                            <button>Submit</button>
                        </form>
                        :
                        <div>
                            <button onClick={this.deleteCharacter}>Delete This Character</button>
                            <h1>{name}</h1>
                            <div>
                                Species: {species}
                            </div>
                            <div>
                                Gender: {gender}
                            </div>
                            <div>
                                What service they provide: {service}
                            </div>
                            <div>
                                Birthday: {birthday}
                            </div>
                            <div>
                                Likes their coffee: {coffee}
                            </div>
                            <img src={img} alt={name}></img>
                            <div>
                                When they are awake: {timeAwake}
                            </div>
                            <h2>Items they like</h2>
                            {items}
                        </div>
                }
            </div>
        );
    }
}

export default SingleCharacter;