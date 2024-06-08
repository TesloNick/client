import React, {useContext} from 'react';
import {Context} from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { CONTACTS_ROUTE, MAIN_ROUTE, ORDER_FORM_ROUTE, PROFILE_ROUTE, REGISTRATION_ROUTE, SERVICELIST_ROUTE } from '../utils/consts';
import {Button} from "react-bootstrap";
import {observer} from "mobx-react-lite";

import { Link } from 'react-router-dom'; 

const NavBar = observer( () => {
    const {user} = useContext(Context)
    return (
        
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
            <NavLink style={{color:'white', textDecoration:'none'}} to={MAIN_ROUTE}>AquaMarine</NavLink>

            <NavLink style={{color:'white', textDecoration:'none'}} to={MAIN_ROUTE}>Новости</NavLink>
            <NavLink style={{color:'white', textDecoration:'none'}} to={SERVICELIST_ROUTE}>Услуги</NavLink>
            <NavLink style={{color:'white', textDecoration:'none'}} to={CONTACTS_ROUTE}>Контакты</NavLink>  
            

            {user.isAuth ?

            <Nav className="ml-auto">
                <Link to={ORDER_FORM_ROUTE}>
                    <Button style={{color:'white', border:'2px solid #ffffff', marginRight: '10px'}}>Заказать мойку</Button>
                </Link>
                <Link to={PROFILE_ROUTE}>
                    <Button>Профиль</Button>
                </Link>
            </Nav>

            :          
                                 
            <Link to={REGISTRATION_ROUTE}> 
                <Button style={{color:'white', border:'2px solid #ffffff'}}>Заказать мойку</Button>
            </Link>
            }


        </Container>
      </Navbar>
    
    )
});

export default NavBar;