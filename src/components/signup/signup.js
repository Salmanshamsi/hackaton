import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon
}
from 'mdb-react-ui-kit';
import "./signup.css"
import { useState } from 'react';
import{createUserWithEmailAndPassword} from "firebase/auth"
import{auth} from "../firebaseConfig"
import { useNavigate } from 'react-router-dom';


function Signup() {
    const [error,setError] = useState("");
    const [values,setVal] = useState({
        fname:"",
        lname:"",
        email:"",
        pass:""
    });
      
    const nevigate = useNavigate();

    const onfnamehandler = (e) => {
        e.preventDefault();
        values.fname = e.target.value;
    }
    const onlnamehandler = (e) => {
        e.preventDefault();
        values.lname = e.target.value;
    }

    const onemailhandler = (e) => {
        e.preventDefault();
        values.email = e.target.value;
    }

    const onpasshandler = (e) => {
        e.preventDefault();
        values.pass = e.target.value;
    }

    const onClickhandler = (e) => {
        e.preventDefault();

        createUserWithEmailAndPassword(auth,values.email,values.pass)
        .then((resp)=>{
            const user = resp.user;
            nevigate("/");
        })
        .catch((resp)=>{setError(resp.message)});
    }

  return (
    <MDBContainer fluid className='p-4'>

      <MDBRow>

        <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

          <h1 className="my-5 display-3 fw-bold ls-tight px-3">
            saylani<br />
            <span className="text-primary">Let's change the world </span>
          </h1>

          <p className='px-3' style={{color: 'hsl(217, 10%, 50.8%)'}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eveniet, itaque accusantium odio, soluta, corrupti aliquam
            quibusdam tempora at cupiditate quis eum maiores libero
            veritatis? Dicta facilis sint aliquid ipsum atque?
          </p>

        </MDBCol>

        <MDBCol md='6'>

          <MDBCard className='my-5'>
            <MDBCardBody className='p-5'>

              <MDBRow>
                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='First name' id='form1' type='text' onChange={onfnamehandler} />
                </MDBCol>

                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='Last name' id='form1' type='text' onChange={onlnamehandler} />
                </MDBCol>
              </MDBRow>

              <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email' onChange={onemailhandler}  />
              <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password' onChange={onpasshandler} />

                <h6>{error}</h6>

              <div className='d-flex justify-content-center mb-4'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
              </div>

              <div className="d-grid gap-2">
                <button className="btn btn-primary" type="button" onClick={onClickhandler} >sign up</button>
             </div>

              <div className="text-center">

                <p>or sign up with:</p>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='facebook-f' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='twitter' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='google' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='github' size="sm"/>
                </MDBBtn>

              </div>

            </MDBCardBody>
          </MDBCard>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default Signup;