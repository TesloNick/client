import React, { useState, useEffect, useContext } from 'react'; 
import { Button, Dropdown, DropdownMenu, DropdownToggle, FormControl, Modal, Row, Col, DropdownItem } from 'react-bootstrap';
import { Form } from 'react-router-dom';
import { Context } from '..';
import { observer } from 'mobx-react-lite';
//import { Car } from '../../../server/models/models'; 
import { CarList } from '../components/CarList';
import { getAllUserCar } from '../http/carAPI';
import { getServicesByClass } from '../http/serviceAPI';
import { keys } from 'mobx';
//import { Calendar } from '../components/Calendar';
//import style from '../' 
//import axios from 'axios'; 
//import BookingCalendar from '../components/Calendar';

import "@demark-pro/react-booking-calendar/dist/react-booking-calendar.css";
import Calendar from 'react-calendar';
import Testdat from '../components/Testdat'

 
const OrderForm = observer( ({show, onHide}) => { 
    const {user} = useContext(Context)
    const {cars} = useContext(Context)
    const {services} = useContext(Context)

    const [service, setService] = useState([])
    const [userCars, setUserCars] = useState([])
    const [serviceClass, setServiceClass] = useState([])
    //const [order, setOrder] = 
    const fetchUserServices = (car) => {
        cars.setSelectedCar(car);
        document.getElementById("selectedCar").innerHTML=car.brand + " " + car.model + " " + car.carNumber;

        getServicesByClass( cars.getSelectedCar.class ).then((rescar) => setServiceClass(rescar)).catch(err => console.log(err))
    }
/*
    const anyfunc = (ser) => {
        //services.setSelectedService(ser)
        document.getElementById('drop0').id = ser.number
        //ser.type = 'control'
        
       // <Form.Control type="text" placeholder="Readonly input here..." readOnly />   
    }*/

    const addService = () => {
        setService([...service, {title: '', description: '', number: Date.now(), type: 'dropdown'}])
        
    }

    const deleteService = (number) => {
        setService(service.filter(ser => ser.number !== number)) // не возвращает для отображения
    }

    /**export const fetchOneDevice = async (id) => {
        const {data} = await $host.get('api/device/' + id)
        return data
    }*/
    

    useEffect(() => { //в параметр должен прийти ID USER-a
        getAllUserCar(1).then((response) => setUserCars(response)).catch(err => console.log(err))
    }, [])

 /*   useEffect(() => { //в параметр должен прийти class машины
        let abc = cars.getSelectedCar

        getServicesByClass(  ).then((rescar) => setServiceClass(rescar)).catch(err => console.log(err))
    }, [])
*/

    //console.log(userCars)
    //const a = await getAllUserCar().then((response) => cars.setCars(response)).catch(err => console.log(err))

    return (

        <>

        <Modal
          show = {true}
          onHide={onHide}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Заказать мойку
              <div id="selectedCar">
                
              </div>
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Row>
                <Col>
                <Dropdown className='mt-2 mb-2' >
                    <DropdownToggle>Выберите авто</DropdownToggle>
                    <DropdownMenu>
                            {
                            /* onClick={() => this.cars.setSelectedType(this.type)} */ 
                            /* onClick={() => this.changeValue(this.textContent)} */
                            userCars.map(car =>
                                <Dropdown.Item onClick={() => {  
                                    fetchUserServices(car)
                                    }
                                    
                                }
                                
                                key={car.isercarid}
                                > 
                                    {car.brand + " " + car.model + " " + car.carNumber}

                                </Dropdown.Item>
                            )}          
                    </DropdownMenu>
                </Dropdown>
                
                <Button className='mt-3' onClick={addService}>
                    Добавить услугу
                </Button>
                            
                {service.map((ser) => 
                 
                <Dropdown className='mt-2 mb-2' id='drop0'>
                    
                    <DropdownToggle variant="secondary">
                        {services.getSelectedService.name 
                        || "Выберите услугу"}
                        
                        </DropdownToggle>
                      
                        <DropdownMenu>
                            {
                                serviceClass.map(specificService =>
                                <Dropdown.Item onClick={() => services.setSelectedService(specificService)} key={specificService.id}> 
                                    {specificService.name + " = " + specificService.price + " руб."}
                                </Dropdown.Item>
                                
                            )}    
                        </DropdownMenu>
                        
                        <Button className='mx-2' variant="outline-danger" onClick={() => deleteService(ser.number)} >
                            X
                        </Button>                       
                </Dropdown>  
                )}
            </Col>


        <Col>
        <Testdat />
        </Col>

        


            </Row>
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={onHide}>Забронировать</Button>
          </Modal.Footer>

        </Modal>
    </>
);

}); 
 
export default OrderForm; 