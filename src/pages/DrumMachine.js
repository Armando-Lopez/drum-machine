import React from 'react';
import audioBanks from '../audios'
// import DrumPad from '../components/DrumPad';


class ButtonBox extends React.Component {
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
        document.getElementById('display').innerText = this.props.audioId
        let audio = this.audio.current;
        audio.currentTime = 0;
        audio.play();
    }

    render() {
        const { text, audiosrc } = this.props;

        return (
            <div id={text} className="drum-pad" onClick={this._play}>
                {text}
                <audio src={audiosrc} id={text} className="clip" ref={this.audio} />
            </div>
        )
    }
}


class DrumMachine extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            audios: audioBanks.bankOne.map(audio => audio)
        }
    }
    render() {
        const { audios } = this.state;

        return (
            <section id="drum-machine">
                <div id="display"></div>
                {audios.map((audio, index) => (
                    <ButtonBox audioId={audio.id} audiosrc={audio.url} text={audio.keyTrigger} key={index} keycode={audio.keyCode} />
                ))}
            </section>
        );
    }
}

export default DrumMachine;