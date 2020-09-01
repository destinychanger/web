import React, { Component } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './login.css'



class Thumb extends React.Component {
  state = {
    loading: false,
    thumb: undefined,
  };

  componentWillReceiveProps(nextProps) {
    if (!nextProps.file) { return; }

    this.setState({ loading: true }, () => {
      let reader = new FileReader();

      reader.onloadend = () => {
        this.setState({ loading: false, thumb: reader.result });
      };

      reader.readAsDataURL(nextProps.file);
    });
  }

  render() {
    const { file } = this.props;
    const { loading, thumb } = this.state;
   
    if (!file) { return null; }

    if (loading) { return <p>loading...</p>; }

    return (<img src={thumb}
      alt={file.name}
      className="img-thumbnail mt-2"
      height={200}
      width={200} />);
  }
}



class NewRegistration extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      count : 1,
    };
  }

  previous = () => {
    this.setState({
      count : this.state.count-1
    })
  }
  next = () => {
    this.setState({
      count : this.state.count+1
    })
  }

  render() {
    return (
      <div className="newRegistrationSection">
          <div className="stepsCompletedSection">
            <div className="grytLogoSmall" >
              <img src={require('../../assets/img/grytLogoSmall.svg')} alt="Gryt-Logo"/>
            </div>
            <ul>
              <li className="noBefore">BASIC INFORMATION</li>
              <li>EXPERIENCE</li>
              <li>ONLINE PRESENCE</li>
              <li>CERTIFICATIONS</li>
            </ul>
          </div>
          <div className="userDetailSection">
            <Formik
                initialValues={{
                    first_name: '',
                    country_code: '',
                    
                    location: '',
                    photo: '',
                   
                    
                }}
                validationSchema={Yup.object().shape({
                  first_name: Yup.string()
                        .required('First Name is required'),
                        country_code: Yup.string()
                        .required('Last Name is required'),
                        location: Yup.string()

                      
                })}
                onSubmit={fields => {
                  console.log(fields)
                 
                }}>
                {({ errors, values, touched, setFieldValue}) => (
                    <Form>
                        { this.state.count == 1 &&
                       
                        <div>
                           <div className="formHeader">
                            Set up your GRYT presence
                          </div>
                          <div className="form-group">
                           <label htmlFor="first_name">Name</label>
                           <Field  placeholder="enter name" name="first_name" type="text" className={'form-control' + (errors.first_name && touched.first_name ? ' is-invalid' : '')} />
                           <ErrorMessage name="first_name" component="div" className="invalid-feedback" />
                          </div>
                          <div className="form-group">
                            <label htmlFor="country_code">COUNTRY</label>
                            <Field name="country_code" type="text" className={'form-control' + (errors.country_code && touched.country_code ? ' is-invalid' : '')} />
                            <ErrorMessage name="country_code" component="div" className="invalid-feedback" />
                          </div>
                          <div className="form-group">
                            <label htmlFor="location">LOCATION</label>
                            <Field name="location" type="text" className={'form-control' + (errors.location && touched.location ? ' is-invalid' : '')} />
                            <ErrorMessage name="location" component="div" className="invalid-feedback" />
                          </div>
                          <div className="form-group">
                            <label htmlFor="photo">Upload picture
                              <div>
                              Adding a photo helps people recognise you
                              </div>
                            </label>
                            <input id="photo" name="photo" type="file" onChange={(event) => {
                              setFieldValue("file", event.currentTarget.files[0]);
                            }} className="form-control" />
                           <Thumb file={values.file} />
                          </div>
                          </div>
                        }

                      
                           {/* <div className="form-group">
                              <button type="submit"  className="continueButton nextStepforOtp fontSemiBold fontSize14">Save</button>
                          </div> */}
                        <button className="back" onClick={this.previous}>Back</button>
            
             
                       <button className="next" onClick={this.next}>Next</button>
                    </Form>
                )}
              </Formik>
            
            
            
            
          </div>
      </div>
    );
  }
}

export default NewRegistration;