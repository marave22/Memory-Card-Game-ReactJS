import React from 'react';
import Cards from  './Cards';
import './Board.css';

class Board extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            cards: [
                {classname: 'Card--noFlipped', id:1, img: '/images/angular2.png', isFlipped: true ,active:false},
                {classname: 'Card--noFlipped', id:2, img: '/images/babel.png', isFlipped: true ,active:false},
                {classname: 'Card--noFlipped', id:3, img: '/images/css3.png', isFlipped: true ,active:false},
                {classname: 'Card--noFlipped', id:4, img: '/images/html.png', isFlipped: true ,active:false},
                {classname: 'Card--noFlipped', id:5, img: '/images/nodejs.png', isFlipped: true ,active:false},
                {classname: 'Card--noFlipped', id:6, img: '/images/react.png', isFlipped: true ,active:false},
                {classname: 'Card--noFlipped', id:7, img: '/images/vue.png', isFlipped: true ,active:false},
                {classname: 'Card--noFlipped', id:8, img: '/images/gulp.png', isFlipped: true ,active:false},
                {classname: 'Card--noFlipped', id:9, img: '/images/yarn.png', isFlipped: true ,active:false},
                {classname: 'Card--noFlipped', id:10, img: '/images/angular2.png', isFlipped: true ,active:false},
                {classname: 'Card--noFlipped', id:11, img: '/images/babel.png', isFlipped: true ,active:false},
                {classname: 'Card--noFlipped', id:12, img: '/images/css3.png', isFlipped: true ,active:false},
                {classname: 'Card--noFlipped', id:13, img: '/images/html.png', isFlipped: true ,active:false},
                {classname: 'Card--noFlipped', id:14, img: '/images/nodejs.png', isFlipped: true ,active:false},
                {classname: 'Card--noFlipped', id:15, img: '/images/react.png', isFlipped: true ,active:false},
                {classname: 'Card--noFlipped', id:16, img: '/images/vue.png', isFlipped: true ,active:false},
                {classname: 'Card--noFlipped', id:17, img: '/images/gulp.png', isFlipped: true ,active:false},
                {classname: 'Card--noFlipped', id:18, img: '/images/yarn.png', isFlipped: true ,active:false}

            ],
            openedCards: [],
            keepCards: [],
            count:0
        };
    };

    shuffle = (a) => {
        let j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    };

    componentWillMount() {
        this.shuffle(this.state.cards);
        let {cards} = this.state;
        setTimeout(() => {
            cards.map((c) => c.isFlipped = !c.isFlipped);
            this.setState({cards})
        },2000)
    };

    handleClick = (e) => {
        e.preventDefault();
        let openedCards = this.state.openedCards;
        let keepCards = this.state.keepCards;
        let count = this.state.count +1;
        let id = e.target.getAttribute('data-id');
        let img = e.target.getAttribute('value');
        openedCards.push(img);
        let {cards} = this.state;
        cards.map((f) => f.id === +id ? f.isFlipped = !f.isFlipped : f.isFlipped);
        this.setState({cards,count});

            if (openedCards.length === 2) {
                if (openedCards[0] === openedCards[1]) {
                    keepCards.push(openedCards[0]);
                    keepCards.push(openedCards[1]);
                    cards.map((a) => (a.img === openedCards[0] && a.img === openedCards[1]) ? a.active = true : "");
                    openedCards.pop();
                    openedCards.pop();
                    this.setState({cards});
                }
                else {
                    setTimeout(() => {
                        cards.filter((f) => f.isFlipped = false);
                        this.setState({cards})
                    }, 1000);
                    openedCards.pop();
                    openedCards.pop();
                }
            }

        if (keepCards.length === 18) {
            alert("You Win!!");
        }
        this.setState({cards})
    };

    handleStart = () => {
        document.location.reload(true);
    };

    render() {
        let {cards} = this.state;
        return (
            <div className="playground">
                {cards.map((card, index) => {
                return (
                <Cards
                    key={index}
                    value={card.img}
                    open={this.state.openedCards}
                    keep={this.state.keepCards}
                    dataId={card.id}
                    flipped={card.isFlipped}
                    active={card.active}
                    handleClick={(e)=>this.handleClick(e)}/>
                    );
            })}
            <button className="restart btn" onClick={this.handleStart}>Start Again</button>
            </div>

        )
    }
}
export default Board;
