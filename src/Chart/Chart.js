import React from 'react';

const chart = (props) => {
    const style = {
        display:'inline-block',
        padding: '16px',
        textAlign: 'center',
        margin: '16px',
        border:'1px solid black'
    };

    return(
        <div style={style} onClick={props.onClick}>
          {props.charactor}
        </div>
    );
}

export default chart;