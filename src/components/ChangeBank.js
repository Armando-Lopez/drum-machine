import React from 'react';

const ChangeBank = ({ onClick, changebank }) => {
    return (
        <div className="switch-bank">
            <div className="switch" onClick={onClick} >
                {changebank ?
                    <div className="button button-left"></div>
                    :
                    <div className="button button-right"></div>
                }
            </div>
            <br />
            Bank: {changebank ? 'Heater Kit' : 'Smooth Piano Kit'}
        </div>
    )
}

export default ChangeBank;