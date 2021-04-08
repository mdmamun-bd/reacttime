import React, {Component} from 'react';

class Welcome extends Component {
    Dothe(a){
        alert(a)
        
    }
    render() {
        return (
            <div>
                <button onClick={this.Dothe.bind(this,"i am from para")}>Clicked the button</button>
                <h1>
                Hello i am from class{this.props.name}
                </h1>
            </div>
        );
    }
}

export default Welcome;