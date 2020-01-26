import React from 'react';
import './CarruselBootstrap.css';
import carrusel1 from '../../images/4.jpg';
import carrusel2 from '../../images/5.jpg';
import carrusel3 from '../../images/6.jpg';
class CarouselBootstrap extends React.Component{
    render(){
        return(
<div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={carrusel3} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h3 class="text-white">A un click de tu destino</h3>
        
      </div>
    </div>
    <div class="carousel-item"> 
      <img src={carrusel1} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block"> 
        <h3 class="text-white">Tú nos importas</h3>
        
       </div>
    </div>
    <div class="carousel-item">
      <img src={carrusel2} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h3 class="text-white">Somos Polijobs</h3>
        
      </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
        )
    }
}

export default CarouselBootstrap; 