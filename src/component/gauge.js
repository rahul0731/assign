import React, { Component } from 'react';
import '../App.css';
import '../css/style.css';

class Gauge extends Component {
    
    
    render(){
        return(
            <div className="grid-contianer">
                 <canvas className="gauge  grid-item item2" data-type="linear-gauge"
            data-width="120"
            data-height="430"
            data-min-value="0"
            data-max-value="60"
            data-major-ticks="0,15,30,45,60"
            data-minor-ticks="2"
            data-stroke-ticks="true"
            data-highlights='[ {"from": 100, "to": 220, "color": "rgba(200, 50, 50, .75)"} ]'
            data-color-plate="black"
            data-color-minor-ticks="#949896"
            data-color-major-ticks="#ced4d1"
            data-color-numbers="white"
            data-border-shadow-width="2"
            data-borders="false"
            data-needle-type="arrow"
            data-needle-width="2"
            data-animation-duration="1500"
            data-animation-rule="linear"
            data-tick-side="left"
            data-number-side="left"
            data-needle-side="left"
            data-bar-stroke-width="2"
            data-bar-begin-circle="false"
            data-bar-color="white"
            data-value="0"
                    data-color-needle="yellow"
                    
                
                    data-value-box="false"
                   
         
        
            ></canvas>
            </div>
           
        )
    };
}

export default Gauge;