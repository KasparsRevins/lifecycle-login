import { useState } from "react";


function SignUp() {
    const [state, setState] = useState({})

    const updateState = (e) => {
        state [e.target.id] =  e.target.value
        setState({...state})
    }

    const getData = () => {
        console.log(state)
    }

    return (
        <div>
            <h3>{state.userName}</h3>
            <br/> 
            Name <input id="userName" onChange={updateState}/>
            Surname <input id="userSurname" onChange={updateState}/>
            Password <input id="userPassword" onChange={updateState}/>
            <button onClick={getData}>Submit</button>
        </div>
    )
}

export default SignUp