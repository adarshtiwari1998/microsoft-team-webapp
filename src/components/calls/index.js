import React from 'react';
import "./calls.css";
import Sidebar from '../common/sidebar';
import LeftFold from './left-fold';
import RightFold from './right-fold';
import Header from '../common/header';

function Calls() {
    return (
        <div className="calls-container">
          <Header />
            <div className="calls-body">
                <div className="calls-sidebar">
                    <Sidebar />
                </div>
                <div className="calls-leftFold">
                    <LeftFold />
                </div>
                <div className="calls-rightFold">
                    <RightFold />
                </div>
            </div>
        </div>
    );
}

export default Calls;
