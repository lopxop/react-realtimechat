import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";

const Notification = () => {
  useEffect(() => {
    import("react-toastify/dist/ReactToastify.css");
  }, []);

  return (
    <div className="">
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default Notification;

