import React, { Component } from 'react';
import wiki from '../img/wiki.png';
import cthulhu from '../img/cthulhu.png';
import italy from '../img/italy.png'

export class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            wikiShowing: false,
            cShowing: false,
            italyShowing: false
        };
        this.handleWiki = this.handleWiki.bind(this);
        this.handleC = this.handleC.bind(this);
        this.handleItaly = this.handleItaly.bind(this);
    }

    handleWiki() {
        this.setState({
            wikiShowing: !this.state.wikiShowing
        })

    }

    handleC() {
        this.setState({
            cShowing: !this.state.cShowing
        })

    }

    handleItaly() {
        this.setState({
            italyShowing: !this.state.italyShowing
        })

    }
    render() {
        return (
            <div className="container">
                <div class="row well">
                    <div onClick={this.handleWiki} class="myCol col-xs-4">
                        <img src={wiki} alt="wikipedia logo" width="150" />
                        <br></br>
                        {this.state.wikiShowing && (<p>Cloning a Wikipedia page was a great way to learn some Bootstrap. Compare my <a href="https://github.com/maxdhs/wiki">cloned page </a>to the actual page and try to spot the differences!
            <br></br>
                            <footer>
                                <ul><u>Language used</u>
                                    <li>Bootstrap</li>
                                    <li>HTML</li> </ul></footer>

                        </p>)}
                    </div>

                    <div onClick={this.handleCthulu} class="myCol col-xs-4">
                        <img src={cthulhu} alt="cthulhu" width="165" />
                        <br></br>
                        {this.state.cShowing && (<p>Everyone deserves love. That's why I made a tinder webpage
              for our Dark lord, Cthulhu himself. Will you swipe right and win his heart?
              <br></br>
                            <footer>
                                <ul><u>Languages used</u>
                                    <li>Bootstrap</li>
                                    <li>HTML</li>
                                </ul>
                            </footer>
                        </p>)}
                    </div>

                    <div class="myCol col-xs-4">
                        <img onClick={this.handleItaly} src={italy} width="220" />
                        <br></br>
                        {this.state.italyShowing && (<p>
                            My <a href="https://github.com/maxdhs/vacation">blog</a> of my amazing trip to Venice that I haven't gone to just yet. Explore the wonders of the canals as if you were there yourself...
              <br></br>
                            <footer>
                                <ul><u>Languages used</u>
                                    <li>Bootstrap</li>
                                    <li>HTML</li>
                                </ul>
                            </footer>
                        </p>)}

                    </div>

                </div>
            </div>

        );
    }
}

