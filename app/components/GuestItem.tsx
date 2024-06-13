"use client";

import React, { FC, SetStateAction, useEffect, useState } from "react";
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
  prepare: () => Promise<void>;
}

const GuestItem: FC<GuestItemProps> = ({
  guest,
  openModal,
  setGuests,
  closeModal,
  checkPassword,
  prepare,
}) => {
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [message, setMessage] = useState<string>(guest.message);
  const [open, setOpen] = useState<boolean>(false);
  const [isSecret, setIsSecret] = useState<boolean>(guest.is_secret);

  const updateMessage = async (password: string) => {
    try {
      if (isSecret) return;
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
      if (isSecret) return;
      const postPassword = guest.password;
      if (!checkPassword(password, postPassword)) return;

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/guest/${guest.id}`,
        { password }
      );

      setGuests((prev) => {
        return prev.filter((g, i) => guest.id !== g.id);
      });

      await prepare();
      closeModal();
    } catch (error) {
      console.error(error);
    }
  };

  const getAuth = async (password: string) => {
    if (!checkPassword(password, guest.password)) return;

    const result = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/guest/auth?id=${guest.id}`,
      { password }
    );

    if(!result.data) return

    setIsSecret(false);
    closeModal();
  };

  const onClickOpen = () => {
    setOpen((prev) => !prev);
  };

  const onClickUnlock = () => {
    openModal(getAuth);
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

  useEffect(() => {
    console.log(isSecret);
    setMessage(isSecret ? "비밀글 입니다" : guest.message);
  }, [isSecret]);

  return (
    <div className=" relative">
      {isSecret && (
        <div className="absolute z-10 top-0 bottom-0 left-0 right-0 text-center flex items-center justify-center">
          <button
            className="icon-button-style text-4xl"
            onClick={onClickUnlock}
          >
            🔒
          </button>
        </div>
      )}
      <li
        className={`w-full flex flex-col text-gray-600 p-4 backdrop-blur-md rounded-md ${
          isSecret && "blur-md"
        }`}
      >
        <div className="flex flex-row items-center justify-between">
          <div>
            <span className="text-lg font-bold">
              🌻 {isSecret ? "비-밀" : guest.name}
            </span>
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
                {isSecret ? "비밀글 입니다" : guest.message}
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
    </div>
  );
};

export default GuestItem;
