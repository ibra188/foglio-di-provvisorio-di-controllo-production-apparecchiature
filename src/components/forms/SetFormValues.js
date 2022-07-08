import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import "..//../index.css";

export default function SetFormValues() {
    const {register, handleSubmit, reset} = useForm();
    const onSubmit = (data) => {
        alert(JSON.stringify(data));
    };

    useEffect(() => {
        setTimeout(() => {
            reset({
                firstName: "marco",
                lastName: "casalini"
            });
        }, 2000);
    }, [reset]);


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Set Form Values</h1>
        <label>First Name</label>
        <input {...register("firstName") }/>

        <label>Last Name</label>
        <input {...register("lastName")} />
        
        <input type="submit" />
    </form>
  );
}
