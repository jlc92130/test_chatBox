import React, { Component, createRef } from 'react'
import './App.css'
import './animations.css'

import Formulaire from './components/Formulaire'
import Message from './components/Message'

//Firebase
import base from './base'

//Animations
import {
  CSSTransition,
  TransitionGroup
} from 'react-transition-group'

class App extends Component {
  state = {
    messages: {}, 
    pseudo: this.props.match.params.pseudo // pseudo is a parameter from the url
  }

  //creation of a reference to work on the scroll. We don't work directly on the dom
  messagesRef = createRef()

  componentDidMount () {
    base.syncState('/', {
      context: this,
      state: 'messages'
    })
  }

  // when the state change
  componentDidUpdate () {
    const ref = this.messagesRef.current
    ref.scrollTop = ref.scrollHeight
  }

  addMessage = message => {   //message is an object made of pseudo and messages
    const messages = { ...this.state.messages } // copy messages in the state
    messages[`message-${Date.now()}`] = message 
    // Object transfom the object in a tab
    Object  
      .keys(messages)
      .slice(0, -10) //we keep the last 10 messages
      .forEach( key => {
        messages[key] = null
      })
    this.setState({ messages })  //add message in the dictionary
  } 

  isUser = pseudo => pseudo === this.state.pseudo

  render () {
    const messages = Object
      .keys(this.state.messages) 
      .map(key => (
        <CSSTransition 
        timeout={2000}
        classNames='fade' 
        key={key}>
          <Message            
            isUser = {this.isUser}
            message={this.state.messages[key].message}
            pseudo={this.state.messages[key].pseudo}
          />
        </CSSTransition>
        
      ))  

    return (
      <div className='box'>
        <div>
          <div className="messages" ref={this.messagesRef}>
            <TransitionGroup className="message">
              {messages}
            </TransitionGroup>            
          </div>
          <Formulaire length={140} addMessage={this.addMessage} pseudo={this.state.pseudo} />
        </div>
      </div>
    )
  }
}

export default App;
