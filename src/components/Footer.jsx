import React from "react";

function Footer() {
  return (
    <footer className="flex justify-center bg-white text-black text-center p-4 mt-auto">
      <p className="mx-11">&copy; Copyright by Coders Lab</p>
      <div className="flex">
        <a href="//facebook.com">
          <img className="mx-3" src="../assets/Facebook.svg" />
        </a>
        <a href="//instagram.com">
          <img src="../assets/Instagram.svg" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
