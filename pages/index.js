import React from 'react'
import Layout from '../components/Layout'
const qs = require('querystring')
const Gun = require('gun/gun')

const gun = Gun('https://gunjs.herokuapp.com/gun')

export default class Index extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      number: 0
    }
    this.addOne = this.addOne.bind(this)
    this.subtractOne = this.subtractOne.bind(this)
  }

  async componentDidMount () {
    const query = qs.parse(window.location.search.replace('?', ''))
    const board = query.board || Math.random().toString(36).slice(2)
    const location = /board/.test(window.location) ? window.location : `${window.location}?board=${board}`
    this.setState({board: board, location: location})
    gun.get(board).on(state => {
      if (state !== undefined) {
        Object.keys(state).filter(key => key !== '_').forEach(key => {
          const updatedState = {[key]: state[key]}
          this.setState(updatedState)
        })
      }
    }, true)
  }

  addOne () {
    const board = this.state.board
    const number = this.state.number
    const newNumber = number + 1
    this.setState({number: newNumber})
    gun.get(board).put({number: newNumber})
  }

  subtractOne () {
    const board = this.state.board
    const number = this.state.number
    const newNumber = number - 1
    this.setState({number: newNumber})
    gun.get(board).put({number: newNumber})
  }

  render () {
    return (
      <Layout>
        <div>
          <h1>gun Next.js example</h1>
          <h2>{this.state.number}</h2>
          <button onClick={this.subtractOne}>Subtract 1</button>
          <button onClick={this.addOne}>Add 1</button>
          <p>
            <a href={this.state.location}>{`${this.state.location}`}</a>
          </p>
        </div>
        <style jsx>
          {`
            h2 {
              color: red;
              font-size: 48px;
              text-align: center;
            }
            a, a:visited {
              color: white;
            }
            button {
              background-color: white;
              border-radius: 2px;
              color: black;
              padding: 15px 32px;
              text-align: center;
              text-decoration: none;
              display: inline-block;
              font-size: 16px;
              width: 150px;
              margin: 10px;
              cursor: pointer;
            }
            button:focus {
              outline:0;
            }
            
            button:active {
              outline: 0;
            }
          `}
        </style>
      </Layout>
    )
  }
}
