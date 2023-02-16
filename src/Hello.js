const Hello = (props) => {

    return (<div className='container text-center'>
        <h1>Hello React... 😉</h1>
        <p>by susuSoft</p>
        <button className='btn btn-danger'>hmmm</button>
        <p>{props.udv}</p>
        <div>
            <form className="card m-2 p-4">
                <label>Enter your name:<br></br>
                    <input type="text" />
                </label><br></br>
                <label>Enter your password:<br></br>
                    <input type="password" />
                </label>
            </form>
        </div>
    </div>)

}
export default Hello