import React from "react";
import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { projects } from "./Projects";
import { NavLink } from "react-router-dom";

interface PoemsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PoemsModal: React.FC<PoemsModalProps> = ({ isOpen, onClose }) => {
  // Function to handle the click event and scroll to the top
  const handleItemClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-20 focus:outline-none select-none"
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
                className="text-bases/7 font-semibold text-2xl text-gray-700 hover:text-gray-900 "
              >
                <span className="underline underline-offset-4">My Poems</span>{" "}
              </DialogTitle>
              <p className="mt-8 text-sm/6 text-gray-500 hover:text-gray-700 shadow rounded-lg p-4">
                <div className="containers mx-auto sborder-4 border-black max-h-[40vh] overflow-y-scroll scroll scrollModal">
                  <ol className="list-decimal px-5">
                    {projects.map((project, index) => (
                      <NavLink
                        to={project.route}
                        onClick={handleItemClick}
                        key={index}
                      >
                        <li className="flex items-center mb-2 list-decimal border-b-2 border-black py-2 border-double hover:bg-gray-500 hover:rounded-lg hover:text-white hover:scale-[1.03]">
                          <img
                            src={project.imgSrc}
                            alt={project.imgAlt}
                            className="w-10 h-10 mr-2 rounded-lg" // Tailwind classes for 20x20px image
                          />
                          <span>{project.title}</span>
                        </li>
                      </NavLink>
                    ))}
                  </ol>
                </div>
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
