import { useForm } from "react-hook-form";
function FormDemo(){
    const {register,//to register the form fields
        handleSubmit,//to handle for submission
        formState:{errors}//to handle validations
    }= useForm();
    //form submit function
    function onFormSubmit(obj){
        console.log(obj)
    }
    return(
        <div>
          <h1 className="text-center text-5xl">Form Demo</h1>
          {/*form */}
          <form className="max-w-md mx-auto mt-10" onSubmit={handleSubmit(onFormSubmit)}>
            <div className="mb-3">
              <label htmlFor="username">Username</label>
              <input type="text"
              {...register("username",
                {
                    required:"Username required",
                    validate:(v)=>v.trim().length!=0||"White space is not valid ",
                    //minLength:4,
                }
              )}
              id="username"
              className="border w-full p-3"/>
              {/*username validation and error message */}
              {errors.username?.type==="required"&& <p className="text-red-500">{errors.username.message}</p>}
              
                {errors.username?.type==="validate"&& <p className="text-red-500">{errors.username.message}</p>}
                 {errors.username?.type==="minLength"&& <p className="text-red-500">min Length of 4 is required</p>}

               <label htmlFor="username">Email</label>
              <input type="email"
              {...register("email")}
              id="email"
              className="border w-full p-3"/>
              <button type="submit" className="block bg-amber-500">Submit</button>
            </div>

          </form>
        </div>
    )
}
export default FormDemo;