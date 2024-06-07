"use client";
import { FC, HtmlHTMLAttributes, useEffect } from "react";
import { FiXCircle } from "react-icons/fi";

interface ModalProps extends HtmlHTMLAttributes<HTMLDivElement> {
  isOpened: boolean;
  onClose: () => void;
}

const Modal: FC<ModalProps> = ({ isOpened, children, onClose }) => {
  const setRootScroll = () => {
    const root = document.querySelector("body") as HTMLElement;

    if (!root) return;

    if (isOpened) {
      root.style.overflow = "hidden";
    } else {
      root.style.overflow = "auto";
    }
  };

  const onClickClose = () => {
    onClose();
  };

  useEffect(() => {
    setRootScroll();
  }, [isOpened]);

  return (
    <div
      className={`${
        isOpened ? "visible" : "invisible"
      }  backdrop-blur-md flex justify-center items-center fixed top-0 bottom-0 left-0 right-0 z-10 p-4`}
      onClick={onClickClose}
    >
      <div className="flex flex-col rounded-lg  shadow-2xl bg-white overflow-hidden w-full min-w-[200px] md:max-w-[420px] md:w-auto">
        <div className="flex flex-row justify-end p-3">
          <button className="icon-button-style" onClick={onClickClose}>
            <FiXCircle size={20} />
          </button>
        </div>
        <div className="flex flex-col p-6 md:p-8">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
