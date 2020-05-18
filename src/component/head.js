import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import NotificationsOffOutlinedIcon from '@material-ui/icons/NotificationsOffOutlined';
import SettingsIcon from '@material-ui/icons/Settings';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav} from 'react-bootstrap';
import '../css/style.css';
import '../App.css';
 const head = () =>{
    
    return(
       
       <Nav className=" navbar nav-pills nav-fill ">
          <li className="nav-item">
          <a className="nav-link" href="#">VENT005</a>
          </li>
          <li className="nav-item" >
          <a  className="nav-link" href="#"> 
           <HomeIcon/>
           </a>
          </li>
          <li className="nav-item">
          <a  className="nav-link"  href="#">  <NotificationsOffOutlinedIcon/></a>
          </li>
          <li className="nav-item">
          <a  className="nav-link" id="noalarm"  href="#">NOALARM</a>
          </li>
          <li className="nav-item" >
          <a   className="nav-link" id="setting" href="#"><SettingsIcon/></a>
          </li>

          <li className="nav-item">
          <a  className="nav-link" href="#">MONITORING</a>
           </li>
       </Nav>

    )

} 

export default head