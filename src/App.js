import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    console.log('This is my initializer')

    const movies = [
      {id: 0, title: 'Avangers', overview: 'First movie on the list avengers'},
      {id: 2, title: 'Iron Man', overview: 'Second movie on the list avengers'}
    ]
    const movieRows= []

    movies.forEach((movie)=>{
      console.log(movie.title)
      const movieRow = <table>
        <tbody>
          <tr>
            <td>
              <img alt="poster" src=""/>
 
            </td>
            <td>
              {movie.title}
            </td>
          </tr>
        </tbody>

      </table>
      movieRows.push(movieRow)
    })

    this.state = {rows: movieRows}
  }

  render(){
    return (
      <div className="App">
      
      <table className="titleBar">
        <tbody>
          <tr>
            <td>
            <img width="55" src="https://i.imgur.com/0l0AoTJ.png" alt="Movie planet img"/>
            </td >
            <td width="8"/>
            <td >
            <h2>Movie Planet Search</h2>
            </td>
          </tr>
        </tbody>
      </table>
      <input style={{
        fontSize: 24,
        display: 'block',
        width: "99%",
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 16
      }} placeholder="Enter search term"/>

      
      {this.state.rows}
      
      </div>
    );
  }
}

export default App;
