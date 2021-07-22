import React from 'react';
import { CallsMenu, DialerList } from '../../../data/calls';
import DialerItem from './dialer-item';
import "./left-fold.css";
import MenuItem from './menu-item';

function LeftFold() {
    const menu = CallsMenu;
    const dialerList = DialerList;

    return (
        <div className="leftFold">
        <div className="leftFold-menu">
            <label className="menu-label">
                Calls
            </label>
            <div className="menu-items">
            {menu.map((item) => {
            return (
                 <MenuItem item={item} isActive={true} />
               );
            })}
            </div>
        </div>
        <div className="leftFold-dialer">
            <label className="dialer-label">Suggested</label>
            <div className="dialer-search">
                <input placeholder="Type a name" />
            </div>
            <div className="dialer-suggested" >
               <label className="suggested-label">Suggested Name</label>
               <div className="suggested-list">
                {dialerList.map((item) => {
                    return (
                         <DialerItem item={item} />
                    );
                })}
               </div>

            </div>
        </div>
        </div>
    );
}

export default LeftFold;
