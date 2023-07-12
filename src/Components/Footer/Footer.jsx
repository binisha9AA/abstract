import React from 'react';
import './Footer.css';
import { SiBitly } from 'react-icons/si';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer_top_container">
          <div className="top_footer">
            <section className="abstract">
              <h2 className="footer_heading">Abstract</h2>
              <ul>
                <li>Start Trial</li>
                <li>Pricing</li>
                <li>Download</li>
              </ul>
            </section>
            <section className="Resources">
              <h2 className="footer_heading"> Resources</h2>
              <ul>
                <li>Blog</li>
                <li>Help Center</li>
                <li>Status</li>
              </ul>
            </section>
          </div>
          <div className="middle_footer">
            <section className="Community">
              <h2 className="footer_heading">Community</h2>
              <ul>
                <li>Twitter</li>
                <li>LinkedIn</li>
                <li>Facebook</li>
                <li>Dribble</li>
                <li>Podcast</li>
              </ul>
            </section>
            <section className="Company">
              <h2 className="footer_heading">Company</h2>
              <ul>
                <li>About Us</li>
                <li>Careers</li>
                <li>Legal</li>
              </ul>
              <section className="Contact_us">
                <h2 className="sub_heading">Contact Us</h2>
                <p>Info@abstract.com</p>
              </section>
            </section>
          </div>
          <div className="bottom">
            <SiBitly className="footer_logo" />
            <div className="copyright">
              <p>@Copyright 2023</p>
              <p>Abstract Studio Design,inc</p>
              <p>All rights reserved</p>
            </div>
          </div>
        </div>
        <button className="help_button">
          <AiOutlineQuestionCircle className="question" />
          <h4>Help</h4>
        </button>
      </footer>
    </>
  );
}
