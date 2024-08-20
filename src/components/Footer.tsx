import React from "react";
import "../App.css";
import logo from "../assets/images/image.png";
import { SiGmail } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";
import { SiTelegram } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const email = "rereloluwa.afolabi.tooki@gmail.com"; // Replace with the recipient's email address

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  const phoneNumber = "+2348123717074"; // Replace with the recipient's phone number
  const message = encodeURIComponent(
    "Hello Rere, I'm interested in a collaboration!"
  ); // Encode message

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };
  return (
    <>
      <div className="bg-very-dark-black-blues/70 dark:bg-very-dark-black-blues items-center flex flex-col w-[100vw] overflow-hidden ">
        <div className=" flex flex-col tab:flex-row justify-around tab:justify-evenly items-center tab:items-start py-[80px] tab:py-[70px] gap-[40px] tab:gap-[1em]  px-[20vw] text-center tab:px-0 flex-wrap content-center tab:w-[100vw]">
          <div
            className="tab:self-center w-auto h-auto max-w-[300px] tab:max-w-[200px]"
            data-aos="zoom-in"
            data-aos-duration="700"
          >
            <img /* For Mobile screens*/
              src={logo}
              alt="A law image"
              className="w-full h-full object-cover"
            />
          </div>

          <div
            className=" flex flex-col gap-[30px]  tab:max-w-[240px]"
            data-aos="zoom-in"
            data-aos-duration="700"
          >
            <div className="text-white  underline underline-offset-4 ">
              Contact Me
            </div>
            <div className="flex flex-col gap-[5px] text-white  text-start">
              <div className="text-grayish-blues">
                Telephone: +234 812 371 7074
              </div>
              <div className="text-grayish-blues">
                LinkedIn:{" "}
                <a href="https://www.linkedin.com/in/rerel-oluwa-tooki-b53396253/">
                  Rerel'Oluwa Tooki
                </a>
              </div>
              <div className="text-grayish-blues">
                Email: rereafolabi@gmail.com
              </div>
              <div className="pb-[10px] text-grayish-blues">
                Email: rereloluwa.afolabi.tooki@gmail.com
              </div>
            </div>
          </div>
          <div
            className=" flex flex-col gap-[30px]  tab:max-w-[30vw]"
            data-aos="zoom-in"
            data-aos-duration="700"
          >
            <div className="text-white  underline underline-offset-4 ">
              Stay Connected
            </div>
            <div className="flex flex-row istems-center justify-around flex-wrap max-w-[130px] gap-2 sborder-2">
              <div className="w-[2rem]  h-[2rem] ">
                <button
                  onClick={handleEmailClick}
                  className="w-full h-full object-cover"
                >
                  <SiGmail
                    className="w-full h-full object-cover"
                    color="#fff"
                  />
                </button>
              </div>

              <div className="w-[2rem]  h-[2rem] ">
                <button
                  onClick={handleWhatsAppClick}
                  className="w-full h-full object-cover"
                >
                  <FaWhatsapp
                    className="w-full h-full object-cover"
                    color="#fff"
                  />{" "}
                </button>
              </div>
              <div className="w-[2rem]  h-[2rem] ">
                <a href="https://t.me/reretooki">
                  <SiTelegram
                    className="w-full h-full object-cover"
                    color="#fff"
                  />{" "}
                </a>
              </div>
              <div className="w-[2rem]  h-[2rem] ">
                <a href="https://www.linkedin.com/in/rerel-oluwa-tooki-b53396253/">
                  <FaLinkedin
                    className="w-full h-full object-cover"
                    color="#fff"
                  />{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="attribution pb-[30px] underline-offset-4 whitespace-nowraps text-[4.5vw] md:text-[16px] text-center text-white  px-2">
          Designed & Developed by{" "}
          <a
            href="https://rere-writes.vercel.app/"
            className="text-[4.5vw] md:text-[16px] underline decoration-dotted"
            target="_blank"
          >
            Rerel'Oluwa Tooki
          </a>{" "}
          © 2024. All Rights Reserved.
        </div>
      </div>
    </>
  );
};

export default Footer;
