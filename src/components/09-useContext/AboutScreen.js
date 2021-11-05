import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { UserContext } from './UserContext'
 
export const AboutScreen = () => {

    const { user, setUser } = useContext(UserContext);
    const history = useHistory();

    const handleClick = () => {
        setUser({});
        history.replace('/login');
    }
    return (
        <div>
            <h1>About Screen</h1>
            <hr />
            <pre> { JSON.stringify(user, null, 3) } </pre>
            <button className="btn btn-warning" onClick={handleClick}> Logout </button>
        </div>
    )
}
