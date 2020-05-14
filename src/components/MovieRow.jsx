import React, { Component } from 'react'

export default class MovieRow extends Component {
    viewMovie(){
        // console.log("trying to view movie")
        // console.log(this.props.movie.title)
        const url = "https://www.themoviedb.org./movie/" + this.props.movie.id
        window.location.href = url
    }
    render() {
        return (
            <table key={this.props.movie.id}>
            <tbody>
              <tr>
                <td>
                  <img className="posterImg" alt="poster" width="90" src={this.props.movie.poster_src}/>
     
                </td>
                <td>
                  <h3 className="movieTitle">{this.props.movie.title}</h3>
                <p>{this.props.movie.overview}</p>
                <input type="button" onClick={this.viewMovie.bind(this)} value="view" target="blank"/>
                </td>
              </tr>
            </tbody>
    
          </table>
        )
    }
}
