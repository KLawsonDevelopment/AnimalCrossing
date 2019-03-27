import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

class Items extends Component {
    state = {
        items: [],
        newItem: {
            name: '',
            category: '',
            sellsFor: '',
            location: '',
            itemImg: ''
        },
        newItemForm: false
    }

    componentDidMount = () => {
        this.getItems()
    }

    getItems = () => {
        axios.get('/api/items').then(res => {
            this.setState({ items: res.data })
        })
    }

    handleChange = (event) => {
        const cloneNewItem = { ...this.state.newItem }
        cloneNewItem[event.target.name] = event.target.value
        this.setState({ newItem: cloneNewItem })
    }

    addNewItem = (event) => {
        event.preventDefault()
        axios.post('/api/items', {
            name: this.state.newItem.name,
            category: this.state.newItem.category,
            sellsFor: this.state.newItem.sellsFor,
            location: this.state.newItem.location,
            itemImg: this.state.newItem.itemImg
        })
            .then((res) => {
                const itemList = [...this.state.items]
                itemList.unshift(res.data)
                this.setState({
                    newItem: {
                        name: '',
                        category: '',
                        sellsFor: '',
                        location: '',
                        itemImg: ''
                    },
                    newItemForm:false,
                    items: itemList
                })
            })
    }

    toggleNewForm = () => {
        this.setState({ newItemForm: !this.state.newItemForm })
    }
    render() {
        const items = this.state.items.map((items, i) => {
            return (
                <div key={i}>
                    <Link to={`/item/${items._id}`} className="item-link">
                        <img src={items.itemImg} alt={items.name} /> <br></br>{items.name}
                    </Link>
                </div>
            )
        })
        return (
            <div>
                <button onClick={this.toggleNewForm}>New Item</button>
                {
                    this.state.newItemForm
                        ? <form onSubmit={this.addNewItem}>
                            <div>
                                <label value="name">Name</label>
                                <input type="text" name='name' onChange={this.handleChange} defaultValue={this.state.newItem.name}></input>
                            </div>
                            <div>
                                <label value="category">Category</label>
                                <input type="text" name='category' onChange={this.handleChange} defaultValue={this.state.newItem.category}></input>
                            </div>
                            <div>
                                <label value="sellsFor">Sells For</label>
                                <input type="text" name="sellsFor" onChange={this.handleChange} defaultValue={this.state.newItem.sellsFor}></input>
                            </div>
                            <div>
                                <label value="location">Location</label>
                                <input type="text" name="location" onChange={this.handleChange} defaultValue={this.state.newItem.location}></input>
                            </div>
                            <div>
                                <label value="itemImg">Item Image</label>
                                <input type='text' name="itemImg" onChange={this.handleChange} defaultValue={this.state.newItem.itemImg}></input>
                            </div>
                            <button>Submit</button>
                        </form>
                        : null
                }
                <h1>Items list</h1>
                <div className="itemsFlexbox">{items}</div>
                
            </div>
        );
    }
}

export default Items;