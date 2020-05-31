import React from 'react';

class DrumPad extends React.Component {
    constructor(props) {
        super(props);

        this.audio = React.createRef();
        this._play = this._play.bind(this);
    }

    componentDidMount() {
        document.addEventListener("keydown", (ev) => {
            if (ev.keyCode === this.props.keycode) {
                this._play();
            }
        });
    }

    _play(ev) {
        if (this.props.power) {
            document.getElementById('display').innerText = this.props.audioId
            let audio = this.audio.current;
            audio.currentTime = 0;
            audio.play();
        }
    }

    render() {
        const { text, audiosrc } = this.props;

        return (
            <button id={text} className="drum-pad" onClick={this._play}>
                {text}
                <audio src={audiosrc} id={text} className="clip" ref={this.audio} />
            </button>
        )
    }
}

export default DrumPad;