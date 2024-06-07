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

export type OnConfirm = (password: string) => Promise<void>;
interface GuestList {
  guests: Guest[];
  setGuests: React.Dispatch<SetStateAction<Guest[]>>;
}

const GuestList: FC<GuestList> = ({ guests, setGuests }) => {
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
    onConfirm(password);
  }

  return (
    <>
      <ul className="flex flex-col w-full gap-8">
        {guests.length <= 0 ? (
          <span className="text-2xl self-center mt-20">🌼 🌻 🌼 🌻 🌼</span>
        ) : (
          guests.map((g, idx) => {
            return (
              <GuestItem
                key={`guest-${idx}`}
                guest={g}
                openModal={openModal}
                setGuests={setGuests}
                checkPassword={checkPassword}
                closeModal={closeModal}
              />
            );
          })
        )}
      </ul>

      <Modal isOpened={isModalOpened} onClose={closeModal}>
        <div>
          <span className="text-lg font-semibold ">
            비밀번호를 입력해 주세요
          </span>

          <input
            className="border-gray-100 input-style w-full mt-4"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && (
            <span className="text-rose-500 text-sm font-semibold mt-2 ml-2">
              비밀번호를 확인해 주세요.
            </span>
          )}
          <div className="flex flex-row mt-4 gap-2">
            <button
              className="button-style-secondary p-1 w-full rounded-md"
              onClick={closeModal}
            >
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

export default GuestList;
