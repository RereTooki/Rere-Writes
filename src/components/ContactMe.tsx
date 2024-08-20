import React, { useRef } from "react";
import "../App.css";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import v1LMob from "../assets/icons/bg-pattern-intro-left-mobile.svg";
import v1LDesk from "../assets/icons/bg-pattern-intro-left-desktop.svg";
import v1RMob from "../assets/icons/bg-pattern-intro-right-mobile.svg";
import v1RDesk from "../assets/icons/bg-pattern-intro-right-desktop.svg";
import undTop from "../assets/icons/angry-underline.svg";
import undBot from "../assets/icons/double-underline.svg";

const ContactMe = () => {
  // State variables to store user input
  const [message, setMessage] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState("");

  // State variable to handle error messages
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("Enter a valid email address");
  const [nameError, setNameError] = useState("Insufficient name length");
  const [messageError, setMessageError] = useState(
    "Insufficient message length"
  );

  // Function to validate name, email and feedback messaf
  const validate = () => {
    let isValid = true;

    // Name validation
    if (name.length < 3) {
      setNameError("Insufficient name length");
      isValid = false;
    }

    // Email validation
    if (email.length < 6) {
      setEmailError("Enter a valid email address");
      isValid = false;
    }

    // Message validation
    if (message.length < 6) {
      setMessageError("Insufficient message length");
      isValid = false;
    }

    return isValid;
  };

  // // Function to send feedback email
  const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validate()) {
      emailjs
        .send(
          "service_j8gc0xm",
          "template_la9ky9b",
          {
            from_name: "User",
            to_name: "Your Name",
            user_name: name,
            user_email: email,
            message: message,
          },
          "x5ittGCaJN71qzFuY"
        )
        .then(
          (result) => {
            console.log(result.text);
            // Show alert that feedback has been sent
            alert("Message sent! You'll be contacted shortly!");
            // Reset feedback message
            setName("");
            setEmail("");
            setMessage("");
          },
          (error) => {
            console.log(error.text);
            // Show alert for error
            alert("Error sending feedback. Please try again later.");
          }
        );
    }
  };

  return (
    <>
      <div className="projectsGrad skewedRN pb-8 tab:pb-10">
        <div className="absolute sborder-2 border-black w-fit translate-y-[25vw] md:translate-y-[70px] tab:translate-y-[70vh] xl:translate-y-[50vh] hidden tab:block tab:scale-[1.8] lg:scale-[2.3] xl:scale-[2.5] w-[1s00%] tab:h-[50vh] ">
          <picture className="drop-shadow-[0_40px_40px_rgba(0,0,0,0.15)]">
            <source className="" media="(min-width: 565px)" srcSet={v1LDesk} />
            <img
              src={v1LMob}
              alt=""
              className="tab:scale-[1.8] lg:scale-[2.3] xl:scale-[2.5] w-[1s00%] tab:h-[50vh]"
              data-aos="fade-right"
              data-aos-duration="1700"
            />
          </picture>
        </div>
        <div className="absolute sborder-2 border-black w-fit translate-y-[50vh] tab:translate-y-[100px]  nxl:translate-y-[140px] scale-[1.1] tab:scale-[1.3] nxl:scale-[1.5] right-0  origin-right z-0 tab:hidden">
          <picture
            className="drop-shadow-[0_40px_40px_rgba(0,0,0,0.15)]"
            data-aos="zoom-in-left"
            data-aos-duration="700"
          >
            <source className="" media="(min-width: 565px)" srcSet={v1RDesk} />
            <img
              src={v1RMob}
              alt=""
              className="nsm:translsate-x-[44%] md:trasnslate-x-[40%] nsm:transslate-y-[60%] md:translate-y-0 nsm:scale-[1s.7] w-[1s00%] tab:h-[50vh]"
              data-aos="fade-left"
              data-aos-duration="1700"
            />
          </picture>
        </div>
        <div className="contactMeGrads  sh-[100vh] sborder-2 border-black py-10 exoFont select-none w3-animate-opacityIntros  px-[3vw] overflow-x-hidden ">
          <div
            className="w3-containers pb-[48px] border-black sborder-4 "
            id="projects"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            <h3 className="text-3xl tab:text-4xl gradient-border-bottom playfairFont pb-[4px] dark:text-white]">
              Contact Me
            </h3>
          </div>
          <div className="sborder-4">
            <div className="bg-clrtransparentgreen/60s sbg-gradient-to-r from-clrtransparentgreen/50 via-clrtransparentgreen/60  to-clrtransparentgreen/70 flex flex-col justify-center items-center px-10 rounded-lg w-full gap-10 xl:gap-8 sborder-4 border-black">
              <h4
                className="text-[#52647C] tab:text-[#626F89] font-semibold text-4xl tab:text-6xl xl:text-[60px] exoFont sunderline underline-offset-4 sdecoration-wavy decoration-[2spx] sborder-4 text-center leading-[1.3]  z-40 tab:leading-[1.25]"
                data-aos="zoom-in"
                data-aos-duration="2000"
              >
                Looking To{" "}
                <span className="whitespace-nowrap underline-offset-[10px] ">
                  <span className="italic sunderline decoration-dashed tracking-widest decoration-[#96A9C6] sacramentoFont text-5xl tab:text-7xl xl:text-[70px]">
                    Collaborate ?
                  </span>{" "}
                  <div className="border- relativse">
                    <picture
                      className=""
                      data-aos="zoom-in-"
                      data-aos-duration="2500"
                    >
                      <source
                        className=""
                        media="(min-width: 565px)"
                        srcSet={undBot}
                      />
                      <img src={undTop} alt="" className="" />
                    </picture>
                  </div>
                </span>
              </h4>
              <div
                className="w-[80vw] tab:w-[500px] h-[s400px] shadow-xl rounded-lg px-[4%] py-[4%] xl:p-[3%] border-[1px] border-[#4D4D4] tab:mt-[10px] xl:mt-0 bg-white z-20"
                data-aos="zoom-in"
                data-aos-duration="2000"
              >
                <form
                  onSubmit={sendMessage}
                  className="flex flex-col sborder-2 border-black gap-[20px]"
                >
                  <div className="flex flex-col gap-2 sborder-2">
                    <label htmlFor="name" className="text-[16px]">
                      Name
                    </label>
                    <input
                      id="name"
                      name="user_name"
                      type="text"
                      autoComplete="name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-clrtransparentgreen focus:border-clrtransparentgreen focus:z-10 text-[14px]"
                      placeholder="Full Name"
                    />
                    {name.length >= 1 && name.length < 3 && (
                      <p className="text-red-500 text-sm">{nameError}</p>
                    )}
                  </div>
                  <div className="flex flex-col gap-2 sborder-2">
                    <label htmlFor="email" className="text-[16px]">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="user_email"
                      type="email"
                      autoComplete="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-clrtransparentgreen focus:border-clrtransparentgreen focus:z-10 text-[14px]"
                      placeholder="Email Address"
                    />
                    {email.length >= 1 && email.length < 6 && (
                      <p className="text-red-500 text-sm">{emailError}</p>
                    )}
                  </div>
                  <div className="flex flex-col gap-2 sborder-2">
                    <label htmlFor="message" className="text-[16px]">
                      Got A Message?
                    </label>
                    <textarea
                      id="message"
                      name="user_message"
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-clrtransparentgreen focus:border-clrtransparentgreen focus:z-10 text-[14px] h-[10pxs] tab:h-[100px]"
                      placeholder="Messsage"
                    />
                    {message.length >= 1 && message.length < 6 && (
                      <p className="text-red-500 text-sm">{messageError}</p>
                    )}
                  </div>
                  <div className="flex flex-col sborder-2 border-black gap-[10px] mt-[20px]">
                    <div className="sborder-2">
                      <button
                        type="submit"
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md bg-generalClr/90 hover:bg-generalClr hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-xl text-[14px] tab:text-lg text-white"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactMe;
