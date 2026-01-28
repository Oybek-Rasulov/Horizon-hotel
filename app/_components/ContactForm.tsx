"use client";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Button } from "./Button";
import { ContactFormType } from "../_types/form";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  function onSubmit(data: ContactFormType) {
    console.log(data);
    toast.success("Success");

    reset();
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex gap-5 mb-2 text-sm">
        <div className="w-[50%]">
          <label htmlFor="firstname" className="block text-md mb-2">
            First Name
          </label>
          <input
            {...register("firstname", { required: "First name is required!" })}
            type="text"
            name="firstname"
            id="firstname"
            className="focus:outline-none border focus:border-2 border-white rounded-md py-3 px-4 w-full"
            placeholder="John"
          />
          {errors.firstname && (
            <p className="error-message">{String(errors.firstname.message)}</p>
          )}
        </div>
        <div className="w-[50%]">
          <label htmlFor="lastname" className="block text-md mb-2">
            Last Name
          </label>
          <input
            {...register("lastname", { required: "Lastname is required!" })}
            type="text"
            name="lastname"
            id="lastname"
            className="focus:outline-none border focus:border-2 border-white rounded-md w-full py-3 px-4"
            placeholder="Doe"
          />
          {errors.lastname && (
            <p className="error-message">{String(errors.lastname.message)}</p>
          )}
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="firstname" className="block text-md mb-2">
          Phone number
        </label>
        <input
          {...register("firstname", { required: "First name is required!" })}
          type="text"
          name="firstname"
          id="firstname"
          className="focus:outline-none border focus:border-2 border-white rounded-md py-3 px-4 w-full"
          placeholder="John"
        />
        {errors.firstname && (
          <p className="error-message">{String(errors.firstname.message)}</p>
        )}
      </div>

      <div className="mb-5">
        <label htmlFor="firstname" className="block text-md mb-2">
          Email
        </label>
        <input
          {...register("firstname", { required: "First name is required!" })}
          type="text"
          name="firstname"
          id="firstname"
          className="focus:outline-none border focus:border-2 border-white rounded-md py-3 px-4 w-full"
          placeholder="exmaple@gmail.com"
        />
        {errors.firstname && (
          <p className="error-message">{String(errors.firstname.message)}</p>
        )}
      </div>

      <div className="mb-5">
        <label htmlFor="firstname" className="block text-md mb-2">
          Text
        </label>
        <textarea
          cols={30}
          rows={6}
          {...register("firstname", { required: "First name is required!" })}
          name="firstname"
          id="firstname"
          className="focus:outline-none border focus:border-2 border-white rounded-md py-3 px-4 w-full"
          placeholder="You type here your messages"
        />
        {errors.firstname && (
          <p className="error-message">{String(errors.firstname.message)}</p>
        )}
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
}
