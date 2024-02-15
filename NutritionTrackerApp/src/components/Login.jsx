function Login(){
    console.log(styles);
    return(
        <div >
            <h2>Login to fitness</h2>
            <form>
                <input type="email" name="name" placeholder="Enter email"/>
                <input type="password" name="pass" placeholder="Enter password"/>
                <button>Login</button>
            </form>
        </div>
    )
}
export default Login