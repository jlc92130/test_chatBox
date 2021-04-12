import React, { Component } from 'react'

class Formulaire extends Component {
    state = {
        message: '',
        length: this.props.length
    }

    createMessage = () => {
        const {addMessage, pseudo, length} = this.props
        const message = {
            pseudo,
            message: this.state.message
        }
        
        addMessage(message) 

        //reset
        this.setState({message: '', length})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.createMessage()
        this.setState()
    }
    handleChange = (e) => {
        const message = e.target.value
        const length = (this.props.length - message.length)    
        this.setState({message,length})
    }
    handleKeyUp = (e) {
        if (event.key === 'Enter') {
           this.createMessage 
        }
    }

    render() {
        return (
            <form action="" className="form" onSubmit={this.handleSubmit}>
                <textarea 
                onChange={this.handleChange}
                onKeyUp={this.handleKeyUp} 
                value={this.state.message} required maxLength={this.props.length} />
                <div className='info'>
                    {this.state.length}
                </div>
                <button type="submit">
                    Envoyer
                </button>
            </form>
        )
            
    }
}

export default Formulaire;