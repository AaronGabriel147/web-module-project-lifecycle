import React from 'react';
import './App.css';
import axios from 'axios';

import fetchData from './components/fetchData';
import Following from './components/Following';



class App extends React.Component {
  state = {
    username: {},
    following: []
  }

  componentDidMount(){
    fetchData('aarongabriel147')
      .then(res =>  {
        // console.log(res.data)
        this.setState({ username: res.data })
      })
      .catch(err => {
        console.log(err)
      })
  }


  componentDidUpdate(prevProps, prevState){
    if(this.state.username !== prevState.username){
      axios.get('https://api.github.com/users/aarongabriel147/following')
      .then(res => {
        // console.log('update: ', res.data)
        this.setState({ following: res.data })
      })
      .catch(err => {
        console.log('err from update', err)
      })
    }
  }



  render() {
    console.log('update to state.following!', this.state.following)
    // console.log('state.username: ', this.state.username)

    return (
      <div className="App-cta">
        <img src={this.state.username.avatar_url} width="230px" alt="profileImage"/>
        <p>Login: {this.state.username.login}</p>
        <p>Repos: {this.state.username.public_repos} </p>
        <p>Following: {this.state.username.following}</p>
        <p>Followers: {this.state.username.followers}</p>
        <Following />


    </div>
    );
  }
}
export default App;






// <p><a href={this.state.myData.following}></a></p>    
// https://github.com/AaronGabriel147?tab=repositories


// x Fetch the User Data
// x When your component mounts, send a GET request to the following URL 
// x (replacing the palceholder with your Github name):
// x https://api.github.com/users/aarongabriel147


// x After you fetch your data, set it to state
// x Display the User Data
// Pass the data to the component that will be displaying it
// Build out a user card using the data that the Github API returns to you
// You may reference your old project for this, or you may wish to build this from scratch yourself


// Fetch the User's Followers
// When your component mounts, you will also fetch the user's followers using this endpoint: 
// https://api.github.com/users/< Your github name >/followers
// Set that data to state as well, and display the data in your app



  // componentDidMount(){
  //   axios.get('https://api.github.com/users/aarongabriel147')
  //     .then(res =>  {
  //       // console.log(res.data)
  //       this.setState({ myData: res.data })
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  // }