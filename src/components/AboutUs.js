import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row'; 
import Col from 'react-bootstrap/Col'; 
import { Container } from 'react-bootstrap';

import m1 from '../images/m1.jpg';
import m2 from '../images/m2.jpg';
import cardNews1 from '../images/cardNews1.png';
import cardNews2 from '../images/cardNews2.jpg';
import cardNews3 from '../images/cardNews3.jpg';
import About from '../images/AboutUs.jpg';
import About2 from '../images/AU1.jpg';


const AboutUs = () => {
    
    return (
        <>
        <div className="d-flex justify-content-center align-items-center" style={{ height: '17vh' }}> 
            <h3>О нас</h3> 
        </div> 
        <Container>
        <Row className="d-flex justify-content-center align-items-center"> 
        <Col style={{ width: '100px'}}>

        <p style={{height: '10vh'}}>
        Детейлинг-центр AquaMarine – это премиум-автомойка в Омске и 
        профессиональный подход к каждой процедуре.
        </p>

        <p>
        Чем роскошнее автомобиль, тем острее стоит вопрос о качественной мойке. 
        Ведь для дорогой машины часто требуется особый, бережный уход. 
        Мы сочетаем все достоинства элитной автомойки премиум-класса в Омске, предлагая 
        стильные салоны и высокое качество выполняемых работ.
        </p>        

        <p>
        Наше прямое сотрудничество с поставщиками материалов и оборудования, 
        а также профессионализм мастеров позволяют нам гарантировать безопасность 
        и эффективность процедуры. После премиум-мойки в детейлинг-центре AquaMarine 
        ваш автомобиль будет сверкать чистотой, и на его поверхности не останется даже 
        мельчайших царапин и разводов.
        </p>        

        </Col>

        <Col>
            <Image style={{ height: '70vh', marginLeft: '17vh' }} src={About2} rounded/>
        </Col>
        </Row> 
        </Container>
    </>
    );
};  

export default AboutUs;