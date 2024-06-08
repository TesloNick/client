import React, { useEffect, useState } from 'react';
import {getAllServices} from "../http/serviceAPI";
import { observer } from 'mobx-react-lite';
import Table from 'react-bootstrap/Table';
import Testdat from '../components/Testdat'

export const ServiceList = observer(() => {

    const [data, setData] = useState([])   
    useEffect(() => {
        //axios.get('http://localhost:5000/api/service/') 
        getAllServices().then((result) => {setData(result)})
        .catch(err => console.log(err))
        //.then(res => setData(res.data))
  });
    
    return (
        <>
        <div className="d-flex justify-content-center align-items-center" style={{ height: '9vh' }}>
            <h3>Список услуг:</h3>
        </div>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Название</th>
                    <th>Описание</th>
                    <th>Цена</th>
                    <th>Класс авто</th>
                </tr>
            </thead>
            <tbody>
                {data.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{val.name}</td>
                            <td>{val.description}</td>
                            <td>{val.price}</td>
                            <td>{val.class}</td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>

        </>
    )
});

export default ServiceList;