import React from 'react';

export default class extends React.Component{
    state = {
        count:0
    }
    inc = () => {
        this.setState({count:this.state.count + 1});
    }

    dec = () => {
        this.setState({count:this.state.count - 1});
    }
    render(){
        return (
            <div>
                <h2>Count: {this.state.count}</h2>
                <button onClick={this.dec}>dec</button>
                <button onClick={this.inc}>inc</button>
            </div>
        );
    }
}