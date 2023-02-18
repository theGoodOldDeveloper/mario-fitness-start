const Hello = (props) => {

    const shoot = () => {
        alert("Great Shot!");
    }
    return (<div className='container text-center'>
        <h1 className="mt-4">Hello World... 😉</h1>
        <img src="mario-fitness.jpg" alt="Márió Fitness" width="128" height="128"></img>
        <h3 className="card bg-light text-success mb-4 p-2" >Ha már használtad ezt az applikációt akkor...</h3>
        <button className='btn btn-success' onClick={shoot}>Jelentkezz be!</button>
        <h4 className="m-4">{props.udv}</h4>
        {/* <div>
            <form className="card m-2 p-4">
                <label>Enter your name:<br></br>
                    <input type="text" />
                </label><br></br>
                <label>Enter your password:<br></br>
                    <input type="password" />
                </label>
            </form>
        </div> */}
    </div>)

}
export default Hello