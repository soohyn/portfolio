import { formatDistanceToNow } from "date-fns";
import { ko } from "date-fns/locale";
import { FC, useState } from "react";
import { FiCheck, FiEdit2, FiTrash2, FiX } from "react-icons/fi";
import { MdKeyboardArrowRight } from "react-icons/md";

interface GuestItemProps {
  guest: Guest;
}

const GuestItem: FC<GuestItemProps> = ({ guest }) => {
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [message, setMessage] = useState<string>(guest.message);

  const onClickEditMode = () => {
    setIsEditMode((prev) => !prev);
  };

  const onClickSave = async () => {
    try {
      setIsEditMode(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <li className="flex flex-col text-gray-600 p-5 backdrop-blur-md">
      <div className="flex flex-row items-center justify-between">
        <div>
          <span className="text-lg font-bold">🌻 {guest.name}</span>
          <span className="ml-2 text-sm text-gray-500">
            {formatDistanceToNow(guest.createdAt, { locale: ko })} 전
          </span>
        </div>
        <button className="icon-button-style">
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
              <FiX size={16} onClick={onClickEditMode} />
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
  );
};

export default GuestItem;
