import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Toast from '../components/Toast'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
import { values } from 'lodash'
const validationSchema = Yup.object({
  newpassword: Yup.string().required('newpassword is required'),
  confirmpassword: Yup.string()
    .oneOf([Yup.ref('newpassword'), null], 'Passwords must match')
    .required('Confirm password is required')
});

const ResetPassword = () => {
  const { token } = useParams()
  const [errorMessage, setErrorMessage] = useState("")
  const [showForm, setShowForm] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")

  const navigation = useNavigate()

  async function fetchData() {
    try {
      if (token) {
        const response = await axios.post('http://localhost:5000/api/auth/verify-reset-password-token', {
          resetToken: token
        })

        console.log(response.status)
        if (response.status != 200) {
          setErrorMessage(response.data.message)

        }
        else {
          setShowForm(true)
        }

      }

    }
    catch (error) {
      console.log(error.message)
      setErrorMessage("Link expired")
      navigation('/', { replace: true })
    }
  }
  useEffect(() => {
    fetchData()
  })

  async function handleSubmit(values) {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/reset-password', {
        resetToken: token,
        newPassword: values.newpassword
      })

      if (response.status === 200) {
        setSuccessMessage(response.data.message)
        setTimeout(() => {
          navigation('/')
        }, 2000)
      }
    }
    catch (error) {
      setErrorMessage(error.message)
    }

  }
  return (
    <div className='container mt-4 d-flex justify-content-center'>

      {showForm && <Formik
        initialValues={{ newpassword: '', confirmpassword: '' }}
        validationSchema={validationSchema}
        onSubmit={(values) =>
          handleSubmit(values)
        }
      >
        {({ isSubmitting }) => (
          <Form>
            <div className='border my-5 shadow p-3 mb-5 bg-body-tertiary rounded' style={{ height: '250px', width: '700px' }}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">NewPassword</label>
                <Field type="password" name="newpassword" className="form-control border-primary" placeholder='Enter Your New password' />
                <ErrorMessage name="newpassword" component="small" className='text-danger' />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">ConfirmPassword</label>
                <Field type="password" name="confirmpassword" className="form-control border-primary" placeholder='Enter Your Confirm Password' />
                <ErrorMessage name="confirmpassword" component="small" className='text-danger' />
              </div>

              <button type="submit" className="btn btn-primary" disabled={isSubmitting}>Submit</button>
            </div>
          </Form>)}

      </Formik>}
      {
        errorMessage && <Toast error={errorMessage} />
      }
      {
        successMessage && <Toast success={successMessage} />
      }
    </div>

  )

}

export default ResetPassword