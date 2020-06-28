import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

class Square extends React.Component {
    render() {
        // this.props.content can be
        // - null : square empty
        // - 'O', 'X' according to which one played this square before
        
        return (
            <button className="square" onClick={() => {
                console.log('square clicked');
                this.props.onPlay();
            }}>
                {this.props.content}
            </button>
        );
    }
}

class Board extends React.Component {
    state = {
        squares: [
            null, null, null,
            null, null, null,
            null, null, null,
        ],
        // or Array(9).fill(null)
        currentPlayer: 'X',
        winner: null,
    };
    
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('UPDATE');
        const squares = this.state.squares;
        
        //Winner logic
        //we check that the winner is not already defined. We don't want to compute that again
        if (this.state.winner === null) {
            let winner = null;
            //horizontal cases
            for (let a=0; a<9; a+=3) {
                if (squares[a+0] !== null && squares[a+0] === squares[a+1] && squares[a+1] === squares[a+2]) {
                    winner = squares[a+0];
                }
            }
            //vertical cases
            for (let a=0; a<3; a+=1) {
                if (squares[a+0] !== null && squares[a+0] === squares[a+3] && squares[a+3] === squares[a+6]) {
                    winner = squares[a+0];
                }
            }
            //diagonal cases
            if (squares[0] !== null && squares[0] === squares[4] && squares[4] === squares[8]) {
                winner = squares[0];
            }
            if (squares[2] !== null && squares[2] === squares[4] && squares[4] === squares[6]) {
                winner = squares[2];
            }
            
            //If we found a winner, we update the state
            if (winner !== null) {
                console.log('winner', winner);
                this.setState({
                    winner: winner
                });
            }
        }
    }
    
    renderSquare(i) {
        return <Square content={this.state.squares[i]} onPlay={() => {
            const newState = { ...this.state };
            newState.squares = newState.squares.slice();
            // Or (quick & dirty)
            // const newState = JSON.parse(JSON.stringify(this.state));
    
            // To check that you actually have a copy :
            //  console.log(newState === this.state);
            //  console.log(newState.squares === this.state.squares);
            // Make sure both return false !
            
            if (this.state.winner === null && newState.squares[i] === null) {
                newState.squares[i] = this.state.currentPlayer;
    
                //Update the currentPlayer
                const isX = this.state.currentPlayer === 'X';
                if (isX) {
                    newState.currentPlayer = 'O';
                }
                else {
                    newState.currentPlayer = 'X';
                }
    
                this.setState(newState);
            }
        }} />;
    }
    
    render() {
        const status = `Next player: ${this.state.currentPlayer}`;
        
        return (
            <div>
                <div className="status">{status}</div>
                {this.state.winner ? (
                    <div>Winner : {this.state.winner}</div>
                ) : null}
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
