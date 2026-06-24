import { useState } from "react";
import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    // form state to check if form is submiting
    formState: { errors, isSubmitting },
  } = useForm();

  // Api call simulate using promise
  async function onSubmit(data) {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log("submitting the form", data);
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <h1>Form Handling in React</h1>
        <label> First-Name: </label>
        <input
          {...register("firstName", {
            required: true,
            minLength: {
              value: 3,
              message: "First name must be at least 3 characters long",
            },
            maxLength: {
              value: 9,
              message: "First name must be at most 9 characters long",
            },
          })}

          // error handling
        />
        {errors.firstName && (
          <p style={{ color: "red" }}>{errors.firstName.message}</p>
        )}
      </div>

      <div>
        <label> Middle-Name: </label>
        <input
          {...register("MiddleName", {
            required: true,
            minLength: {
              value: 4,
              message: "Middle name must be at least 4 characters long",
            },
            maxLength: {
              value: 7,
              message: "Middle name must be at most 7 characters long",
            },
          })}
        />
        {errors.MiddleName && (
          <p style={{ color: "Yellow" }}>{errors.MiddleName.message} </p>
        )}
      </div>

      <div>
        <label> Last-Name: </label>
        <input

        // check required lenghth for cherector logic
          {...register("LastName", {
            required: true,
            minLength: { value: 3, message: "char must be 3" },

            maxLength: { value: 5, message: "must be 5 char" },
          })}
        />
      
        {errors.LastName && (
          <p style={{ color: "red" }}>{errors.LastName.message} </p>
        )}
      </div>
      <br />
      <div>
    
          <input type='Submit'

          // logic to prevent multiple submit click
          disabled={isSubmitting}
          value={isSubmitting ? "Submiting ": "Submit"}
       />
      </div>
    </form>
  );
}

export default App;
