import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Home extends Component {
    render() {
        return (
            <div className="home">
                <Link to="/characters" className="characters">List of Characters</Link><br></br>
                <Link to="/faceGuide" className="faceGuide">How to get a specific face</Link><br></br>
                <Link to="/hairGuide" className="hairGuide">How to get a specific hair style</Link><br></br>
                <Link to="/items" className="items">List of Items</Link>
            </div>
        );
    }
}

export default Home;