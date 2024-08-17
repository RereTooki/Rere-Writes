import React from "react";
import "../App.css";
import logo from "../assets/images/logo2.png";
import { SiGmail } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const email = "rereloluwa.afolabi.tooki@gmail.com"; // Replace with the recipient's email address

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  const phoneNumber = "+2347044173445"; // Replace with the recipient's phone number
  const message = encodeURIComponent("Hello, I'm interested in OACoker&Co."); // Encode message

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };
  return (
    <>
      <div className=" bg-very-dark-black-blues items-center flex flex-col ">
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
            className=" flex flex-col gap-[30px] h-[100%]"
            data-aos="zoom-in"
            data-aos-duration="700"
          >
            <div className="text-white underline underline-offset-4 ">
              About Us
            </div>
            <div className="flex flex-col gap-[5px]">
              <div className="pb-[10px] text-grayish-blues tab:max-w-[350px] tab:text-start">
                This is a law and notary public platform under the leadership of
                over 22 years experienced supreme court of Nigeria Legal
                Practitioner with physical office in Lagos Nigeria.
              </div>
            </div>
          </div>
          {/* <div className="border-2 flex flex-col gap-[30px] tab:max-w-[186px]">
            <div className="text-white underline underline-offset-4 ">
              Our Services
            </div>
            <div className="flex flex-col gap-[15px] text-start">
              <div className="text-grayish-blues">
                Administering notarial certificates for document authentication
              </div>
              <div className="text-grayish-blues">
                Taking Affidavits, Oaths, and Acknowledgements
              </div>
              <div className="text-grayish-blues">Attesting legal documents</div>
              <div className="text-grayish-blues">
                Repairing property documents and Power of Attorney
              </div>
              <div className="pb-[10px] text-grayish-blues">
                Witnessing events/transactions
              </div>
            </div>
          </div> */}
          <div
            className=" flex flex-col gap-[30px]  tab:max-w-[240px]"
            data-aos="zoom-in"
            data-aos-duration="700"
          >
            <div className="text-white underline underline-offset-4 ">
              Contact Us
            </div>
            <div className="flex flex-col gap-[5px] text-start">
              <div className="text-grayish-blues">
                Telephone: +234 803 313 6313
              </div>
              <div className="text-grayish-blues">
                WhatsApp: +234 704 417 3445
              </div>
              <div className="pb-[10px] text-grayish-blues">
                Email: oacoker2@gmail.com
              </div>
            </div>
          </div>
          <div
            className=" flex flex-col gap-[30px]  tab:max-w-[30vw]"
            data-aos="zoom-in"
            data-aos-duration="700"
          >
            <div className="text-white underline underline-offset-4 ">
              Stay Connected
            </div>
            <div className="flex flex-row istems-center justify-around">
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
            </div>
          </div>
        </div>
        <div className="attribution pb-[30px] underline-offset-4 whitespace-nowraps text-[4.5vw] md:text-[16px]">
          © 2024. All Rights Reserved.{" "}
          <a
            href="https://oluyomicoker.vercel.app/"
            className="text-[4.5vw] md:text-[16px]"
            target="_blank"
          >
            O A COKER & CO.
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
