import React, { useRef, useState } from "react";

function Contact() {
  const emailRef = useRef(null);
  const subjectRef = useRef(null);
  const messageRef = useRef(null);
  const [submitMessage, setSubmitMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Extract values from refs
    const email = emailRef.current.value;
    const subject = subjectRef.current.value;
    const message = messageRef.current.value;

    // Make a request to web3forms API to submit the form data
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          apikey: import.meta.env.VITE_API_KEY,
          email,
          subject,
          message,
        }),
      });

      if (response.ok) {
        // Clear form fields
        emailRef.current.value = "";
        subjectRef.current.value = "";
        messageRef.current.value = "";

        // Display success message
        setSubmitMessage({
          message: "Message sent successfully!",
          color: "mt-6 text-white text-2xl w-auto h-10",
        });

        // Clear success message after 5 seconds
        setTimeout(() => {
          setSubmitMessage(null);
        }, 5000);
      } else {
        // Display error message
        setSubmitMessage({
          message: "Error submitting form. Please try again later.",
          color: "mt-6 text-white text-2xl w-auto h-10",
        });

        // Clear error message after 5 seconds
        setTimeout(() => {
          setSubmitMessage(null);
        }, 5000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      // Display error message
      setSubmitMessage({
        message: "Error submitting form. Please try again later.",
        color: "mt-6 text-white text-2xl w-auto h-10",
      });

      // Clear error message after 5 seconds
      setTimeout(() => {
        setSubmitMessage(null);
      }, 5000);
    }
  };
  return (
    <>
      <div>
        <div className="bg-slate-900 box-border w-full h-auto flex justify-center">
          <section
            id="Contact"
            className="bg-slate-900 h-auto w-full sm:w-4/6 sm:h-auto px-4 sm:px-6 lg:px-8 mb-20"
          >
            <div className="w-full">
              <p className="font-bold font-real text-left text-orange-400 text-xl mt-12 sm:mt-24 sm:text-3xl">
                ../Contact
              </p>
              <div className="flex items-center justify-start space-x-4 mt-16">
                <a
                  href="https://www.linkedin.com/in/sean-roxas/"
                  target="_blank"
                  className="text-4xl sm:text-5xl"
                >
                  <svg
                    className="text-white"
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path>
                  </svg>
                </a>

                <a
                  href="https://github.com/seanroxas"
                  target="_blank"
                  className="text-4xl sm:text-5xl"
                >
                  <svg
                    className="text-white"
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                  </svg>
                </a>
              </div>

              <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl"></p>
              <form action="#" className="space-y-8" onSubmit={handleSubmit}>
                <div>
                  <input
                    type="hidden"
                    name="apikey"
                    value={import.meta.env.VITE_API_KEY}
                  ></input>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    ref={emailRef}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="sample@gmail.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Subject:
                  </label>
                  <input
                    type="text"
                    id="subject"
                    ref={subjectRef}
                    className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="text-white block mb-2 text-sm font-medium"
                  >
                    Message:
                  </label>
                  <textarea
                    id="message"
                    rows="6"
                    ref={messageRef}
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Leave a message..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="py-3 px-5 text-sm font-medium text-center text-white border-2 border-orange-400 rounded-lg bg-primary-700 sm:w-fit hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-primary-300"
                >
                  Send message
                </button>
              </form>
              {submitMessage && (
                <p className={submitMessage.color}>{submitMessage.message}</p>
              )}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Contact;
