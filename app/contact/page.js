"use client"; // Required in Next.js App Router

import React from "react";

const ContactPage = ({ bgColor = "#ffffff" }) => {
  return (
    <div style={{ backgroundColor: bgColor }}>
      <h1>Contact Us</h1>
    </div>
  );
};

export default ContactPage;
