"use client";
import React, { FC, FormEvent, SetStateAction, useState } from "react";
import Modal from "./Modal";
import MacDotButton from "./MacDotButton";

interface GuestForm {
  setGuests: React.Dispatch<SetStateAction<Guest[]>>;
}

interface NewGuest extends Partial<Guest> {}

const GuestForm: FC<GuestForm> = ({ setGuests }) => {
  const [modalOpened, setModalOpened] = useState<boolean>(false);
  const [formData, setFormData] = useState<NewGuest>();

  const onSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.target as HTMLFormElement);

    const name = data.get("name");
    const email = data.get("email");
    const password = data.get("password");
    const message = data.get("message");

    if (!(name && email && password && message)) return;

    //setFormData(data);
    //setFormData({ name, email, password, message });
    setModalOpened(true);
  };

  const createGuest = async () => {
    try {
      //setGuests();
    } catch (error) {
      console.error(error);
    }
  };

  const onCloseModal = () => {
    setModalOpened(false);
  };

  const onClickConfirm = async () => {
    await createGuest();

    onCloseModal();
  };

  return (
    <>
      <div className=" bg-gray-100 shadow-xl rounded-md backdrop-blur-xl w-full inner-shadow overflow-hidden ">
        <div className="flex flex-row bg-gray-300 w-full p-3 gap-3 items-center shadow-inner">
          <MacDotButton color={"#fb4646"} />
          <MacDotButton color={"#fcb024"} />
          <MacDotButton color={"#28c132"} />
        </div>
        <form
          onSubmit={onSubmitForm}
          className="p-3 sm:p-5 flex flex-col gap-3 w-full shadow-inner"
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
            rows={5}
            maxLength={300}
          />
          <input type="submit" value="send" />
        </form>
      </div>

      <Modal isOpened={modalOpened} onClose={onCloseModal}>
        <div className="flex flex-col">
          <span className="text-lg font-semibold">정말 작성하시겠습니까?</span>
          <div className="flex flex-row mt-4 gap-2">
            <button className="button-style-secondary p-1 w-full rounded-md">
              cancel
            </button>
            <button
              className="button-style w-full rounded-md"
              onClick={onClickConfirm}
            >
              confirm
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default GuestForm;
