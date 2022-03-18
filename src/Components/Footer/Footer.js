import React from "react";
import {FaFacebookF} from 'react-icons/fa';
import {AiFillInstagram} from 'react-icons/ai';
import {AiFillHeart} from 'react-icons/ai';
import {SiDiscord} from 'react-icons/si';
import {HiMail} from 'react-icons/hi';
import {FaLinkedinIn} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer">
    <div style={{display:'flex' , alignItems:'center', justifyContent:'center', backgroundColor:'transparent', padding:'6px'}}>
      <>
      <a
        className="white"
        href="https://www.linkedin.com/in/suyog-deshpande-8869571b5/"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillInstagram size="1.5rem" className="mh2" color="white" style={{margin:'6px' }} />
      </a>
      
      <a
        className="white"
        href="mailto:asme@mescoepune.org"
        target="_blank"
        rel="noreferrer"
      >
        <HiMail size="1.5rem" className="mh2" color="white" style={{margin:'6px' }} />
      </a>
      <a
        className="white"
        href="https://www.linkedin.com/company/asme-mescoe/"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedinIn size="1.5rem" className="mh2" color="white" style={{margin:'6px' }} />
      </a>
      </>
    </div>
    <div className="footer-content text-center pb-3">
      Designed and Developed with <AiFillHeart color="red"></AiFillHeart> by <a className="white" href='https://gauravkulkarni.me'>Team </a>| <span className='mx-1'>&copy; 2022 All Rights Reserved</span> |  <a className="white" href="mescoepune.org">MESCOE</a>
    </div>
    </div>
  );
};

export default Footer;
