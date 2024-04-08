/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";

export const AppContext = createContext();

// eslint-disable-next-line react/prop-types
const AppContextProvider = ({ children }) => {
  const location = useLocation();
  let currentPage = location.pathname;

  const navigate = useNavigate();

  const [loader, setLoader] = useState(false);

  const [loading, setLoading] = useState(false);
  const [messageSent, setmessageSent] = useState(false);

  useEffect(() => {
    setmessageSent(false);
  }, [currentPage]);

  const sendContactMessage = (data) => {
    setLoading(true);

    emailjs
      .send("service_7346e8h", "template_lfh45rc", data, "5EMrfLrL5V_bIY5gj")
      .then(
        (response) => {
          console.log("Email sent!", response);
          setmessageSent(true);
        },
        (error) => {
          console.error("Error sending email:", error);
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <AppContext.Provider
      value={{
        currentPage,
        loader,
        navigate,
        sendContactMessage,
        loading,
        messageSent,
        setmessageSent,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = () => {
  return useContext(AppContext);
};

export default AppContextProvider;
