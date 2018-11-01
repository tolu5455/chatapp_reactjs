import React, { Component } from 'react';
import './App.css';
import firebase, { auth, provider } from './config/firebase.js'

class App extends Component {
  constructor(){
    super();
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.joinRoom = this.joinRoom.bind(this);
    this.state = {
      username: '',
      user: null,
      rooms: [{id: 1, title: "Room1"}]
    }
  }

  componentDidMount(){
    auth.onAuthStateChanged(user => {
      if(user){
        this.setState({user});
      }
    })
  }

  login(){
    auth.signInWithPopup(provider)
      .then(result => {
        const user = result.user;
        this.setState({user});
      })
  }

  logout(){
    auth.signOut()
      .then(() => this.setState({user: null}))
  }

  joinRoom(){
    alert("Attending room");
  }

  render() {
    return (
      <div className="App">
        <header>
          <div className="wrapper">
            <h1>Chat room</h1>
            {this.state.user ?
              <button onClick={this.logout}>Log Out</button>                
            :
              <button onClick={this.login}>Log In</button>              
            }
          </div>
        </header>
        {this.state.user ?
          <div>
              <div className='user-profile'>
                <img src={this.state.user.photoURL} />
              </div>
            <div className='container'>
              <section className='display-item'>
                <div className="wrapper">
                  <ul>
                    {this.state.rooms.map((room) => {
                      return (
                        <li key={room.id}>
                          <h3>{room.title}</h3>
                            <p>                     
                              <button onClick={() => this.joinRoom(room.id)}>Join Room</button>      
                            </p>                   
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </section>
            </div>
          </div>
        :
          <div className='wrapper'>
            <p>You must be logged in to join room and chat with your friends.</p>
          </div>
        }
      </div>
    );
  }
}

export default App;
