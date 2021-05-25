import React, { Component } from 'react';
import {BsInfoCircle, BsSearch} from 'react-icons/bs'

class Notification extends Component {
    state = {  }
    render() { 
        return ( 
            <>
            <div className="notification">
              <p> <BsInfoCircle style={{color: 'orange', padding:'10px 10px 0px 0px', fontSize:'30px'}}/> Tada! Get started with a free template. Can't find whatr you are looking for? search from the 1000+ available templates</p>
          </div>
            </>
         );
    }
}
 
export default Notification;