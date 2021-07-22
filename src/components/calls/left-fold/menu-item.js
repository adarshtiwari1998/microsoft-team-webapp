import React from 'react';
import "./menu-item.css";

function MenuItem({ item, isActive }) {
    const classList = isActive ? "item-active menu-item" : "menu-item";
    return (
        <di className={classList}>
            <div className="item-icon">{item.icon}</div>
            <label className="item-label">{item.name}</label>
        </di>
    )
}

export default MenuItem;
