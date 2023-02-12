import React from 'react';
import {
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBBtn,
    MDBIcon,
    MDBInput,
    MDBCheckbox} from 'mdb-react-ui-kit';
import "./login.css"
import { useState } from 'react';
import"./login.css"
import {signInWithEmailAndPassword} from "firebase/auth";
import{auth} from "../firebaseConfig"
import { Link,useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import AuthSlice from '../../redux/authSlice';
import logo from "../images/logo.png"


function Loginform() {
    const navigate = useNavigate();
    const [submit,setSubmit] = useState(false);
    const [error,setError] = useState("")
    const [values,setValues] = useState({
        email:"",
        password:""
    });

    const dispatch = useDispatch();

    const onEmailHandler = (e) => {
         e.preventDefault();
         values.email = e.target.value;
        }
    const onPasswordHandler = (e) => {
        e.preventDefault();
        values.password = e.target.value;
    }
    const onClickHandler = async (e) =>{
        e.preventDefault();
        
        if(!values.email||!values.password)
        {
            setError("please fill all the fields !")   
        }   
        await signInWithEmailAndPassword(auth,values.email,values.password)
        .then((resp)=>{
            const user = resp.user;
           navigate("home")
        })
        .catch((resp)=>{setError(resp.message)})
    }
            
    const onsignupHandler = (e) => {
        e.preventDefault();
        navigate("signup");
        dispatch(AuthSlice.Login());
    }

    const onAdminHandler = (e) => {
        e.preventDefault();
        navigate("adminpanel");
    }


  return (
    <MDBContainer fluid className="p-3 my-5">

      <MDBRow>

        <MDBCol col='10' md='6'>
          <img src={logo} className="img-fluid" alt="Phone image" />
        </MDBCol>

        <MDBCol col='4' md='6'>

          <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg" onChange={onEmailHandler} />
          <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"   onChange={onPasswordHandler} />


          <div className="d-flex justify-content-between mx-4 mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <a href="!#">Forgot password?</a>
          </div>

            <div className="d-grid gap-2">
                <button className="btn btn-outline-primary" type="button" onClick={onClickHandler} disabled={submit} >sign in</button>
                <button className="btn btn-outline-secondary" type="button" onClick={onsignupHandler} >sign up</button>
                <button className="btn btn-outline-primary" type="button" onClick={onAdminHandler} >login As Admin</button>
            </div>

            <h6>{error}</h6>

          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0">OR</p>
          </div>

          <div className="d-grid gap-2">
                <button className="btn btn-primary" type="button">continue with facebook</button>
                <button className="btn btn-info" type="button">continue with twitter</button>
            </div>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default Loginform;