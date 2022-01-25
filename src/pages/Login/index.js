import './styles.css'

const Login = () => {
    return (
        <form className='mx-auto border p-2 m-2' id="login-form">
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                <input type="username" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">We'll never share your username with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}

export default Login;
