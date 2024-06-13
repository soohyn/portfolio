import { FC } from "react";

interface ConfirmPasswordModalContentsProps {
  password: string;
  error: boolean;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  closeModal: () => void;
  onClickConfirm: () => Promise<void>;
}

const ConfirmPasswordModalContents: FC<ConfirmPasswordModalContentsProps> = ({
  password,
  error,
  setPassword,
  closeModal,
  onClickConfirm,
}) => {
  return (
    <div>
      <span className="text-lg font-semibold ">비밀번호를 입력해 주세요</span>

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
  );
};

export default ConfirmPasswordModalContents;
