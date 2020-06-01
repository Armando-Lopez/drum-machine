import React from 'react';
import audioBanks from '../audios'
import Power from '../components/Power'
import ChangeBank from '../components/ChangeBank'
import Display from '../components/Display'
import DrumPad from '../components/DrumPad'

class DrumMachine extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            power: true,
            switchBank: false,
            audios: null
        }
        this._power = this._power.bind(this);
        this._changeBank = this._changeBank.bind(this);
    }

    componentDidMount() {
        this._changeBank()
    }

    _power() {
        this.setState({
            power: !this.state.power
        })
    }

    _changeBank() {
        this.setState({
            switchBank: !this.state.switchBank
        });

        if (this.state.switchBank) {
            this.setState({
                audios: audioBanks.bankTwo
            });
        } else {
            this.setState({
                audios: audioBanks.bankOne
            });
        }
    }

    render() {
        const { audios, power, switchBank } = this.state;

        if (!audios) {
            return null
        }

        return (
            <section id="drum-machine">
                <Power onClick={this._power} power={power} />
                <ChangeBank onClick={this._changeBank} changebank={switchBank} />
                <Display />
                <div className="drum-pads">
                    {audios.map((audio, index) => (
                        <DrumPad audioId={audio.id} audiosrc={audio.url} text={audio.keyTrigger} key={index} keycode={audio.keyCode} power={power} />
                    ))}
                </div>
                <p>
                    Created By Diego López
                </p>
            </section>
        );
    }
}

export default DrumMachine;