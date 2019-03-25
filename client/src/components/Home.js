import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Home extends Component {
    render() {
        return (
            <div>
                <Link to="/characters">List of Characters</Link><br></br>
                <Link to="/faceGuide">How to get a specific face</Link><br></br>
                <Link to="/hairGuide">How to get a specific hair style</Link><br></br>
                <Link to="/items">List of Items</Link>
            </div>
        );
    }
}

export default Home;