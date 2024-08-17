import React, { useRef } from "react";
import "../App.css";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const ContactMe = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  // Use useEffect to focus on the input field when it becomes visible
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

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
      <div className="contactMeGrads sh-[100vh] sborder-2 border-black py-10 exoFont select-none w3-animate-opacityIntro  px-[3vw] overflow-x-hidden">
        <div
          className="w3-containers pb-[48px] border-black sborder-4 "
          id="projects"
          data-aoss="zoom-in"
          data-aoss-duration="1500"
        >
          <h3 className="text-2xl gradient-border-bottom exoFont pb-[4px]">
            Contact Me!
          </h3>
        </div>
        <div className="sborder-4">
          <div className="bg-clrtransparentgreen/60s bg-gradient-to-r from-clrtransparentgreen/50 via-clrtransparentgreen/60  to-clrtransparentgreen/70 flex flex-col justify-center items-center p-10 rounded-lg w-full gap-6 xl:gap-0 sborder-4 border-black">
            <h4
              className="text-white font-semibold text-4xl xl:text-6xl exoFont sunderline underline-offset-4 sdecoration-wavy decoration-[2spx] sborder-4 text-center leading-[1.3] "
              data-aoss="fade-up"
              data-aos-duration="1500"
            >
              Ready To{" "}
              <span className="whitespace-nowrap">
                <span className="italisc underline underline-offset-4 decoration-wavy tracking-wider">
                  Collaborate
                </span>{" "}
                <span className="italisc underline underline-offset-4 decoration-wavy tracking-wider">
                  ?
                </span>{" "}
              </span>
            </h4>
            <div
              className="w-[80vw] tab:w-[500px] h-[s400px] shadow-xl rounded-lg px-[4%] py-[4%] xl:p-[3%] border-[1px] border-[#4D4D4] tab:mt-[40px] xl:mt-[30px] bg-white"
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
                    ref={inputRef}
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
                    className="w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-clrtransparentgreen focus:border-clrtransparentgreen focus:z-10 text-[14px] h-[100px]"
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
                      className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md bg-clrtransparentgreen/70 hover:bg-clrtransparentgreen/80 hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-xl text-[14px] tab:text-lg text-white"
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
    </>
  );
};

export default ContactMe;
