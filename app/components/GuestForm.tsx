"use client"
import { FC, FormEvent, useState } from "react";

const GuestForm: FC = () => {
  const [error,setError] = useState()

  const onSubmitForm = async (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.target as HTMLFormElement)
    
    const name = data.get('name')
    const email = data.get('email')
    const password = data.get('password')
    const message = data.get('message')

    if(!(name && email && password && message)){
      setError(error);
    }

    try {

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={onSubmitForm} className="flex flex-col p-6 sm:p-10 bg-amber-100/50 rounded-lg backdrop-blur-xl gap-4 w-full guest-form-inner-shadow ">
      <input name="name" placeholder="name" className="" type="text" />
      <input name="email" placeholder="email" className="" type="email" />
      <input
        name="password"
        placeholder="password"
        type="password"
        className=""
      />
      <textarea
        className=" resize-none"
        placeholder="message"
        rows={6}
        maxLength={1000}
      />
      <input type="submit" value="submit" />
    </form>
  );
};
export default GuestForm;
