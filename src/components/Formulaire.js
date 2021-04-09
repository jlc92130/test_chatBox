import React, { Component } from 'react'

class Formulaire extends Component {
    state = {
        message: ''
    }

    createMessage = () => {
        const {addMessage, pseudo} = this.props
        const message = {
            pseudo,
            message: this.state.message
        }
        
        addMessage(message) 

        //reset
        this.setState({message: ''})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.createMessage()
        
    }
    handleChange = (e) => {
        const mess = e.target.value
        this.setState({message:mess})
    }

    render() {
        return (
            <form action="" className="form" onSubmit={this.handleSubmit}>
                <textarea onChange={this.handleChange} 
                value={this.state.message} required maxLength='140' />
                <div className='info'>
                    140
                </div>
                <button type="submit">
                    Envoyer
                </button>
            </form>
        )
            
    }
}

export default Formulaire;