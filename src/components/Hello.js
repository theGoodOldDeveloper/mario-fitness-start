import { Link, Navigate } from "react-router-dom";

const Hello = (props) => {
    if (!localStorage.getItem('isLogin')) {
        localStorage.setItem('isLogin', '*')
        console.log('isLogin = *')
        return (
            <Navigate to={'/login'} />
        )
    }

    else {
        return (<div className='container text-center'>
            <img src="mario-fitness.jpg" alt="Márió Fitness" width="128" height="128"></img>
            <h3 className="card bg-light text-success mb-4 p-2" >Légy üdvözölve {localStorage.getItem('memberName')}! 😉</h3>
            <div className="card bg-light mb-4 p-2" >
                <h2 className="bg-info">HÉTFŐ</h2>
                <div className="d-flex justify-content-around">
                    <button className='btn btn-success m-1 '>TRX</button>
                    <button className='btn btn-success m-1'>TRX</button>
                </div>
            </div>
            <div className="card bg-light text-success mb-4 p-2" >
                <h2>KEDD</h2>
                <div className="d-flex justify-content-around">
                    <button className='btn btn-success m-1 '>TRX</button>
                    <button className='btn btn-success m-1 '>TRX</button>
                    <button className='btn btn-success m-1'>TRX</button>
                </div>
            </div>
            <Link to={'/login'} className='btn btn-success'>Jelentkezz be!</Link>
        </div>)
    }
}
export default Hello



/* <Link to={'/login'} >

            </Link>
 */

/* <Link to={'/login'} className='btn btn-success'>Jelentkezz be!</Link> */

/* const shoot = () => {
        alert("Great Shot! " + props.udv);
        console.log('props*******************' + props.udv)
    } */

/* <h4 className="mt-4">{props.udv}</h4>
    <h4 className="mb-4">{props.name}</h4> */
/* <div>
<form className="card m-2 p-4">
    <label>Enter your name:<br></br>
        <input type="text" />
    </label><br></br>
    <label>Enter your password:<br></br>
        <input type="password" />
    </label>
</form>
</div> */