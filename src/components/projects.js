import React, { Component } from 'react';
import wiki from '../img/wiki.png';
import cthulhu from '../img/cthulhu.png';
import italy from '../img/italy.png'

export class Projects extends Component {
    render() {
        return (
            <div className="container">
                <div class="row well">
                    <div class="myCol col-xs-4">
                        <a href="https://github.com/maxdhs/wiki"><img src={wiki} alt="wikipedia logo" width="150" /></a>
                        <br></br>
                        <p>Cloning a Wikipedia page was a great way to learn some Bootstrap. Compare my <a href="https://github.com/maxdhs/wiki">cloned page </a>to the actual page and try to spot the differences!
            <br></br>
                            <footer>
                                <ul><u>Language used</u>
                                    <li>Bootstrap</li>
                                    <li>HTML</li> </ul></footer>

                        </p>
                    </div>

                    <div class="myCol col-xs-4">
                        <a href="https://github.com/maxdhs/cthulu"><img src={cthulhu} alt="cthulhu" width="165" /></a>
                        <br></br>
                        <p>Everyone deserves love. That's why I made a <a href="https://github.com/maxdhs/cthulu">tinder webpage
              </a>for our Dark lord, Cthulhu himself. Will you swipe right and win his heart?
              <br></br>
                            <footer>
                                <ul><u>Languages used</u>
                                    <li>Bootstrap</li>
                                    <li>HTML</li>
                                </ul>
                            </footer>
                        </p>
                    </div>

                    <div class="myCol col-xs-4">
                        <a href="https://github.com/maxdhs/vacation"><img src={italy} width="220" /></a>
                        <br></br>
                        <p>
                            My <a href="https://github.com/maxdhs/vacation">blog</a> of my amazing trip to Venice that I haven't gone to just yet. Explore the wonders of the canals as if you were there yourself...
              <br></br>
                            <footer>
                                <ul><u>Languages used</u>
                                    <li>Bootstrap</li>
                                    <li>HTML</li>
                                </ul>
                            </footer>
                        </p>

                    </div>

                </div>
            </div>

        );
    }
}

