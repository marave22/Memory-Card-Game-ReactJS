import React from 'react';
import './Cards.css';
import classNames from 'classnames';

class Cards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: this.props.value
        };
    }

    render() {
        let act = this.props.active ? 'active' : 'none';
        let classes = classNames(
            'flip-card',
            {'Card--noFlipped': !this.props.flipped},
            {'Card--flipped' : this.props.flipped},
        );

        return (
            <div className="container">
                <div className={classes + ' '+act} onClick={(e)=>this.props.handleClick(e)} data-id={this.props.dataId} value={this.props.value}>
                    <div className="front">X</div>
                    <div className="back">
                        <img src={this.props.value} alt="img"/>
                    </div>
                </div>
            </div>
        );
    }
}
export default Cards;