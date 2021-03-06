import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import MovieRow from './components/MovieRow.jsx'
import $ from 'jquery'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {}
    // console.log('This is my initializer')

    // const movies = [
    //   {id: 0, title: 'Avengers', poster_src: 'https://images-na.ssl-images-amazon.com/images/I/A1t8xCe9jwL._AC_SL1500_.jpg', overview: 'First movie on the list avengers'},
    //   {id: 2, title: 'Black Panther', poster_src: 'https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/black-panther-web.jpg', overview: 'Second movie on the list avengers'}
    // ]
    // const movieRows= []

    // movies.forEach((movie)=>{
    //   console.log(<MovieRow />)
    //   const movieRow = <MovieRow movie={movie}/>
      
    //   movieRows.push(movieRow)
    // })

    // this.state = {rows: movieRows}

    this.performSearch("avengers")
  }

  performSearch(searchTerm){
    console.log("peform search using moviedb")
    const urlString = "https://api.themoviedb.org/3/search/movie?api_key=2009fdebc0560f2e920e83972fae2525&query=" + searchTerm
    $.ajax({
      url: urlString,
      success: (searchResults) => {
        console.log("Fetched data successfully")
        console.log(searchResults)
        const results = searchResults.results
        // console.log(results[0])

        let movieRows = []


        results.forEach((movie)=>{
          movie.poster_src =" https://image.tmdb.org/t/p/w185/" + movie.poster_path
          // console.log(movie.poster_path)
          const movieRow = <MovieRow key={movie.id} movie={movie}/>
          movieRows.push(movieRow)
        })
       this.setState({rows: movieRows})

      },
      error: (xhr, status, err) => {
        console.error("Failed to fetch data")
      }

    })

  }

  searchChangeHandler(event){
    console.log(event.target.value)
    const boundObject= this
    const searchTerm = event.target.value
    boundObject.performSearch(searchTerm)
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
      }} onChange={this.searchChangeHandler.bind(this)} placeholder="Enter search term"/>

      
      {this.state.rows}
      
      </div>
    );
  }
}

export default App;
