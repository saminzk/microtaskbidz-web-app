import React from "react";

function SignUp() {
    return (<div className="signup-container d-flex justify-content-center">
        <div className="signup-wrapper d-flex flex-column flex-wrap justify-content-center m-5">
            <div className="signup-greetings text-white mx-auto">
                <h1>Sign Up</h1>
            </div>
            <div className="signup-form p-5">
                <form>
                    <div className="form-outline mb-4">
                        <label className="form-label text-white" for="textInput1">First Name</label>
                        <input type="text" id="textInput1" className="form-control" placeholder="Enter your first name" />
                    </div>
                    <div className="form-outline mb-4">
                        <label className="form-label text-white" for="textInput2">Last Name</label>
                        <input type="text" id="textInput2" className="form-control" placeholder="Enter your last name" />
                    </div>
                    <div className="form-outline mb-4">
                        <label className="form-label text-white" for="emailInput">Email address</label>
                        <input type="email" id="emailInput" className="form-control" placeholder="example: john.doe@microtaskbidz.com" />
                    </div>
                    <div class="form-outline mb-4">
                        <label className="form-label text-white" for="password">Password</label>
                        <input type="password" id="password" className="form-control" placeholder="enter a password" />
                    </div>
                    <div className="text-center">
                        <button type="button" className="btn btn-outline-light btn-lg mb-4">SIGN UP</button>
                    </div>

                    <div className="text-center text-light">
                        <p>Already a member? <a href="/login" id="sign-up-sugg">Log In</a></p>
                    </div>
                </form>
            </div>
        </div>
    </div>);
}

export default SignUp;