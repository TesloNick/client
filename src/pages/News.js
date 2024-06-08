import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

//img imports
import m1 from '../images/m1.jpg'
import m2 from '../images/m2.jpg'
import m3 from '../images/m3.jpg'
import m2_modif from '../images/m2_modif.jpg'
import caffee from '../images/caffee.jpg'
import try3 from '../images/try3.jpg'
import try11 from '../images/try11.jpg'
import ret from '../images/ret.jpg'
import NewsCards from '../components/NewsCards';
import AboutUs from '../components/AboutUs';

const News = () => {
    
    return (
        <>

        <Carousel>
          <Carousel.Item style={{height: '730px'}}>
            <img 
              className="d-block w-100"
              src={try3}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Автомойка премиум класса</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{height: '730px'}}>
            <img
              className="d-block w-100"
              src={ret}
              alt="Second slide"
            />
            <Carousel.Caption>
                
              <h2 className="d-flex justify-content-center align-items-center" style={{ height: '80vh' }}>Лучшая химия из Европы</h2>
              <p className="d-flex justify-content-center align-items-center" style={{ height: '1vh' }}>Koch, Astrohim, Karcher, LIQUI</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{height: '730px'}}>
            <img
              className="d-block w-100"
              src={caffee}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h2 className="d-flex justify-content-center align-items-center" style={{ height: '80vh' }}>Комфортабельная зона отдыха</h2>
              <p className="d-flex justify-content-center align-items-center" style={{ height: '1vh' }}>
                Чай, кофе, free Wi-Fi
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <NewsCards />
        <AboutUs />
        
        </>
      );
};

export default News;