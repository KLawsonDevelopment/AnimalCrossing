import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom'

class singleItem extends Component {
    state = {
        item: {
            name: '',
            category: '',
            sellsFor: '',
            location: '',
            itemImg: ''
        },
        displayEditForm: false
    }

    componentDidMount = () => {
        this.getItem()
    }

    getItem = async () => {
        const res = await Axios.get(`/api/items/${this.props.match.params.id}`)
        this.setState({ item: res.data })
    }

    editItem = (event) => {
        event.preventDefault()
        Axios.put(`/api/items/${this.props.match.params.id}`, {
            name: this.state.item.name,
            category: this.state.item.category,
            sellsFor: this.state.item.sellsFor,
            location: this.state.item.location,
            itemImg: this.state.item.itemImg
        })
        .then((res) => {
            this.setState({item: res.data, displayEditForm: false})
        })
    }

    handleChange = (event) => {
        const editItem = { ...this.state.item }
        editItem[event.target.name] = event.target.value
        this.setState({ item: editItem })
    }

    toggleEditForm = () => {
        this.setState({ displayEditForm: !this.state.displayEditForm })
    }

    deleteItem = () => {
        Axios.delete(`/api/items/${this.props.match.params.id}`).then(() => {
            this.props.history.goBack()
        })
    }

    render() {
        const { name, category, sellsFor, location, itemImg } = this.state.item

        return (

            <div>
                <Link to="/items" id="itemBackButton">Return to Item page</Link>
                <p><button onClick={this.toggleEditForm}>Edit this Item</button></p>
                {
                    this.state.displayEditForm
                    ? <form onSubmit={this.editItem}>
                    <div>
                        <label value="name">Name</label>
                        <input type="text" name='name' onChange={this.handleChange} defaultValue={this.state.item.name}></input>
                    </div>
                    <div>
                        <label value="category">Category</label>
                        <input type="text" name='category' onChange={this.handleChange} defaultValue={this.state.item.category}></input>
                    </div>
                    <div>
                        <label value="sellsFor">Sells For</label>
                        <input type="number" name="sellsFor" onChange={this.handleChange} defaultValue={this.state.item.sellsFor}></input>
                    </div>
                    <div>
                        <label value="location">Location</label>
                        <input type="text" name="location" onChange={this.handleChange} defaultValue={this.state.item.location}></input>
                    </div>
                    <div>
                        <label value="itemImg">Item Image</label>
                        <input type='text' name="itemImg" onChange={this.handleChange} defaultValue={this.state.item.itemImg}></input>
                    </div>
                    <button>Submit</button>
                </form>
                : <div>
                    <button onClick={this.deleteItem}>Delete This Item</button>
                <h1>{name}</h1>
                <p>Category: {category}</p>
                <p>Sells For: {sellsFor}</p>
                <p>Location: {location}</p>
                <img src={itemImg} alt={name}></img>
                </div>
                }
            </div>
        );
    }
}

export default singleItem;