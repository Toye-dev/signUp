import { useMediaQuery } from "react-responsive";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import ModalCard from "./ModalCard";


const Card = () => {

  const [ isModalOpen, setModalOpen ] = useState(false);
  const [ submittedEmail, setSubmittedEmail] = useState();
  const isMobile = useMediaQuery({ query: "(max-width: 630px)" });
  return (
    <>
      <div className="cardTwo"></div>
      <div className="card">
        <img className="logo" src="/Screenshot (335).png" />

        <div className="content">
          {isMobile ? (
            <>
              <h1 className="headText">Get our app,</h1>
              <h2 className="subHeadText"> Stay updated!</h2>
              <p className="subText">
                Join thousands of parents who receive regular updates and
                track their baby's nutrtiton
              </p>
              <ul>
                <li>
                  Generate balanced recipes that cater to stages of your baby's
                  development.
                </li>
                <li>
                  Our app recommends based on your baby's age, and nutritional
                  needs.
                </li>
                <li>Tracks your baby's nutritional progress!</li>
              </ul>
            </>
          ) : (
            <>
              <h1 className="headText">Get our app, stay updated!</h1>
              <p className="subText">
                Join thousands of parents who receive regular updates and
                track their baby's nutrtiton
              </p>
              <ul>
                <li>
                  Generate balanced recipes that cater to stages of your baby's
                  development.
                </li>
                <li>
                  Get customized meal plans and dietary recommendations based on
                  your baby's age, health conditions, and nutritional needs.
                </li>
                <li>
                  Overall record and tracker of your baby's nutritional
                  progress!
                </li>
              </ul>
            </>
          )}

          <Formik
            initialValues={{ email: "" }}
            validationSchema={Yup.object({
              email: Yup.string()
                .email("Invalid email address")
                .required("Required"),
            })}
            onSubmit={(values, { setSubmitting, resetForm }) => {     //Two arguments: values and formikHelpers(an object that would be destructured tp get the helper functions)
              setSubmittedEmail(values.email);
              setModalOpen(true);
              setSubmitting(false);
              resetForm();
            }}
          >
            {({ values, errors, touched }) => (  //render prop pattern. Instead of passing a component, you pass a function that returns jsx. This function receives formiks state 
              <Form>
                <Field name="email">
                  {({ field, meta }) => (
                    <div>
                      <label htmlFor="email">Email Address</label>

                      {meta.touched && meta.error ? (
                        <div className="error-div">{meta.error}</div>
                      ) : null}
                      <input
                        {...field}
                        type="text"
                        className={`email-input ${
                          meta.touched && meta.error ? "input-error" : ""
                        }`}
                        placeholder="email@company.com"
                      />
                    </div>
                  )}
                </Field>

                <button className="submit-btn" type="submit">
                  Subscribe to our monthly newsletter
                </button>
              </Form>
            )}
          </Formik>
          { isModalOpen && <ModalCard emailProp={submittedEmail} onClose={() => { 
            setModalOpen(false); 
            resetForm();
          }} />}
        </div>
      </div>
    </>
  );
};

export default Card;

/*

<form id="email-input" class="email-address" novalidate>
    <label>Email address</label>
    <div id="div-error" class="error-div">
        <span id="empty-field-error"></span>
        <span id="invalid-email-error">Valid email required</span>
    </div>
    <input id="email" type="text" name="email"placeholder="email@company.com"/>
    <button class="submit-btn">Subscribe to our monthly newsletter</button>
</form>

*/
