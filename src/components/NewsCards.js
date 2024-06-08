import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row'; 
import Col from 'react-bootstrap/Col'; 
import { Container } from 'react-bootstrap';

import m1 from '../images/m1.jpg';
import m2 from '../images/m2.jpg';
import cardNews1 from '../images/cardNews1.png';
import cardNews2 from '../images/cardNews2.jpg';
import cardNews3 from '../images/cardNews3.jpg';
import cardNews4 from '../images/cardNews4.jpg';

const NewsCards = () => {
    
    return (
        <>
        <div className="d-flex justify-content-center align-items-center" style={{ height: '17vh' }}> 
            <h1>Новости</h1> 
        </div> 
        <Container>
        <Row className="d-flex justify-content-center align-items-center"> 
        <Col> 
        <Card>
            <Card.Img variant="top" src={cardNews1} />
            <Card.Body>
                <Card.Title>Акция</Card.Title>
                <Card.Text>
                  Скидка на полировку авто 15%
                </Card.Text>
                <Card.Text>
                  01.06 - 07.06
                </Card.Text>
                <Button variant="primary">Узнать больше</Button>
            </Card.Body>
        </Card>
        </Col> 

        <Col> 
        <Card>
            <Card.Img variant="top" src={cardNews3} />
            <Card.Body>
                <Card.Title>Новости</Card.Title>
                <Card.Text>
                  Изменение времени работы
                </Card.Text>
                <Card.Text>
                    21.05 - 31.05                  
                </Card.Text>
                <Button variant="primary">Узнать больше</Button>
            </Card.Body>
        </Card>
        </Col> 

        <Col> 
        <Card>
            <Card.Img variant="top" src={cardNews2} />
            <Card.Body>
                <Card.Title>Акция</Card.Title>
                <Card.Text>
                  1+1 = 85%
                </Card.Text>
                <Card.Text>
                    10.04 - 13.04
                </Card.Text>
                <Button variant="primary">Узнать больше</Button>
            </Card.Body>
        </Card>
        </Col> 

        <Col> 
        <Card>
            <Card.Img variant="top" src={cardNews4} />
            <Card.Body>
                <Card.Title>Новости</Card.Title>
                <Card.Text>
                  Поступление новых хим. средств!
                </Card.Text>
                <Card.Text>
                  RM-806, RM-812, CP-940
                </Card.Text>
                <Button variant="primary">Узнать больше</Button>
            </Card.Body>
        </Card>
        </Col> 
        </Row> 
        </Container>
    </>
    );
};  

export default NewsCards;