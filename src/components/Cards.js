import React from 'react';
import './Cards.css';
import classNames from 'classnames';

class Cards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: this.props.value,
            openedCards: this.props.open,
            keepCards: this.props.keep,
            flipped: this.props.flipped
        };
    }

    componentWillMount() {
        setTimeout(() => {
            this.setState({
                flipped: !this.state.flipped
            })
        }, 3000)
    }

    handleClick = (e) => {
        e.preventDefault();
        let flipped = this.state.flipped;
        let openedCards = this.state.openedCards;
        let keepCards = this.state.keepCards;
        this.setState({
            flipped: !flipped
        });
        if (!this.state.flipped) {
            openedCards.push(this.props.value);
            if (openedCards.length === 2) {
                if (openedCards[0] === openedCards[1]) {
                    keepCards.push(openedCards[0]);
                    keepCards.push(openedCards[1]);
                    openedCards.pop();
                    openedCards.pop();
                } else {
                    setTimeout(() => {
                        this.setState({
                            flipped: !this.state.flipped
                        });
                        openedCards.pop();
                        openedCards.pop();
                    }, 600);
                }
            }
        }
        this.setState({
            keepCards: keepCards
        });
        if (keepCards.length === 14) {
            alert("You win! Start again? Press Button");
        }
    };

    render() {
        let classes = classNames(
            'flip-card',
            {'Card--noFlipped': !this.state.flipped},
            {'Card--flipped' : this.state.flipped}
        );

        return (
            <div className="container">
                <div className={classes} onClick={(e) => this.handleClick(e)}>
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