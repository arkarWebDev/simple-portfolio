import React from "react";

const Footer = () => {
  return (
    <section className="md:flex items-center justify-between py-10">
      <div className=" border border-gray-900 w-1/3 hidden md:block dark:border-white"></div>
      <p className="text-center text-sm text-gray-900 dark:text-white">
        &copy; Copyright 2023 - Devarkar
      </p>
      <div className=" border border-gray-900 w-1/3 hidden md:block  dark:border-white"></div>
    </section>
  );
};

export default Footer;
