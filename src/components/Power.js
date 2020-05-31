import React from 'react';

const Power = ({ onChange, power }) => {
    return (
        <div className="power">
            <div className="switch" onClick={onChange} >
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