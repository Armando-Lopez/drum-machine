import React from 'react';
import audioBanks from '../audios'
import Power from '../components/Power'
import Display from '../components/Display'
import DrumPad from '../components/DrumPad'

class DrumMachine extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            power: true,
            audios: audioBanks.bankOne.map(audio => audio)
        }
        this._power = this._power.bind(this);
    }

    componentDidMount() {

    }

    _power() {
        this.setState({
            power: !this.state.power
        })
    }

    render() {
        const { audios, power } = this.state;
        console.log(power);

        return (
            <section id="drum-machine">
                <Power onChange={this._power} power={power} />
                <Display />
                <div className="drum-pads">
                    {audios.map((audio, index) => (
                        <DrumPad audioId={audio.id} audiosrc={audio.url} text={audio.keyTrigger} key={index} keycode={audio.keyCode} power={power} />
                    ))}
                </div>
            </section>
        );
    }
}

export default DrumMachine;