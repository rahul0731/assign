import React  from 'react';
import '../css/style.css';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import Mode from './mode';


 export const value1 = () => {
        return(
        <div className="section-2">
        <div className="item item-1 text-center">
        <Mode mode="Peek Press" value="0" unit="cm H2O"/>
        </div>
        <div className="item item-2">
        <Mode mode="Breath Rate" value="0" unit="BPM"/>
        </div>
        <div className="item item-3"><Mode mode="Insp.Time" value="0" unit="sec"/></div>
        <div className="item item-4">  <Mode mode="I:E Ratio" value="0" /></div>
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
 

 export default value1