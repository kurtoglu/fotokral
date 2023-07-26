import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { validationSchema, initialValues, handleSubmit } from "./useAuth";

const Login = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">Login</h2>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                <Form autoComplete="off">
                  <div className="form-group">
                    <label htmlFor="username" className="my-2">
                      Username
                    </label>
                    <Field
                      type="text"
                      id="username"
                      name="username"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="username"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password" className="my-2">
                      Password
                    </label>
                    <Field
                      type="password"
                      id="password"
                      name="password"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                  <button type="submit" className="btn btn-primary my-2">
                    Login
                  </button>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
