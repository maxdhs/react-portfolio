import React, { Component } from 'react';
import resume from '../img/resume.png'

class Resume extends Component {
    render() {
        return(
            <div >
              <img className="resume" src={resume} />
            </div>
        );
    }
}

export default Resume;