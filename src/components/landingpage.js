import React, { Component } from 'react';

export class LandingPage extends Component {
    render() {
        return (
            <div className="container">
                <h1 class="well" id="title">Hi, My Name's Max</h1>

                <br />
                <div class="myBorder">
                    <i id="myIcon" class="fa fa-smile-o fa-3x"></i>

                    <p id="subHeader">What can I create for you today?</p>

                    <p>
                        My passion is everything <em><b><strong>web design</strong></b></em>. I have experience in HTML, CSS, JavaScript, and Bootstrap. Please browse below and check out some of my projects. I hope you experience some of the wonder at the emerging technologies of web development as I did during their creations.
                    </p>
                </div>
                <br />
            </div>

        );
    }
}

