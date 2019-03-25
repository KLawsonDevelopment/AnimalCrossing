import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Home extends Component {
    render() {
        return (
            <div>
                <Link to="/characters">List of Characters</Link><br></br>
                <Link to="/faceGuide">How to get a specific face</Link>
            </div>
        );
    }
}

export default Home;