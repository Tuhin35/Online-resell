import React from 'react';
import logo from "./logo.png"
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <footer className="footer mt-5 p-20  text-black text-bold">
        <div>
        <Link to='/' className="btn btn-primary flex justify-between text-white normal-case text-xl"> <img src={logo} class="h-12 mr-5" alt="ORS Logo" /> Online ReSell </Link>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <Link className="link link-hover">Branding</Link>
          <Link className="link link-hover">Design</Link>
          <Link className="link link-hover">Marketing</Link>
          <Link className="link link-hover">Advertisement</Link>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <Link className="link link-hover">About us</Link>
          <Link className="link link-hover">Contact</Link>
          <Link className="link link-hover">Jobs</Link>
          <Link className="link link-hover">Press kit</Link>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <Link className="link link-hover">Terms of use</Link>
          <Link className="link link-hover">Privacy policy</Link>
          <Link className="link link-hover">Cookie policy</Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
