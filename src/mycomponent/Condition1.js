import React, {Component} from 'react';

class Condition1 extends Component {
    constructor() {
        super();
        this.state = {
            a: false
        }
    }

    render() {
        //     if (this.state.a==true){
        //         return (
        //             <div>
        //                 <button>Log out</button>
        //             </div>
        //         );
        //     }
        //     else{
        //         return (
        //             <div>
        //                 <button>Log in</button>
        //             </div>
        //         )
        //     }
        // }

        return (
            (this.state.a) ? <h1>i am first</h1> : <h2>I am second</h2>

        );
    }
}
export default Condition1;