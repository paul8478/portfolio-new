import React, { useState, useEffect } from 'react';
import "../css/youtube.css";
import logo from "../images/yt2.jpg";

const Youtubebanner = () => {
  return (
    <divc>
      <div className='Cont'>
        <div className='text-cont'>
           <div>
             <div className='yt-data'>
                <h1 className='text'>Subscribe to My YouTube Channel</h1>
                   <h1 className='text-yt'>DevArk</h1>

            <p className='text2'>Welcome to DevArk! 🚀
Discover exciting projects, learn coding, and dive deep into machine learning! On this channel, I share tutorials, tips, and guides to help you build amazing projects and master the world of development and ML. Whether you're a beginner or an experienced coder, there's something here for you. Subscribe and join our community to stay updated!</p>
            <button className='subscribe-button'>Subscribe</button>
            </div>
           </div>
        </div>
        <div className='logo-cont'>
          <div className='logo'>
            <img className='yt-logo' src={logo} alt="YouTube Logo" />
          </div>
        </div>
      </div>
    </divc>
  );
};

export default Youtubebanner;
