import React from 'react';

class DrumPad extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            audio: undefined
        }
        this._play = this._play.bind(this);
    }

    componentDidMount() {
        this.setState({
            audio: this.props.audio
        })
    }

    _play() {
        const audio = document.getElementById(this.state.audio.keyTrigger)
        audio.currentTime = 0;
        audio.play();
    }

    render() {
        const { audio } = this.state;
        if (!audio) {
            return null
        }

        return (

            <div name={audio.id} className="drum-pad">
                <button onClick={this._play}>
                    {audio.keyTrigger}
                </button>
                <audio id={audio.keyTrigger} src={audio.url} className="clip"></audio>
            </div>
        );
    }
}

export default DrumPad;