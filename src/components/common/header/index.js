import React from 'react';
import "./header.css";

function Header() {
    return (
        <div className="header">
            <div className="header-menu" >
            <i class="fi-rr-layout-fluid"></i>
            </div>
            <div className="header-leftFold">
               <label className="header-label">Microsoft Teams</label>
            </div>
            <div className="header-rightFold">
              <div className="header-search">
              <i class="fi-rr-search"></i>
              <input placeholder="Search Here for Teams, Rooms, Messages" />
              </div>
              <div className="header-profile">
                <div className="header-options">
                <i class="fi-rr-menu-dots"></i>
                </div>
                 <img className="header-avatar" src={require("../../../assets/images/header/avatar.png").default} />
              </div>
            </div>
        </div>
    );
}

export default Header;
