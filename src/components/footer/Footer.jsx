import React from "react";
import "./footer.css";
import { TextField } from "../TextField";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { TextArea } from "../TextArea";
import axios from "axios";
import { useState } from "react";

export const Footer = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailaddress, setEmailaddress] = useState("");
  const [phoneno, setPhoneno] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("/contacts", {
        firstName,
        lastName,
        emailaddress,
        phoneno,
        message,
      });
      res.data && window.location.reload("/");
    } catch (err) {
      setError(true);
    }
  };

  const validate2 = Yup.object({
    firstName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    lastName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    email: Yup.string().email("Email is Invalid").required("Required"),
    phoneno: Yup.number()
      .min(11, "Phone No must be at least 11 digit")
      .max(11, "Phone No must not be more then 11 digits")
      .required("required")
      .integer("Phone No cannot have decimal")
      .typeError("Not a number"),
    message: Yup.string().required("required"),
  });
  return (
    <div className="footer">
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <Formik
        initialValues={{
          FirstName: "",
          LastName: "",
          "Email Address": "",
          "Phone Number": "",
          Message: "",
        }}
        validationSchema={validate2}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formik) => (
          <div className="footer-form">
            <p>Contact Us</p>

            <Form className="row g-" onSubmit={handleSubmit}>
              <div className="col-md-6">
                <TextField
                  label="First Name"
                  name="firstName"
                  type="text"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="col-md-6">
                <TextField
                  label="Last Name"
                  name="lastName"
                  type="text"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="col-md-6">
                <TextField
                  label="Email Address"
                  name="email"
                  type="email"
                  onChange={(e) => setEmailaddress(e.target.value)}
                />
              </div>
              <div className="col-md-6">
                <TextField
                  label="Phone Number"
                  name="PhoneNo"
                  type="number"
                  onChange={(e) => setPhoneno(e.target.value)}
                />
              </div>
              <div className="label-txt">
                <TextArea
                  label="Message"
                  name="message"
                  type="text"
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              <div className="col-md-6">
                <button type="submit" className="btn signUp-btn btn-size">
                  Submit
                </button>
              </div>
            </Form>
          </div>
        )}
      </Formik>
      <div className="footer-links">
        <div className="footer-logo">
          <img src="https://res.cloudinary.com/dtddnqkn6/image/upload/v1655408480/Ibeji%20Foundation/logo_copy_rwgmt9.png" height={"150px"} alt="" />
        </div>
        <div className="footer-socials">
          <img src="icons/facebook.png" alt="" />
          <img src="icons/linkedin.png" alt="" />
          <img src="icons/twitter.png" alt="" />
          <img src="icons/instagram.png" alt="" />
        </div>
      </div>
    </div>
  );
};
