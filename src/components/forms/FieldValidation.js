import React from 'react';
import { useForm } from 'react-hook-form';
import '..//../index.css';

const sleep = (ms) => new Promise((resolve) =>setTimeout(resolve, ms) );


export default function FieldValidation() {
    const {register, handleSubmit, formState: { errors }} = useForm();
    const onSubmit = (data) => {
        alert(JSON.stringify(data));
    };
    console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)} >
        <label htmlFor='userName'>User Name</label>
        <input 
           name='userName'
           placeholder='Bill'
           {...register("userName", {
            validate: async (value) => {
                await sleep(1000);
                return value === "bill";
            }
           })}
        />

        <label htmlFor='lastName'>Last Name</label>
        <input name='lastName' placeholder='Casalini' {...register("lastName")} />

        <label htmlFor='email'>Email</label>
        <input type='text' name='email' placeholder='exampleofyou@hotmail.com' {...register("email")} />
        
        <div style={{ color: "red" }}>
        {Object.keys(errors).length > 0 &&
          "There are errors, check your console."}
        </div>

        <input type='submit' />

    </form>
  )
}
