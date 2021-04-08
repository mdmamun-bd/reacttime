import React, {Component} from 'react';

class Jsonlist extends Component {

    render() {
        const mylist = [
            {
                "id": 1,
                "name": "Leanne Graham",
                "username": "Bret",
                "email": "Sincere@april.biz",
                "address": {
                    "street": "Kulas Light",
                    "suite": "Apt. 556",
                    "city": "Gwenborough",
                    "zipcode": "92998-3874",
                    "geo": {
                        "lat": "-37.3159",
                        "lng": "81.1496"
                    }
                }
            }

        ]
        const datalist = mylist.map(data => {
           return <option>{data.name}</option>
        })
        return (
            <div>
                <select>{datalist}</select>
            </div>
        );
    }
}

export default Jsonlist;