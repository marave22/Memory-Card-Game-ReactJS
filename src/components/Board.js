import React from 'react';
import Card from './Card';
import './Board.css';

class Board extends React.Component {
    render() {
        return (
            <div>
                <Card />
                <Card />
            </div>
        )
    }
};

export default Board;