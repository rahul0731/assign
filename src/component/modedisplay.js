import React from 'react';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/style.css';
import '../App.css';
  const display = () =>{
    return(
        <div  className="section-4">
           < div className="item item-10  d-xl-none ">
                    <p></p>
                </div>
                <div className="item item-10 ">
                   <a>Mode PVC-AC
                   </a>
                </div>
                <div className="item item-11 ">
                    <p>Insp.P</p>
                    <p id="big">0</p>
                    <p>ml</p>
                </div>
                <div className="item item-12 ">
                    <p>PEEP</p>
                    <p id="big">5</p>
                    <p>cmH2O</p>
                </div>
          
                <div className="item item-13 ">
                    <p>Breath Rate</p>
                    <p id="big">0</p>
                    <p>BPM</p>
                </div>
          
                <div className="item item-14 ">
                    <p>Insp.Time</p>
                    <p id="big">0</p>
                    <p>sec</p>
                </div>
            <div className="item item-15 d-sm">
            <button  className = "box" type="button"> <PlayArrowIcon className="play" fontSize="large"/></button>
            </div>
            < div className="item item-10  d-xl-none ">
                    <p></p>
                </div>
           
            </div>
    )
}

export default display