import React from "react";
import './style.scss'
import { Link } from "react-router-dom";

export const HeaderPage = () => {
    return <div className={'header'}>
        <div className={'header__logo'}>
            <img src={'./assets/logo.svg'}/> 
        </div>
        <div className={'header__imageskills'}>
            <img src={'./assets/imageskills.svg'}></img>
        </div>
        <div className={'header__logotext'}>
            <div>Онлайн-школа<br/>визуальных<br/>искусств</div>
        </div>      
        <div className={'header__menu'}>
            <div><Link to={'/'}>Главная</Link></div>
            <div><Link to={'/courses'}>Все курсы</Link></div>
        </div>
        <div className={'header__number'}>
            <div>8 (800) 301-55-89</div>
        </div>
        <div className={'header__login'}>
            <div>Вход</div>
        </div>
        
        

    </div>
}