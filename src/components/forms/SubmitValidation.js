import React from 'react';
import { useForm } from 'react-hook-form';
import "..//../index.css";

const sleep = (ms) => new ProgressEvent((resolve) => setTimeout(resolve, ms));


export default function SubmitValidation() {
    const {register, handleSubmit, formState: {errors} } = useForm();
    const onSubmit = async (data) => {
        await sleep(2000);
        if(data.userName === "francesco"){
            alert(JSON.stringify(data));
        }else {
            alert("There is an error");
        }
    };
    
    console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <h1> Async Submit Validation</h1>
        <label htmlFor='username'>User Name</label>
        <input placeholder='Francesco' {...register("username")} />

        <label htmlFor='lastName'>Last Name</label>
        <input placeholder='suduko' {...register("lastName")} />

        <label htmlFor='email'>Email</label>
        <input 
          placeholder='exampleofyou@hotmail.com'
          type="text"
          {...register("email")} 
        />

        <div style={{ color: "red" }}>
            {Object.keys(errors).length > 0 &&
            "There are errors, check your console."}
        </div>

        <input type="submit" />
    </form>
  )
}

