import { useForm } from "react-hook-form";
import './LoginForm.css'
import { useState } from "react";

export function LoginForm({onSubmit}) {
  

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
      } = useForm({
        defaultValues: {

        }
      });

      const emailPattern = {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "uncorrect email address"
    };


    return(
    <>
   
    <h1 className="" >Sign in or create an account</h1>
    <p className="" >You can sign in using your Booking.com account to access our services.</p>
        
        
        {/* ///////////////// */}
        
        <form className="email-form"
            onSubmit={handleSubmit((data) => {
                console.log(data)
                        onSubmit(data)
                })}
                >            
                  <div className="form-group">
                 <label for="formGroupExampleInput">Email:</label>
                 <input className="form-control mt-1" 
                    {...register("email", { 
                        required: "Будь ласка, введіть електронну адресу",
                        maxLength: {
                            value: 64,
                            message: "Email не должен превышать 64 символов"
                        },
                        pattern: emailPattern
                    })}
                />  </div>
                
                {errors.email && <p style={{ color: 'red', marginBottom: 0, marginTop: 2 }}>
                    {errors.email.message}
                </p>}
            <button type="submit" className="mt-3 btn btn-primary w-100">continue with email</button>
        </form>
        {/* ///////////////// */}




        <div className='text-with-line mt-4'>
          <div className='background-line'></div>
          <span className=''>
            або вибрати один із цих варіантів
          </span>
        </div>
        <div className='mt-3 login-via-social'>
          <ul>
            <li>
              <a href=""><img src="https://img.icons8.com/?size=100&id=13963&format=png&color=000000" alt="" /></a>
            </li>
            <li><a href=""><img src="https://img.icons8.com/?size=100&id=118497&format=png&color=000000" alt="" /></a></li>
            <li><a href=""><img src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000" alt="" /></a></li>
          </ul>
        </div>
       

    </>
    )
}