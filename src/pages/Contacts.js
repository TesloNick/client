import React from 'react';

const Contacts = () => {
    return (
        <>
        <br></br>
        <h3 className="d-flex justify-content-center align-items-center">Наши контакты</h3>
        <div className="d-flex justify-content-center align-items-center">
        
<p class="address">г. Омск, ул. Красных Зорь, 67А</p> 
</div>

<div className="d-flex justify-content-center align-items-center">
    <p class="phonenumber_map">Тел: +79831234567</p>
</div>

<div className="d-flex justify-content-center align-items-center">
<p class="corp_email">Email: CarWashService@gmail.com</p>
</div>

<div className="d-flex justify-content-center align-items-center">
<p>Время работы:</p>
</div>
<div className="d-flex justify-content-center align-items-center">
<li class="timetable">ПН-СБ с 7:00 до 21:00</li>
</div>

<div className="d-flex justify-content-center align-items-center">
<li class="timetable">ВС с 7:00 до 20:00</li>
</div>

        <div>
            <iframe className="d-flex justify-content-center align-items-center" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2289.7066409487475!2d73.38727717671229!3d54.978243551382704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43aafe090c904327%3A0x52db48bffe46fda3!2z0JTQtdCy0YfQsNGC0LAsINCw0LLRgtC-0LzQvtC50LrQsA!5e0!3m2!1sru!2sru!4v1717677923575!5m2!1sru!2sru" 
            width="1400" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" style={{marginLeft: 60, marginTop: 40}}></iframe>
        </div>
        
        </>
    );
};

export default Contacts;