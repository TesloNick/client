import React, { useContext, useEffect, useState } from 'react';
import { Button, Container, Form, Row } from 'react-bootstrap';
import Card from "react-bootstrap/Card";
import { NavLink, useLocation } from 'react-router-dom';
import { LOGIN_ROUTE, ORDER_FORM_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';
//import Col from 'react-bootstrap/Col'
import {login, registration} from "../http/userAPI";
import {getAllCars} from "../http/carAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

//К перекидыванию после формы
import { useNavigate } from "react-router-dom"
import { jwtDecode } from 'jwt-decode';
import { getAllServices } from '../http/serviceAPI';
//import { useHistory } from 'react-router-dom'; 
//import { redirect } from "react-router-dom";

export const Auth = observer(() => {

    const {user} = useContext(Context)
    //const [data1, setData1] = useState([])   
    const {cars} = useContext(Context)
    const {services} = useContext(Context)
    /*const getUserFromLocalStorage = () => { 
        const userJSON = localStorage.getItem('user'); 
        return userJSON ? JSON.parse(userJSON) : null; 
    }; */
    //const user = getUserFromLocalStorage(); 

    console.log(user); 

    const location = useLocation()
    const navigate = useNavigate();

    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
/*
    const saveUserToLocalStorage = (user) => {
        localStorage.setItem('user', JSON.stringify(user)); //объект в строковой тип данных
    
        console.log(localStorage.getItem('user'))
    };*/
    

    const click = async () => {
        //try {
            let data;
            if (isLogin) {
                data = await login(email, password);
                //const user = jwtDecode(data.token); 
                //window.location.href='http://localhost:3000/login';

                
                await getAllCars().then((response) => cars.setCars(response)).catch(err => console.log(err))

                await getAllServices().then((response) => services.setServices(response)).catch(err => console.log(err))
                /*const a = cars.cars;
                console.log(a[0].brand);*/

                
                //возвращает promise
                //найти способ чтобы сработал promise и вернул список машин,

                //.then((result) => {cars.setCars(result)})
                //.catch(err => console.log(err))

                //console.log(data1);

            } else {
                data = await registration(email, password);
                //window.location.href='http://localhost:3000/registration';
            }
            user.setUser(user)
            user.setIsAuth(true)
            //saveUserToLocalStorage(user);


            //navigate("/order")
            navigate(ORDER_FORM_ROUTE)
            //history.push('/service');
            
            /*        
            const history = useHistory(); 
            setIsRegistered(true);             
            if (isRegistered) { 
                  return <Redirect to={ORDER_FORM_ROUTE}/>; 
            } */
            //navigate('/order')
            
            //history.push(ORDER_FORM_ROUTE)
            console.log(data)
        /*} catch (e) {
            alert(e.response.data.message)
        }*/

    }

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">{isLogin ? "Авторизация" : "Регистрация"}</h2> 
                <Form className="d-flex flex-column">
                    <Form.Control 
                        className="mt-3"
                        placeholder="Введите ваш email..."
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите ваш пароль..."
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />

                    <Row className="d-flex justify-content-between mt-3 me-2">
                        <div className="d-flex">
                        {isLogin ?
                            <div>
                                Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Регистрация</NavLink> 
                            </div>
                            :
                            <div>
                                Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите</NavLink> 
                            </div>
                        }         
             
                            <Button style={{ marginLeft: 'auto' }} variant="primary" color="blue" onClick={click}>
                                {isLogin ? 'Войти' : 'Регистрация'}
                            </Button>
                        </div>
                        
                    </Row>

                    
                </Form>
            </Card>
        </Container>
    );
});

export default Auth;