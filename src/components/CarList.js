import React, { useEffect, useState } from 'react';
//import {getAllServices} from "../http/serviceAPI";
import { observer } from 'mobx-react-lite';
import { getAllCars } from '../http/carAPI';

export const CarList = observer(() => {


    const [data, setData] = useState([])   
    useEffect(() => {
        //axios.get('http://localhost:5000/api/service/') 
        getAllCars().then((result) => {setData(result)})
        .catch(err => console.log(err))
        //.then(res => setData(res.data))
  });

    /*let res = {
        data.map((dat,i) => {
            return <p key={i}>{dat.brand} {dat.model} {dat.class}</p>
        })}*/


    return (
        <div>
            {
                data.map((dat,i) => {
                    return <p key={i}>{dat.brand} {dat.model} {dat.class}</p>
                })
            }
        </div>
    );
});

export default CarList;