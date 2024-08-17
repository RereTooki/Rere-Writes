import React from "react";
import "../App.css";
import { useState } from "react";

const Testing = () => {
  // State variables to store user input
  const [feedbackMessage, setFeedbackMessage] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState("");

  // State variable to handle error messages
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");

  // Function to validate name and email
  const validate = () => {
    let isValid = true;

    // Name validation
    if (name.length < 2) {
      setNameError("Name must be at least 2 characters long");
      isValid = false;
    } else {
      setNameError("");
    }

    // Email validation
    if (email.length < 3) {
      setEmailError("Email Address must be at least 3 characters long");
      isValid = false;
    } else {
      setEmailError("");
    }

    return isValid;
  };

  // // Function to send feedback email
  const sendFeedbackMessage = (e: any) => {
    //   e.preventDefault();
    //   if (feedbackMessage.trim() !== "") {
    //     emailjs
    //       .send(
    //         "service_u4hp1mr",
    //         "template_8hjpcrt",
    //         {
    //           from_name: "User",
    //           to_name: "Your Name",
    //           message: feedbackMessage,
    //         },
    //         "x5ittGCaJN71qzFuY"
    //       )
    //       .then(
    //         (result) => {
    //           console.log(result.text);
    //           // Show alert that feedback has been sent
    //           alert("Request sent!");
    //           // Reset feedback message
    //           setFeedbackMessage("");
    //         },
    //         (error) => {
    //           console.log(error.text);
    //           // Show alert for error
    //           alert("Error sending feedback. Please try again later.");
    //         }
    //       );
    //   } else {
    //     // Show alert if feedback message is blank
    //     alert("No message sent!");
    //   }
  };

  return (
    <>
      <div className="contactMeGrads sh-[100vh] border-2 border-black py-10 exoFont select-none w3-animate-opacityIntro  px-[3vw] overflow-x-hidden">
        <div
          className="w3-containers pb-[48px] border-black sborder-4 "
          id="projects"
        >
          <h3
            className="text-2xl gradient-border-bottom exoFont pb-[4px]"
            data-aoss="zoom-in"
            data-aoss-duration="700"
          >
            Contact Me!
          </h3>
        </div>
        <div className="sborder-4">
          <div className="bg-clrtransparentgreen/60 flex flex-col justify-center items-center p-10 rounded-lg w-full gap-6 sborder-4 border-black  ">
            <h4 className="text-white font-semibold text-4xl exoFont underline underline-offset-4 sdecoration-wavy decoration-[2spx] border-4 text-center">
              Ready To Collaborate?
            </h4>
            <div
              className="w-[80vw] tab:w-[500px] h-[s400px] shadow-xl rounded-lg px-[4%] py-[4%] border-[1px] border-[#4D4D4] mt-[40px] bg-white"
              data-aoss="zoom-in-up"
              data-aoss-duration="1300"
            >
              <form
                onSubmit={sendFeedbackMessage}
                className="flex flex-col sborder-2 border-black gap-[20px]"
              >
                <div className="flex flex-col gap-2 sborder-2">
                  <label htmlFor="name" className="text-[16px]">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 text-[14px]"
                    placeholder="Enter your full name"
                  />
                  {nameError && (
                    <p className="text-red-500 text-sm">{nameError}</p>
                  )}
                </div>
                <div className="flex flex-col gap-2 sborder-2">
                  <label htmlFor="email" className="text-[16px]">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 text-[14px]"
                    placeholder="Enter your email address"
                  />
                  {emailError && (
                    <p className="text-red-500 text-sm">{emailError}</p>
                  )}
                </div>
                <div className="flex flex-col gap-2 sborder-2">
                  <label htmlFor="feedbackMessage" className="text-[16px]">
                    Got A Message?
                  </label>
                  <textarea
                    id="feedbackMessage"
                    name="feedbackMessage"
                    required
                    value={feedbackMessage}
                    onChange={(e) => setFeedbackMessage(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 text-[14px]"
                    placeholder="Enter your email address"
                  />
                  {emailError && (
                    <p className="text-red-500 text-sm">{emailError}</p>
                  )}
                </div>

                <div className="flex flex-col sborder-2 border-black gap-[10px] mt-[20px]">
                  <div className="sborder-2">
                    <button
                      type="submit"
                      className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md bg-clrtransparentgreen/50 hover:bg-clrtransparentgreen/60 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-xl text-[14px] tab:text-lg text-white"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
            {/* <div className=" text-light-cyans md:underline-offset-2 nxl:underline-offset-4 md:pb-[1.2vw] text-[2vw] nsm:text-[1.2vw] xl:text-[1vw] select-none">
              <div className="flex flex-col md:flex-row gap-[10px] md:gap-auto">
                <textarea
                  placeholder="Feedback? Suggestions?"
                  className="overflow-y-auto border border-gray-400 px-2 pt-[4px] w-[40vw] max-w-[330px] h-auto max-h-[25px] rounded-md text-black text-[10px]"
                  value={feedbackMessage}
                  name="message"
                  onChange={(e) => setFeedbackMessage(e.target.value)}
                />
                <div className="self-end md:self-auto">
                  <button className="ml-2 px-4 py-[2px] bg-black text-lightCyans h-full max-h-[25px] text-white rounded-sm md:rounded-md">
                    Send
                  </button>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testing;
