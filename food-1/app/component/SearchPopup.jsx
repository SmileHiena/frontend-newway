// components/SearchPopup.js
import React from 'react';

const SearchPopup = () => {
  return (
    <div className="search-popup">
      <div className="search-popup__overlay search-toggler"></div>
      <div className="search-popup__content">
        <form role="search" method="get" className="search-popup__form" action="#">
          <input type="text" id="search" placeholder="Search Here..." />
          <button type="submit" aria-label="search submit" className="boskery-btn">
            <span className="boskery-btn__hover"></span>
            <span className="boskery-btn__hover"></span>
            <span className="boskery-btn__hover"></span>
            <span className="boskery-btn__hover"></span>
            <span className="boskery-btn__hover"></span>
            <span className="boskery-btn__hover"></span>
            <span className="icon-search"></span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchPopup;
