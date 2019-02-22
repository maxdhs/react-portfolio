import React, { Component } from 'react';

export class AboutMe extends Component {
    render() {
        return (
            <div>
                <blockquote class="bg-info myBorder">
                    <div class="row">
                        <div class="col-xs-3">
                            <h4><em><strong>About me:</strong></em></h4>
                            <span id="emoticon">¯\_(ツ)_/¯</span>
                            <a href="http://www.github.com/maxdhs">Github.com/maxdhs</a>
                        </div>
                        <div class="col-xs-8">
                            <ol class="text-muted">
                                <li><i class="fa fa-graduation-cap"></i><u>Education:</u>Bachelor's of Science,
                      Rutgers University</li>
                                <li><i class="fa fa-book"></i><u>Experience</u>: Enthusiastic Epicodus student!</li>
                                <li><i class="fa fa-bicycle"></i><u>Hobbies:</u> Coding, Anime,
                      Mountain Biking, and Gaming</li>
                            </ol>
                        </div>
                    </div>
                </blockquote>
            </div>
        );
    }
}
