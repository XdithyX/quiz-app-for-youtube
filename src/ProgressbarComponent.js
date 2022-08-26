import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';
const ProgressbarComponent = (props) => {
    
    return (
        <ProgressBar now={props.value} />);
}

export default ProgressbarComponent