
/* var Users = ['www']
var response = await fetch(`http://localhost:5002/users`);
Users = await response.json();
console.log('Users********************************************', Users)

export default Users */
getdata()
var Users = ['www']
async function getdata() {
    var response = await fetch(`http://localhost:5002/users`);
    Users = await response.json();
    //console.log('Users********************************************', Users)
}
export default Users