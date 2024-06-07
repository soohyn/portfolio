"use client";

import React, { FC, SetStateAction, useState } from "react";
import { formatDistanceToNow } from "date-fns";
import { ko } from "date-fns/locale";
import { FiCheck, FiEdit2, FiTrash2, FiX } from "react-icons/fi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { OnConfirm } from "./GuestList";

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
      console.log(">>> DELETE");
      const postPassword = guest.password;
      if (!checkPassword(password, postPassword)) return;

      setGuests((prev) => {
        return prev.filter((g, i) => guest.id !== g.id);
      });

      closeModal();
      
    } catch (error) {
      console.error(error);
    }
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
      <li className="flex flex-col text-gray-600 p-5 backdrop-blur-md">
        <div className="flex flex-row items-center justify-between">
          <div>
            <span className="text-lg font-bold">🌻 {guest.name}</span>
            <span className="ml-2 text-sm text-gray-500">
              {formatDistanceToNow(guest.createdAt, { locale: ko })} 전
            </span>
          </div>
          <button className="icon-button-style" onClick={onClickDelete}>
            <FiTrash2 size={16} />
          </button>
        </div>

        <div className="flex flex-row text-lg pl-1 mt-2 w-full">
          <MdKeyboardArrowRight
            size={24}
            className="flex-shrink-0 border-transparent border-b-2 self-center"
          />
          <div className="flex flex-row px-1 w-full">
            {isEditMode ? (
              <input
                type="text"
                className="bg-transparent w-full outline-none border-b-1 px-2 border-gray-100 border-b-2"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              />
            ) : (
              <span className="w-full px-2 border-transparent border-b-2">
                {guest.message}
              </span>
            )}
          </div>
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
            <button className="icon-button-style">
              <FiEdit2 size={16} onClick={onClickEditMode} />
            </button>
          )}
        </div>
      </li>
    </>
  );
};

export default GuestItem;
