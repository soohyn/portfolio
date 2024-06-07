import { FC, useCallback, useEffect, useState } from "react";
import GuestItem from "./GuestItem";
import Modal from "./Modal";

export type OnConfirm = (password: string) => Promise<void>;
interface GuestList {
  guests: Guest[];
}

const GuestList: FC<GuestList> = ({ guests }) => {
  const [isModalOpened, setIsModalOpened] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [onConfirm, setOnConfirm] = useState<OnConfirm>(async () => {});

  const closeModal = () => {
    setIsModalOpened(false);
    setPassword("");
  };

  // 모달을 열면서 파라미터로 confirm 버튼 클릭 시 동작을 저장한다.
  // guestItem에서 비밀번호를 받았으면 편했을 것...
  const openModal = (confirm: OnConfirm) => {
    setIsModalOpened(true);
    setOnConfirm(() => confirm);
  };

  const onClickConfirm = useCallback(async () => {
    onConfirm(password);
    closeModal();
  }, [isModalOpened]);

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
                password={password}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
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
