import React, {Component} from 'react';



class Validation extends Component {
constructor() {
    super();
    this.state={
        fname:'',
        lname:'',
        email:'',
        mobile:''

    }
}
onchangeHandler=(event)=>{
    var element = event.target.name
    var collect = event.target.value
    this.setState({[element]:collect})

    if (element ==='fname'){
      var  namepattern="[a-z]{1,15}";

        if(!namepattern.test(collect)){
            this.setState({fname:"this is not valid"})
        }
    }
}

    render() {
        return (
            <div>
                <p>my name first name is:{this.state.fname}</p>
                <p> my last name is:{this.state.lname}</p>
                <p>My email{this.state.email}</p>
                <p> my Mobile:{this.state.mobile}</p>
                <form>
                    <input onChange={this.onchangeHandler} type="text" name="fname" placeholder="Firstname"></input><br></br>
                    <input onChange= {this.onchangeHandler} type="text" name="lname" placeholder="Lastname"></input><br></br>
                    <input onChange={this.onchangeHandler} type="text" name="email" placeholder="Email"></input><br></br>
                    <input onChange={this.onchangeHandler} type="text" name="mobile" placeholder="Mobile No"></input><br></br>
                    <input type="submit" name="submit" value="Submit Now"></input><br></br>


                </form>
            </div>
        );
    }
}

export default Validation;