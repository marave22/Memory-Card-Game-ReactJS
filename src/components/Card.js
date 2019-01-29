import React from 'react';
import './Card.css';

class Card extends React.Component{

    state = {
        images:[
            {
                name: 'img_1.png',
                isFlipped: false,
            },
            {
                name: 'img_2.png',
                isFlipped: false,
            },
            {
                name: 'img_3.png',
                isFlipped: false,
            },
            {
                name: 'img_4.png',
                isFlipped: false,
            },
            {
                name: 'img_5.png',
                isFlipped: false,
            },
            {
                name: 'img_6.png',
                isFlipped: false,
            },
        ]
    };

    handleClick = (event) => {
        for (let i = 0; i < this.state.images.length; i++) {
            event.preventDefault();
            this.setState({
                isFlipped: !this.state.images[i].isFlipped
            })
        }
    };

    render() {
        // let isFlipped;
        // let path = '/images/';
        // let src;
        // let image;
        // for (let i = 0; i < this.state.images.length; i++) {
        //     isFlipped = this.state.images[i].isFlipped;
        //     image = `img_${i}`;
        //     src = path + image;
        // }

        return (
            <div className="container">
                <div className="row">
                    <div className="col-2 p-2">
                        <div className="flip-card">
                            <div className="front-side"
                                 onClick={this.handleClick}
                                 style={(this.state.images[0].isFlipped ? {transform: "rotateY(0deg)", transformStyle: "preserve-3d"} : {transform: "rotateY(180deg)", transformStyle: "preserve-3d"})}>
                                 <img src="/images/img_2.png" alt="HTML" className="front-side-image" style={{transform: "rotateY(180deg)"}}/>
                            </div>
                            <div className="back-side"
                                 onClick={this.handleClick}
                                 style={(this.state.images[0].isFlipped ? {transform: "rotateY(0deg)", transformStyle: "preserve-3d"} : {transform: "rotateY(180deg)", transformStyle: "preserve-3d"})}></div>
                        </div>
                    </div>
                    <div className="col-2 p-2">
                        <div className="flip-card">
                            <div className="front-side"
                                 onClick={this.handleClick}>
                                <img src="/images/img_1.png" alt="CSS" className="front-side-image" style={{transform: "rotateY(180deg)"}}/>
                            </div>
                            <div className="back-side"
                                 onClick={this.handleClick}></div>
                        </div>
                    </div>
                    <div className="col-2 p-2">
                        <div className="flip-card">
                            <div className="front-side"
                                 onClick={this.handleClick}>
                                <img src="/images/img_3.png" alt="JavaScript" className="front-side-image" style={{transform: "rotateY(180deg)"}}/>
                            </div>
                            <div className="back-side"
                                 onClick={this.handleClick}></div>
                        </div>
                    </div>
                    <div className="col-2 p-2">
                        <div className="flip-card">
                            <div className="front-side"
                                 onClick={this.handleClick}>
                                <img src="/images/img_4.png" alt="NodeJS" className="front-side-image" style={{transform: "rotateY(180deg)"}}/>
                            </div>
                            <div className="back-side"
                                 onClick={this.handleClick}></div>
                        </div>
                    </div>
                    <div className="col-2 p-2">
                        <div className="flip-card">
                            <div className="front-side"
                                 onClick={this.handleClick}>
                                <img src="/images/img_5.png" alt="ReactJS" className="front-side-image" style={{transform: "rotateY(180deg)"}}/>
                            </div>
                            <div className="back-side"
                                 onClick={this.handleClick}></div>
                        </div>
                    </div>
                    <div className="col-2 p-2">
                        <div className="flip-card">
                            <div className="front-side"
                                 onClick={this.handleClick}>
                                <img src="/images/img_6.png" alt="VueJS" className="front-side-image" style={{transform: "rotateY(180deg)"}}/>
                            </div>
                            <div className="back-side"
                                 onClick={this.handleClick}></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;