import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/style.css';
import '../App.css';
const mode = (props) => {
    return(
        <div className="">
            
                <section className="">
                <p >{props.mode}</p>
                <p className="display-4">{props.value}</p>
                <p >{props.unit}</p>
                </section>
          
            
        </div>
    )
};
export default mode;