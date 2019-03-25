import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

class Items extends Component {
    state ={
        items: []
    }

    componentDidMount = () => {
        this.getItems()
    }

    getItems = () => {
        axios.get('/api/items').then(res => {
            this.setState({items: res.data})
        })
    }
    render() {
        const items = this.state.items.map((items, i) => {
            return (
                <div key={i}>
                    <Link to={`/item/${items._id}`}>
                        <img src={items.itemImg} alt={items.name} />
                    </Link>
                </div>
            )
        })
        return (
            <div>
                <h1>Items list</h1>
                {items}
            </div>
        );
    }
}

export default Items;