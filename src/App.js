import React, { Component } from 'react';
import ListContacts from './ListContacts'



class App extends Component {
    state ={
       contacts: [
    {
      id: 'cyril',
      name: 'Cyril Ajieh',
      email: 'cyril@cyrilajieh.com',
      avatarURL: 'http://localhost:5001/cyril.jpg'
    },
    {
      id: 'faith',
      name: 'Faith Oghele Ajieh',
      email: 'faith@cyrilajieh.com',
      avatarURL:'http://localhost:5001/faith.jpg'
    },
    {
      id: 'meekness',
      name: 'Meekness Cyril',
      email: 'meekness@cyrilajiehcom',
      avatarURL: 'http://localhost:5001/cyril.jpg'
    },
    {
      id: 'faithful',
      name: 'Faithful Cyril',
      email: 'aithfulf@cyrilajieh.com',
      avatarURL:'http://localhost:5001/cyril.jpg'
    },
    {
      id: 'love',
      name: 'Love Cyril',
      email: 'love@cyrilajieh.com',
      avatarURL: 'http://localhost:5001/faith.jpg'
    }
  ]
    }
   

 removeContact = (contact) =>{
   this.setState((state) =>({
        contacts: state.contacts.filter((c) => c.id !== contact.id)
    }))
    }
  render() {
    return (
      <div>
        <ListContacts onRemoveContact={this.removeContact}  contacts={this.state.contacts} />
      </div>
    )
  }
}

export default App;