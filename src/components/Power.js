import React from 'react';

const Power = ({ onClick, power }) => {
    return (
        <div className="power">
            <div className="switch" onClick={onClick} >
                {power ?
                    <div className="button button-left"></div>
                    :
                    <div className="button button-right"></div>
                }
            </div>
            <br />
            Drum Machine is {power ? 'On' : 'Off'}
            <hr />
        </div>
    )
}

export default Power;