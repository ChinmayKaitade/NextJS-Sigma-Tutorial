import React from "react";
import Script from "next/script";

const Contact = () => {
  return (
    <div>
      <Script>{`alert("Welcome to Contact Page")`}</Script>
      Contact Page
    </div>
  );
};

export default Contact;

export const metadata = {
  title: "Contact Facebook",
  description:
    "This is contact facebook and we can connect with the world using facebook",
};
