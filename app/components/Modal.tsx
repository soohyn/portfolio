"use client";
import { FC, HtmlHTMLAttributes, useEffect } from "react";

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
      } backdrop-blur-md flex justify-center items-center fixed top-0 bottom-0 left-0 right-0 z-10`}
      onClick={onClickClose}
    >
      <div className="bg-white p-10 ">{children}</div>
    </div>
  );
};

export default Modal;
