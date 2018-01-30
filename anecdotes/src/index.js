import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 0,
      votes: [0, 0, 0, 0, 0, 0]
    }
  }

  changeSelected = () => {
    this.setState({
      selected: Math.floor(Math.random() * 6)
    })
  }

  voteForSelected = () => {
    let votesArray = this.state.votes
    votesArray[this.state.selected] += 1
      
    this.setState({
      votes: [...votesArray]      
    })
  }

  mostVotes = () =>  {
    let votesArray = this.state.votes
    
    let maxVotes = Math.max(...votesArray)
    let index = votesArray.indexOf(maxVotes)
    
    return [index, maxVotes]
  }

  render() {
    let mostVotedIndexAndVotes = this.mostVotes()
      
    return (
      <div>
        {this.props.anecdotes[this.state.selected]}
        <Votes numberOfVotes={this.state.votes[this.state.selected]} />
        <Button action={this.voteForSelected} text='vote' />
        <Button action={this.changeSelected} text='next anecdote' />
        <MostVotes 
          anecdote={this.props.anecdotes[mostVotedIndexAndVotes[0]]}
          maxVotes={mostVotedIndexAndVotes[1]} />
      </div>
    )
  }
}

const Votes = (props) => {
  return (
    <div>
      <p>has {props.numberOfVotes} votes</p>
    </div>
  )
}

const Button = (props) => {
  return (
    <div>
      <button onClick={props.action}> {props.text} </button>
    </div>
  )
}

const MostVotes = (props) => {
  return (
    <div>
      <h1>Anecdote with most votes:</h1>
      <p>{props.anecdote}</p>
      <p>It has {props.maxVotes} votes.</p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
