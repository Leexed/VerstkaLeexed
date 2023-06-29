import React from "react";
import './style.scss';
import { Link } from "react-router-dom";

const Footer = () => (
  <div className="footer">
    <div className={"footer_info"}>
        <div className={'footer_info_logo'}>
            <Link to={'/'}><img src={'./assets/logo.svg'}/></Link>
            <div className={'footer_imageskills'}>
        <Link to={'/'}><img src={'./assets/imageskills.svg'}></img></Link>
        </div>
        </div>              
        <div className={'footer__logotext'}>
            <div>Онлайн-школа<br/>визуальных<br/>искусств</div>
        </div>      
        <div className={'footer__menu'}>
            <div><Link to={'/'}>Главная</Link></div>
            <div><Link to={'/courses'}>Все курсы</Link></div>
        </div>
        <div className={'footer__number'}>
            <div>8 (800) 301-55-89</div>
        </div>
      </div>

        <div className={'footer_info_text'}>
  2016-2020, Imageskills, все права защищены
        <div className={'footer_info_text_2'}>
            Политика конфиденциальности
            </div>
        <div className={'footer_info_text_3'}>
            Договор оферты
            </div>
        </div>
    
    </div>


  

  
);

export default Footer;