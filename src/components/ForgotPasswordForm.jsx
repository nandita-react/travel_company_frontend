import axios from 'axios'
import { Form, Formik,Field ,ErrorMessage} from 'formik'
import { values } from 'lodash'
import React, { useEffect, useState } from 'react'
import * as Yup from 'yup'
import Toast from './Toast'
const apiUrl = import.meta.env.VITE_API_URL

const validationSchema=Yup.object({
    email:Yup.string().email('invalid email address').required('email is required')
})
const ForgotPasswordForm = () => {
    const [errorMessage, setErrorMessage] = useState("")
    const [successMessage, setSuccessMessage] = useState("")

   async function handleSubmit(values){
        try{
            const response=await axios.post(`${apiUrl}auth/forgot-password`,values)
            if(response.status===200){
           setSuccessMessage(response.data.message)
            }
        }

        catch(error){
            // console.log(error.message)
            setErrorMessage(error.message)
        }
    }

   
  return (
    <div>
                  
                    <Formik
                    initialValues={{email:''}}
                    validationSchema={validationSchema}
                    onSubmit={(values)=>{
                       handleSubmit(values)
                    }}
                    >
                        {({isSubmitting})=>(

                            <Form>
                                <div className="input-group mb-3 mx-auto" >
                                <Field type="email" name="email" className="form-control border-primary" placeholder='Enter your email' />
                                <ErrorMessage name="email" component="small" className='text-danger' />
                                </div>
                                <button type="submit" class="btn btn-primary  w-100" disabled={isSubmitting} >Primary button</button>
                            </Form>
                        )}

                    </Formik>
                    {
                errorMessage && <Toast error={errorMessage} />
            }
            {
                successMessage && <Toast success={successMessage} />
            }
                 
    </div>
  )
}

export default ForgotPasswordForm