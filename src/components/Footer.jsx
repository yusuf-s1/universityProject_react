import React from 'react';
import {
  SlSocialLinkedin,
  SlSocialYoutube,
  SlSocialInstagram,
} from 'react-icons/sl';
export default function Footer() {
  return (
    <>
      <footer className="container-fluid">
        <div className="d-flex justify-content-end align-items-center gap-4 bg-light p-4">
          <a href="#" className="fs-3 text-black">
            <SlSocialLinkedin />
          </a>
          <a href="#" className="fs-3 text-danger">
            <SlSocialYoutube />
          </a>
          <a href="#" className="fs-3 text-black">
            <SlSocialInstagram />
          </a>
        </div>
        <div></div>
        <div className="bg-danger"></div>
      </footer>
    </>
  );
}
