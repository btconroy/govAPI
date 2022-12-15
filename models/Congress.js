const db = require('../utils/db');



// example given by congress.gov - https://api.congress.gov/v3/bill?api_key=<<mykey>>&format=json


const fetchMembers = fetch(`https://api.congress.gov/v3/member?api_key=${process.env.CONGRESS_API_KEY}&format=json`)
    .then(res => {
        res.json()
    })
    .then(data => {
        return data
    })
    .catch(err= console.log(err));


class Congress {

constructor(firstName, lastName, state) {
    const firstName = this.firstName;
    const lastName = this.lastName;
    const state = this.state;
}



}