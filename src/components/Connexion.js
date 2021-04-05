import React, { Component } from 'react'

class Connexion extends Component {
    state = {
        pseudo: ''
    }

    handleChange = (e) => {
        const pseudo = e.target.value;
    };


    render () {
        return (
            <div className="connexionBox">
                <form className="connexion">
                    <input 
                    value = {this.state.pseudo}
                    onChange = {this.handleChange}
                    placeholder='Pseudo'
                    type="text"
                    required/>
                    <button type="submit">GO</button>
                </form>
            </div>
        )
    }
}

export default Connexion; 