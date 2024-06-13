"use client";

import React, { FC, SetStateAction, useState } from "react";
import { formatDistanceToNow } from "date-fns";
import { ko } from "date-fns/locale";
import { FiCheck, FiEdit2, FiTrash2, FiX } from "react-icons/fi";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { OnConfirm } from "./GuestList";
import axios from "axios";

interface GuestItemProps {
  guest: Guest;
  openModal: (confirm: OnConfirm) => void;
  setGuests: React.Dispatch<SetStateAction<Guest[]>>;
  closeModal: () => void;
  checkPassword: (password: string, postPassword: string) => boolean;
}

const GuestItem: FC<GuestItemProps> = ({
  guest,
  openModal,
  setGuests,
  closeModal,
  checkPassword,
}) => {
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [message, setMessage] = useState<string>(guest.message);
  const [open, setOpen] = useState<boolean>(false);

  const updateMessage = async (password: string) => {
    try {
      console.log(">>> UPDATE");
      const postPassword = guest.password;

      if (!checkPassword(password, postPassword)) return;

      setGuests((prev) => {
        return prev.map((g, i) => {
          if (guest.id === g.id) return { ...g, message };
          return g;
        });
      });

      setIsEditMode(false);
      closeModal();
    } catch (error) {
      console.error(error);
    }
  };

  const deleteMessage = async (password: string) => {
    try {
      const postPassword = guest.password;
      if (!checkPassword(password, postPassword)) return;

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/guest/${guest.id}`,
        { password }
      );

      setGuests((prev) => {
        return prev.filter((g, i) => guest.id !== g.id);
      });

      closeModal();
    } catch (error) {
      console.error(error);
    }
  };

  const onClickOpen = () => {
    setOpen((prev) => !prev);
  };

  const onClickEditMode = () => {
    setIsEditMode((prev) => !prev);
  };

  const onClickEditCancel = () => {
    setIsEditMode(false);
    setMessage(guest.message);
  };

  const onClickSave = () => {
    openModal(updateMessage);
  };

  const onClickDelete = () => {
    openModal(deleteMessage);
  };

  return (
    <>
      <li className="w-full flex flex-col text-gray-600 p-5 backdrop-blur-md">
        <div className="flex flex-row items-center justify-between">
          <div>
            <span className="text-lg font-bold">🌻 {guest.name}</span>
            <span className="ml-2 text-sm text-gray-500">
              {formatDistanceToNow(+new Date(guest.created_at), { locale: ko })}{" "}
              전
            </span>
          </div>
          <button className="icon-button-style" onClick={onClickDelete}>
            <FiTrash2 size={16} />
          </button>
        </div>

        <div className="flex flex-row items-start text-lg pl-1 mt-2 w-full">
          <button
            className="flex-shrink-0 icon-button-style mt-[2px]"
            onClick={onClickOpen}
          >
            {open ? (
              <MdKeyboardArrowDown size={24} />
            ) : (
              <MdKeyboardArrowRight size={24} />
            )}
          </button>
          <div className="flex flex-row px-1 py-1 w-full overflow-hidden">
            {isEditMode ? (
              <textarea
                className="resize-none bg-transparent w-full outline-none border-b-1 px-2 border-gray-100 border-b-2"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              />
            ) : (
              <div
                className={`w-full px-2 border-transparent border-b-2 ${
                  open ? "whitespace-pre-wrap break-words" : "truncate"
                }`}
              >
                {guest.message}
              </div>
            )}
          </div>
          <div className="flex shrink-0 mt-1">
            {isEditMode ? (
              <div className="flex gap-2">
                <button className="icon-button-style">
                  <FiX size={16} onClick={onClickEditCancel} />
                </button>
                <button className="icon-button-style">
                  <FiCheck size={16} onClick={onClickSave} />
                </button>
              </div>
            ) : (
              <button className="flex icon-button-style">
                <FiEdit2 size={16} onClick={onClickEditMode} />
              </button>
            )}
          </div>
        </div>
      </li>
    </>
  );
};

export default GuestItem;
