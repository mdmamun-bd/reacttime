import React, {Component} from 'react';

class Changestate extends Component {
    constructor() {
        super();
        this.state={
            name :"mamun"
        }
    }
    Onchange(a){
        this.setState({name:a})
    }
    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <button className="btn btn-outline-primary m-5" onClick={this.Onchange.bind(this,"rain")}>Click to Change</button>
            </div>
        );
    }
}

export default Changestate;
