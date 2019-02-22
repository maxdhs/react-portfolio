import React, { Component } from 'react';
import resume from '../img/resume.docx'

class Resume extends Component {
    render() {
        return(
            <div>
              <img src={resume} />
            </div>
        );
    }
}

export default Resume;