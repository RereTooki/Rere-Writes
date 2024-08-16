import React from "react";
import "../App.css";
import { useState } from "react";

const Testing = () => {
  const [feedbackMessage, setFeedbackMessage] = useState<string>("");
  const [name, setName] = useState<string>("");

  // State variables to store user input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  // State variable to handle login error messages
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loginError, setLoginError] = useState("Login failed");

  // // Function to send feedback email
  const sendFeedbackEmail = (e: any) => {
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
            data-aos="zoom-in"
            data-aos-duration="700"
          >
            Contact Me!
          </h3>
        </div>
        <div className="border-4">
          <div className="bg-clrtransparentgreen/70 flex flex-col justify-center items-center p-10 rounded-lg w-full gap-6">
            <h4 className="text-white font-semibold text-4xl exoFont underline underline-offset-4 sdecoration-wavy decoration-[2spx] border-4 text-center">
              Ready To Collaborate?
            </h4>
            <div
              className="w-[500px] h-[s400px] shadow-xl rounded-lg px-[4%] py-[4%] border-[1px] border-[#4D4D4] mt-[40px] bg-white"
              data-aos="zoom-in-up"
              data-aos-duration="1300"
            >
              <form
                onSubmit={sendFeedbackEmail}
                className="flex flex-col sborder-2 border-black gap-[20px]"
              >
                <div className="flex flex-col gap-2 sborder-2">
                  <label htmlFor="email" className="text-[16px]">
                    Email
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
                  <label htmlFor="password" className="text-[16px]">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 text-[14px]"
                    placeholder="Password"
                  />
                  {passwordError && (
                    <p className="text-red-500 text-sm">{passwordError}</p>
                  )}
                </div>
                <div className="flex flex-col sborder-2 border-black gap-[10px] mt-[20px]">
                  <div className="sborder-2">
                    <button
                      type="submit"
                      className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md bg-[#FFE600] text-black hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-xl text-[14px]"
                    >
                      Sign-in
                    </button>
                  </div>
                  {/* <div className="">
                  <Link
                    to="/signUp"
                    className="font-medium hover:font-semibold hover:underline underline-offset-2 text-[12px] sborder-2 flex flex-col items-center"
                  >
                    Don't have an account? Sign Up
                  </Link>
                </div> */}
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
