import React from "react";
import { Link } from "react-router-dom";
import './style.scss';


const CoursesPage = () => (
    <div className={'courses'}>
        <div className={'courses__header'}>
            <div className={'courses__headerimg'}>
                <img src={'./assets/images/lady.png'}/> 
            </div> 
            <div className={"courses__header_text"}>
                <a className={"courses__header_text1"}>Творчество<br/> начинается<br/> с тебя</a>
                <div><a className="courses__header_text2">Получайте навыки от 
                профессиональных художников.<br/> Обучайтесь основам работы с материалами,<br/> 
                различным техникам и развивайте чувство вкуса</a></div>
            </div>
        </div>

            <div className={"courses__center_text"}>
                <a className="courses__center_text1">Ближайшие курсы</a>
                <div><a className="courses__center_text2">Мы выбрали для вас самые популярные 
                и интересные направления Курсы<br/> включают в себя базовую 
                теоретическую часть и множество практических<br/> заданий</a></div>
            </div>
            
            <div className={'courses__courses'}>
                <div className={'courses__headergot'}>
                    <img src={'./assets/images/Gothic.png'}/> 
                </div>
                <div className={'courses__headerfash'}>
                    <img src={'./assets/images/Fashion.png'}/> 
                </div>
                <div className={'courses__headersket'}>
                    <img src={'./assets/images/Sketching.png'}/> 
                </div>
            </div>
        
    </div> 
)

export default CoursesPage