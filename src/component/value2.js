
import React  from 'react';
import '../css/style.css';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import Mode from './mode';


 export const value2 = () => {
        return(
    <div className="section-3">
        <div className="item item-6">
            <Mode mode="Spont BR" value="0" unit="BPM"/>
            </div>
        <div className="item item-7">
        <Mode mode="Tidal Vol" value="0" unit="ml"/>
        </div>
        <div className="item item-8">
        <Mode mode="SPO2" value="0" unit="%"/>
        </div>
        <div className="item item-9">
        <Mode mode="Minute Vol" value="0" unit="Ipm"/>
        </div>
        
    </div>
        )
    }

 export default value2







