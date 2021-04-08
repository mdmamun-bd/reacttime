import React, {Component} from 'react';
import ReactDOM from 'react-dom';
class Render extends Component {

    Onclickme(){
     let  mycontainer = document.getElementById("myId")
        let element = <h1>this is saznila</h1>
        ReactDOM.render(element,mycontainer)
    }
    render() {
        return (
            <div>
                <button onClick={this.Onclickme}>Click me to change</button>
                <h1 id="myId">This is mamun</h1>
            </div>
        );
    }
}

export default Render;