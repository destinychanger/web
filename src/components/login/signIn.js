import React, { Component } from 'react';
//import NewRegistration from './newRegistration'
import { Formik, Field, Form, ErrorMessage } from 'formik';
//import { useFormik } from 'formik';
import * as Yup from 'yup';

import './login.css'

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      numberSection : true,
      otpSection : false,
      newRegistration : false
    };
  }

  otpSectionLoad = () => {
    var fields = {
      "mobile_number": "9574018706",
      "country_code": "+91"
    }
    const requestOptions = {
      method: 'POST',
        headers: {
          'Content-Type': 'application/json'       
        },
        body: JSON.stringify(fields)
    };
    fetch('https://api.gryt.fit/api/v1/otp/request-otp/', requestOptions)
    .then(response => {
      this.setState({
        numberSection : false,
        otpSection : true,
      })
    })
  }

  numberSectionLoad = () => {
    this.setState({
      numberSection : true,
      otpSection : false,
      newRegistration : false
    })
  }

  newRegistrationLoad = () => {
    this.setState({
      numberSection : false,
      newRegistration : true   
    })
  }

  render() {
    return (
      <div className="signInContainer">
        { this.state.numberSection &&
          <div className="enterNumberSection">
            <img src={require('../../assets/img/logo.png')} alt="GRYT LOGO" className="grytLogo"/>
            <select name="code" id="countryCode">
              <option value="+91">+91</option>
            </select>
            <input type='text' className="loginText fontSemiBold fontSize16" placeholder="Enter your mobile Number"></input>
            <button onClick={this.otpSectionLoad} className="continueButton nextStepforOtp fontSemiBold fontSize14">Continue</button>
            <div className="termsCondition fontMedium fontSize12">By Continuing you agree to the <span className="highlightColor">Terms of services</span> and <span className="highlightColor">Privacy Policy</span></div>
            <div className="signInWith fontMedium fontSize14">
              Sign in with
            </div>
            <img src={require('../../assets/img/g+.png')} alt="Google" className="signVia"/>
            <img src={require('../../assets/img/facebook.png')} alt="Facebook" className="signVia"/>
            <img src={require('../../assets/img/twitter.png')} alt="Twitter" className="signVia"/>
            <div className="newRegister fontMedium fontSize12">You are new? <span onClick={this.newRegistrationLoad} className="highlightColor">Register</span></div>
          </div>
        }
        { this.state.otpSection &&
          <div className="enterOtpScetion">
            <div className="otpHeader">
              <img onClick={this.numberSectionLoad} src={require('../../assets/img/icon-skayle-down-arrow.svg')} alt="Back" className="backArrow"/>
              <span className="enterOtp fontMedium fontSize17">Enter OTP</span>
            </div>
            <div className="infoText fontMedium fontSize16">
              Please enter the code we just sent to (+91) 7619149297 to proceed
            </div>
            <input className="partitioned" type="text" maxLength="4" />
            <button className="continueButton fontSemiBold fontSize14">Continue</button>
            <div className="otpNotRecived fontMedium fontSize12">Didn’t receive OTP? <span className="highlightColor">RESEND</span></div>
            <div className="otpOnCall fontMedium fontSize10">Get OTP on call</div>
            <div className="troubleLogging fontMedium fontSize12">Having trouble logging in?</div>
          </div>
        }
        {
          this.state.newRegistration &&
          <div className="newRegistrationSection">
            <div className="newRegistrationHeader">
              <img onClick={this.numberSectionLoad} src={require('../../assets/img/icon-skayle-down-arrow.svg')} alt="Back" className="backArrow"/>
              <span className="enterOtp fontMedium fontSize17">Create an account</span>
            </div>
            <Formik
                initialValues={{
                    first_name: '',
                    last_name: '',
                      email: '',
                      password: '',
                      confirmed_password: '',
                      mobile_number: '',
                      country_code:''
                }}
                validationSchema={Yup.object().shape({
                  first_name: Yup.string()
                        .required('First Name is required'),
                        last_name: Yup.string()
                        .required('Last Name is required'),
                    email: Yup.string()
                        .email('Email is invalid')
                        .required('Email is required'),
                    password: Yup.string()
                        .min(6, 'Password must be at least 6 characters')
                        .required('Password is required'),
                        confirmed_password: Yup.string()
                        .oneOf([Yup.ref('password'), null], 'Passwords must match')
                        .required('Confirm Password is required'),
                        mobile_number: Yup.string()
                        .required('Mobile is required'),
                        country_code: Yup.string()
                        .required('Mobile is required')
                })}
                onSubmit={fields => {
                  const requestOptions = {
                    method: 'POST',
                      headers: {
                        'Content-Type': 'application/json'       
                      },
                      body: JSON.stringify(fields)
                  };
                  fetch('https://api.gryt.fit/api/v1/register/', requestOptions)
                }}>
                {({ errors, status, touched }) => (
                    <Form>
                        <div className="form-group">
                            <label htmlFor="first_name">First Name</label>
                            <Field  placeholder="enter name" name="first_name" type="text" className={'form-control' + (errors.first_name && touched.first_name ? ' is-invalid' : '')} />
                            <ErrorMessage name="first_name" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="last_name">Last Name</label>
                            <Field name="last_name" type="text" className={'form-control' + (errors.last_name && touched.last_name ? ' is-invalid' : '')} />
                            <ErrorMessage name="last_name" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                            <ErrorMessage name="email" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="mobile_number">Mobile Number</label>
                            <Field name="mobile_number" type="text" className={'form-control' + (errors.mobile_number && touched.mobile_number ? ' is-invalid' : '')} />
                            <ErrorMessage name="mobile_number" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="country_code">Mobile Number</label>
                            <Field name="country_code" type="text" className={'form-control' + (errors.country_code && touched.country_code ? ' is-invalid' : '')} />
                            <ErrorMessage name="country_code" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <Field name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                            <ErrorMessage name="password" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirmed_password">Confirm Password</label>
                            <Field name="confirmed_password" type="password" className={'form-control' + (errors.confirmed_password && touched.confirmed_password ? ' is-invalid' : '')} />
                            <ErrorMessage name="confirmed_password" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <button type="submit"  className="continueButton nextStepforOtp fontSemiBold fontSize14">Continue</button>
                        </div>
                    </Form>
                    
                )}
            </Formik>
            <div className="termsCondition fontMedium fontSize12">By Continuing you agree to the <span className="highlightColor">Terms of services</span> and <span className="highlightColor">Privacy Policy</span></div>
            <div className="newRegister fontMedium fontSize12">Already a member? <span onClick={this.numberSectionLoad} className="highlightColor">Login</span></div>
          </div>
          
        }
       </div>   
    );
  }
}

export default SignIn;