import React from 'react'

function Hello(props){
    function Dothis(){
        alert("i am from class")
    }

    return(
        <div>
            <button onClick={Dothis}>Clicked ME</button>
            <h1>Hello i am from component {props.name}</h1>
        </div>

    );
}
export default Hello;
