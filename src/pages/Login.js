import React from "react";
import '../styles/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function Login() {
    return (<div className="login-container d-flex justify-content-center">
        <div className="login-wrapper d-flex flex-column flex-wrap justify-content-center m-5">
            <div className="greetings mx-auto text-white">
                <h1>Login to MicroTaskBidz</h1>
            </div>
            <div className="input-form mx-auto mt-5" >
                <form>
                    <div className="form-outline mb-4">
                        <label className="form-label text-white" for="emailInput">Email address</label>
                        <input type="email" id="emailInput" className="form-control" />
                    </div>
                    <div class="form-outline mb-4">
                        <label className="form-label text-white" for="password">Password</label>
                        <input type="password" id="password" className="form-control" />
                    </div>

                    <div class="row mb-4">
                        <div className="col d-flex justify-content-center">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="check" id="check-remember-me" />
                                <label className="form-check-label text-white" for="form2Example31"> Remember me </label>
                            </div>
                        </div>

                        <div className="col forget_pass_link">

                            <a href="#!" id="forget-pass">Forgot password?</a>
                        </div>
                    </div>
                    <div className="text-center">
                        <button type="button" className="btn btn-outline-light btn-lg mb-4">LOG IN</button>
                    </div>

                    <div className="text-center text-white">
                        <p>Not a member? <a href="/signup" className="text-light">Sign Up</a></p>
                    </div>
                </form>
            </div>
        </div>

    </div>);
}

export default Login;