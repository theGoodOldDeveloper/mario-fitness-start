var tokenValid = '*'
if (localStorage.getItem('token')) {
    var TokenReturn = localStorage.getItem('token')
    console.log('token VAN', TokenReturn)
} else {
    localStorage.setItem('token', tokenValid)
    console.log('token NEMVAN')
}
export default TokenReturn