"use client";

import React, {
  FC,
  SetStateAction,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import GuestItem from "./GuestItem";
import Modal from "./Modal";
import ConfirmPasswordModalContents from "./ConfirmPasswordModalContents";

export type OnConfirm = (password: string) => Promise<void>;
interface GuestList {
  guests: Guest[];
  setGuests: React.Dispatch<SetStateAction<Guest[]>>;
  prepare: () => Promise<void>;
}

const GuestList: FC<GuestList> = ({ guests, setGuests, prepare }) => {
  const [isModalOpened, setIsModalOpened] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [onConfirm, setOnConfirm] = useState<OnConfirm>(async () => {});

  const closeModal = () => {
    setIsModalOpened(false);
    setError(false);
    setPassword("");
  };

  const checkPassword = (password: string, postPassword: string) => {
    if (postPassword === password) {
      return true;
    }
    setError(true);
    return false;
  };

  // 모달을 열면서 파라미터로 confirm 버튼 클릭 시 동작을 받아 저장
  // guestItem에서 비밀번호를 받았으면 편했을 것...
  const openModal = (confirm: OnConfirm) => {
    setIsModalOpened(true);

    //함수 저장 시 setState 구조상 아래와 같이 저장
    setOnConfirm(() => confirm);
  };

  const onClickConfirm = async () => {
    setError(false);
    await onConfirm(password);
  };

  return (
    <>
      <ul className="flex flex-col w-full gap-5">
        {guests.map((g, idx) => {
          return (
            <GuestItem
              key={`guest-${g.id}`}
              guest={g}
              openModal={openModal}
              setGuests={setGuests}
              checkPassword={checkPassword}
              closeModal={closeModal}
              prepare={prepare}
            />
          );
        })}
      </ul>

      <Modal isOpened={isModalOpened} onClose={closeModal}>
        <ConfirmPasswordModalContents
          password={password}
          error={error}
          setPassword={setPassword}
          onClickConfirm={onClickConfirm}
          closeModal={closeModal}
        />
      </Modal>
    </>
  );
};

export default GuestList;
