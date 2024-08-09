import React from "react";
import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";

import { IoMdClose } from "react-icons/io";

interface PoemsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PoemsModal: React.FC<PoemsModalProps> = ({ isOpen, onClose }) => {
  return (
    <>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-20 focus:outline-none "
        onClose={onClose}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto ">
          <div className="flex min-h-full items-center justify-center p-4">
            <Dialog.Title className="fixed inset-0 bg-black opacity-30" />
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white/90 p-6 backdrop-blur-lg duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <DialogTitle
                as="h3"
                className="text-bases/7 font-semibold text-2xl text-gray-500 hover:text-gray-700 "
              >
                <span className="underline underline-offset-4">
                  Task Title:
                </span>{" "}
                This is the task title
              </DialogTitle>
              <p className="mt-8 text-sm/6 text-gray-500 hover:text-gray-700 shadow rounded-lg p-4">
                <div className="font-medium text-md underline underline-offset-2">
                  Task Description:
                </div>{" "}
                this is the task description
              </p>
              <button className="absolute top-4 right-4 " onClick={onClose}>
                <IoMdClose className="h-5 w-5" color="gray-100" />
              </button>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default PoemsModal;
