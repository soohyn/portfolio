"use client";
import { FC, FormEvent, useState } from "react";
import Modal from "./Modal";

const GuestForm: FC = () => {
  const [error, setError] = useState();
  const [modalOpened, setModalOpened] = useState<boolean>(false);

  const onSubmitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.target as HTMLFormElement);

    const name = data.get("name");
    const email = data.get("email");
    const password = data.get("password");
    const message = data.get("message");

    if (!(name && email && password && message)) {
      setError(error);
    }

    setModalOpened(true);

    try {
    } catch (error) {
      console.error(error);
    }
  };

  const onCloseModal =()=>{
    setModalOpened(false);
  }

  return (
    <>
      <form
        onSubmit={onSubmitForm}
        className="flex flex-col p-5 sm:p-7 bg-amber-100/50 rounded-lg backdrop-blur-xl gap-3 w-full guest-form-inner-shadow "
      >
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
      <Modal isOpened={modalOpened} onClose={onCloseModal}/>
    </>
  );
};
export default GuestForm;
