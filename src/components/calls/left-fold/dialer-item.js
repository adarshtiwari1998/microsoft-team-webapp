import React from 'react';
import "./dialer-item.css"

//you could do javascript destructuring by two methods first is below:
// function DialerItem(props) {
//   const item=props.item            this will also work but the latest features in javascript like this {}.
function DialerItem({item}) {
    return (
        <div className="dialer-item">
          <img src={item.avatar} className="item-avatar" />
          <div className="item-info">
           <label className="item-title">{item.name}</label>
           <label className="item-subtitle">{item.type}</label>
          </div>
          <div className="item-icons">
           <div className="item-icon">
           <i class="fi-rr-microphone"></i>
           </div>
           <div className="item-icon">
           <i class="fi-rr-play-alt"></i>
           </div>
          </div>
        </div>
    );
}

export default DialerItem;
