import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";  
import Slider from "react-slick"; 



import React, { Component } from 'react'  
import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";  
import './slickdemo.css'; 


export class SlickDemo extends Component {  
    render() {  
        var settings = {  
            dots: true,  
            infinite: true,  
            speed: 500,  
            centerMode: true,  
            slidesToShow: 1,  
            slidesToScroll: 1  
            };  
            return (  
              <div>  
              <div class='container' >        
              <div className="row title" style={{marginBottom: "10px"}} >        
              <div class="col-sm-12 btn btn-info">          
              </div>        
              </div>    
              </div>  
              <Slider {...settings} >  
                <div className="wdt">  
                <img  className="img"  src="https://cdn-static.personaclick.com/Watsons/291121/212212d.png" className="img"/>  
                </div>  
                <div className="wdt">  
                <img style={{"height":"40px"}}  src="https://img-watsons.mncdn.com/Content/Images/Thumbs/0349375.png"  className="img"/>  
                </div>  
                <div className="wdt">  
                <img  className="img" src="https://static.personaclick.com/Watsons/031121cd.png"  className="img"/>  
                </div>  

                <div className="wdt">  
                <img  className="img"src="https://cdn-static.personaclick.com/Watsons/191121/nd.jpg"  className="img"/>  
                </div>  
                <div className="wdt">  
                <img  className="img" src="https://www.gratis.com/file/general/Organic-shop-sac-kategori-1811.jpg"   className="img"/>  
                </div>  

              </Slider>  
              </div>  
            );  
          }  
        }  
    
  export default SlickDemo  