import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './footer.css'



const Footer = () => {
    return (<div className="row footer-container d-flex justify-content-space-center">
        <div className="row footer-wrapper d-flex justify-content-space-around">
            <div className="col feedback-part m-5">
                <div className="feedback-text">
                    <h2>Please provide your feedback</h2>
                    <p>We need your valueable feedback for imporving our services</p>
                </div>
                <div className="feedback-form">
                    <form>
                        <div className="form-group">
                            <label for="exampleInputEmail1" className="labelTxt">Email address</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter email" />
                        </div>
                        <div className="form-group">
                            <label for="exampleInputName1" className="labelTxt">Name</label>
                            <input type="text" className="form-control" id="exampleInputName1" placeholder="Enter your name" />
                        </div>
                        <div className="form-group">
                            <label for="exampleInputText2" className="labelTxt">Phone</label>
                            <input type="text" className="form-control" id="exampleInputText2" placeholder="Enter your phone number" />
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlTextarea1" className="labelTxt">Message</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
            <div className="col footer-part2 m-5">
                <div className="Address-box m-3">
                    <h4>Address 01</h4>
                    <h5>Rain Design</h5>
                    <p>Silver Tower
                        123/45. There are many variations of passages
                        12, Jumpton Road, South Avenue. New Jersey, NA.
                        Ph. (123) 456 789
                        Email: help@raindesign.com</p>
                </div>
                <div className="Address-box m-3">
                    <h4>Address 02</h4>
                    <h5>Rain Design</h5>
                    <p>
                        Rain Design
                        Alvin Plaza
                        45. There are many variations of passages
                        12, Jumpton Road, New Jersey, NA.
                        Ph. (123) 456 789
                        Email: help@raindesign.com
                    </p>
                </div>
            </div>
            <div className="row copyright-txt mt-3 d-flex justify-content-center" >
                &copy; 2023 Rain Design. All rights reserved.
                Made by: Rain Group of Company.
                Privacy Policy | Terms and Conditions
            </div>
        </div>

    </div>)
}

export default Footer;