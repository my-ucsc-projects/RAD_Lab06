import React from "react";

class Timer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            time: 0
        }

        setInterval(() => this.updateTime(), 1000);
    }
    updateTime() {
        console.log(this.state.time);
        this.setState((state, props) => (

            {
                time: state.time+1

            }
        ))

    }
    render() {
        return (
            <div>
                <p>Timer: {this.state.time.toString()}</p>
            </div>
        );
    }
}



export default Timer;