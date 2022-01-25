import { useState } from "react";
import "./styles.css";

const Login = ({ setUser }) => {
    //GOAL: once user click submit we will mimic logging in and conditionally render our nav bar
    const [userName, setUserName] = useState('');
    const handleChange = (e) => {
        setUserName(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setUser(userName);
    };

    // console.log('props', setUser())
    // console.log('state in login', userName)
    return (
        <form
            className="mx-auto border p-2 m-2"
            id="login-form"
            onSubmit={handleSubmit}
        >
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                    Username
                </label>
                <input
                    type="username"
                    className="form-control"
                    id="exampleInputUser1"
                    aria-describedby="emailHelp"
                    value={userName}
                    onChange={handleChange}
                />
                <div id="emailHelp" className="form-text">
                    We'll never share your username with anyone else.
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                </label>
                <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                />
            </div>

            <button type="submit" className="btn btn-primary">
                Submit
            </button>
        </form>
    );
};

export default Login;
