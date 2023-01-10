import React from 'react'
import { useFormik } from 'formik'
import * as Yup from "yup";
import { Grid } from "@material-ui/core";
import TextField from '@mui/material/TextField'
import { useNavigate } from 'react-router-dom';
import {API}  from "../backend";
import { useState } from 'react';
import { Link } from 'react-router-dom';
export function Register() {
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");
  const login = () => navigate("/Login");

  const regUser = (newUser) => {
    fetch(`${API}/signup`, {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((data) => data.json())
      .then((data1) => {
        if (data1.message === "successful Signup") {
          login();
        }
        else {
          setErrorMsg(data1.message);
        }
      });


  };
  const initialValues = {
    UserName: '',
    Email: '',
    Password: '',
  }
  const userValidationSchema = Yup.object({
    UserName: Yup.string().required('Required'),
    Email: Yup.string().email("Must be a valid email").required('Required'),
    Password: Yup.string().required('Required').min(8),
  })

  const { handleBlur, handleChange, handleSubmit, values, errors, touched } = useFormik({
    initialValues: initialValues,
    validationSchema: userValidationSchema,
    onSubmit: (newUser) => {
      console.log("onSubmit", newUser);
      regUser(newUser);
    },
  });

  return <div className="add-user-container">
     <>
 <Grid container direction="row" alignItems="center" justify="center" 
 style={{minHeight:"100vh",backgroundColor: "white"}} >
      <form onSubmit={handleSubmit} style={{
          padding: "5%", margin: 50,
          border: "1px solid orange",
           boxShadow: "1px 5px 10px orange"
        }}   >
          <TextField
            className="add-user-name"
            label="User Name"
            InputProps={{ style: { fontSize: 15 } }}
            InputLabelProps={{ style: { fontSize: 15 } }}
            type="text"
            value={values.UserName}
            name="UserName"
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.UserName && errors.UserName ? true : false}
            style={{ padding: 5 }}
            variant="standard"
            helperText={touched.UserName && errors.UserName ? errors.UserName : ""}
          />
           <br/>
          <TextField
            className="add-user-name"
            InputProps={{ style: { fontSize: 15 } }}
            InputLabelProps={{ style: { fontSize: 15 } }}
            label="Email ID"
            type="Email"
            variant="standard"
            value={values.Email}
            name="Email"
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.Email && errors.Email ? true : false}
            style={{ padding: 5 }}
            helperText={touched.Email && errors.Email ? errors.Email : ""}
          />
           <br/>
          <TextField
            className="add-user-name"
            InputProps={{ style: { fontSize: 15 } }}
            InputLabelProps={{ style: { fontSize: 15 } }}
            label="Password"
            style={{ padding: 5 }}
            type="password"
            variant="standard"
            value={values.Password}
            name="Password"
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.Password && errors.Password ? true : false}
            helperText={touched.Password && errors.Password ? errors.Password : ""}
          />
           <br/>
           <br/>
          <button type="submit"
            className="btn btn-warning" style={{ height: 40, width: 65, fontSize: 15 }}>Signup</button>
          <div className="text-center" style={{ color: "red" }}>
            {errorMsg}
          </div>
          <br />
          <div className="text-center" >
            <h5>Already have an account? <Link to="/Login"><button type="submit"
              className="btn btn-warning" style={{ height: 40, width: 60, fontSize: 15 }}>Login</button></Link></h5>
            <br />
            <br />
            <Link to="/ForgetPassword"><button type="submit"
              className="btn btn-warning" style={{ height: 40, width: 200, fontSize: 15 }}>Forgotten your password?</button></Link>
          </div>
        </form>
      </Grid>
    </>
  </div>;
}