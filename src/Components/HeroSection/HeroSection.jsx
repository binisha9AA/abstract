import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import './HeroSection.css';
export const HeroSection = () => {
  return (
    <>
      <div className="hero_section">
        <h1 className="hero_heading">How can we help?</h1>
        <div class="search">
          <form action="#" className="form" id="search_form">
            <input type="text" placeholder=" Search " className="search" />

            <AiOutlineArrowRight className="search_arrow" />
          </form>
        </div>
      </div>
    </>
  );
};
