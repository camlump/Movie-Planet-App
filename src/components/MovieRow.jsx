import React, { Component } from 'react'

export default class MovieRow extends Component {
    render() {
        return (
            <table key={this.props.movie.id}>
            <tbody>
              <tr>
                <td>
                  <img alt="poster" width="90" src={this.props.movie.poster_src}/>
     
                </td>
                <td>
                  {this.props.movie.title}
                <p>{this.props.movie.overview}</p>
                </td>
              </tr>
            </tbody>
    
          </table>
        )
    }
}
