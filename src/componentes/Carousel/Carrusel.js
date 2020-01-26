import React from 'react';
import { Carousel } from 'antd';
import './Carrusel.css';
import carrusel1 from '../../images/1.jpg';
import carrusel2 from '../../images/2.jpg';
import carrusel3 from '../../images/3.jpg';
class Carrusel extends React.Component{
    render(){
        return(
            <Carousel effect="fade">
    <div>
      
      <img src={carrusel3} style={{height:"70px"}}></img> <br></br>
      
    </div>
    <div>
      <img src={carrusel2}></img>
    </div>
    <div>
    <img src={carrusel1}></img>
    </div>
  </Carousel>
        )
    }
}

export default Carrusel; 