import React from 'react'
import '../UserDashboard/User.css'

//Componanents
import TopNavbar from '../../Companents/TopNavbar/TopNavbar'
import WhiteNavbar from '../../Companents/WhiteNavbar/WhiteNavbar'

//Router-Dom
import { Link } from 'react-router-dom'
import Footer from '../../Companents/Footer/Footer'


//formik
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";


const validationSchema = Yup.object().shape({
  username: Yup.string()
    .min(4, "Kullanıcı adı en az 4 karakter olmalıdır.")
    .required("Kullanıcı adı zorunludur."),
  password: Yup.string()
    .min(8, "Parola en az 8 karakter olmalıdır.")
    .required("Parola zorunludur."),
});

const initialValues = {
  username: "",
  password: "",
};

const User = () => {
  return (
    <>
      {/* //Componanents */}
      <TopNavbar />
      <WhiteNavbar />

      <section className="bgFaq para">
        <div className="container">
          <div className='d-flex justify-content-between titlefaq '>
            <h1 className='faqh1'>User Dashboard</h1>
            <span className='right-title text-dark'><Link className='linkfaq ' to="/">Home</Link> / User Dashboard</span>
          </div>
        </div>
      </section>

      <section className="full-height px-lg-5">
        <div className="container">
          <div className="userdashboard__form">
            <h1 className='userdashboard__h1'>Login with your account</h1>
            <div className="col-lg-8" data-aos="fade-up" data-aos-delay="300">
              <Formik
                initialValues={initialValues}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
              >
                {({ errors, touched }) => (
                  <form action="#" className="row" >
                    <div className="form-group col-md-12 pt-2">
                      <label htmlFor="username">Kullanıcı Adı:</label>
                      <Field name="username" className='form-control' />
                      <span className='error'><ErrorMessage name="password" style={{ color: "red" }} /></span>
                    </div>

                    <div className="form-group col-12 pt-2">
                      <label htmlFor="password">Parola:</label>
                      <Field type="password" className='form-control ' name="password" />
                      <span className='error'><ErrorMessage name="password" style={{ color: "red" }} /></span>
                    </div>


                    <div className='d-flex justify-content-between pt-2'>


                      <div class="form-check mb-2  pt-2 ">
                        <input class="form-check-input" type="checkbox" id="autoSizingCheck" />
                        <label class="form-check-label" for="autoSizingCheck">
                          Remember me
                        </label>
                      </div>

                      <div className='forgot__pass pt-2 '>
                        <a className='text-primary' href="">Lost your password?</a>
                      </div>



                    </div>


                    <div className="form-group col-12 d-grid pt-3">
                      <button type="submit" className="button__user">LOGIN</button>
                    </div>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </section>

      <Footer />




    </>
  )
}

export default User