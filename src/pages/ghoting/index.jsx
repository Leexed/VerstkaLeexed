import React from "react";
import { Link } from "react-router-dom";
import './style.scss';

const GhotingPage = () => (
    <div className={'ghoting'}>
        <div className={'ghoting__header'}>
            <div className={'ghoting__headertext'}>
                <div className={"ghoting__header_nabor"}>
                    <img src={'./assets/images/ghoting/ghotingnabor.png'}/>
                </div>
                <a className={"ghoting__header_text2"}>
                Готическая <br/>Каллиграфия
                </a>
                <div className={"ghoting__header_text3"}>
                    Обучаем мастерству рисования с нуля!
                </div>
                <div className={"ghoting__header_text4"}>
                    Курс:
                    <a className={"ghoting__header_text5"}>
                    Дмитрия Фадеева
                    </a>
                </div>
                <div className={"ghoting__header_clock"}>
                    <img src={'./assets/images/ghoting/ghotingclock.png'}/>
                </div>
                <div className={"ghoting__header_text6"}>
                    <img src={'./assets/images/ghoting/ghotingbox.png'}/>
                </div>
            </div>
            <div className={"ghoting__header_text7"}>
                    <img src={'./assets/images/ghoting/ghotingmain.png'}/>
                </div>
        </div>
            
            <div className={'ghoting__header2'}>
                <a className={"ghoting__header2_text1"}>
                    Обучение с поддержкой
                    <a className={"ghoting__header3_text1"}>
                    преподавателя
                </a>                
                </a>
                <div className={"ghoting__header_line1"}>
                    <img src={'./assets/images/ghoting/ghotinglinevertikalnaya.png'}/>
                </div>
                <a className={"ghoting__header2_text2"}>
                    Пошаговое обучение
                    <a className={"ghoting__header3_text2"}>
                    от простого к сложному                
                </a>
                </a>
                <div className={"ghoting__header_line2"}>
                    <img src={'./assets/images/ghoting/ghotinglinevertikalnaya.png'}/>
                </div>
                <a className={"ghoting__header2_text3"}>
                    Система обучения:
                    <a className={"ghoting__header3_text3"}>
                    смотри и повторяй
                </a>
                </a>
                <div className={"ghoting__header_line3"}>
                    <img src={'./assets/images/ghoting/ghotinglinevertikalnaya.png'}/>
                </div>
                <a className={"ghoting__header2_text4"}>
                    Множество упражнений
                    <a className={"ghoting__header3_text4"}>
                    и домашних заданий
                </a>
                </a>
                <div className={"ghoting__header_line4"}>
                    <img src={'./assets/images/ghoting/ghotinglinevertikalnaya.png'}/>
                </div>
                <a className={"ghoting__header2_text5"}>
                    По завершению
                    <a className={"ghoting__header3_text5"}>
                    сертификат
                </a>
                </a>
            </div>
            {/* ghoting video */}
            <div className="ghoting_video">
                <div className='ghoting_videotext'>
                    <a className='ghoting_videotext1'>
                        16 уроков
                        <a className='ghoting_videotext2'>
                            теория и практика в каждом
                        </a>
                    </a>
                    <a className='ghoting_videotext3'>
                        2 месяца
                        <a className='ghoting_videotext4'>
                            продолжительность курса
                        </a>
                    </a>
                    <a className='ghoting_videotext5'>
                        Проверка
                        <a className='ghoting_videotext6'>
                            преподаватель проверяет<br/> работы и 
                            помогает вам
                        </a>
                    </a>
                </div>
                <a className="ghoting_videofoto">
                    <img src={"./assets/images/ghoting/ghotingvideo.png"}/>
                    <a className='ghoting_videotext5'>
                    В деталях и с эмоциями  - о курсе от Ирины Шельменко
                    </a>
                </a>
                
            </div>
            {/* "Блок с авокадо" */}
            <div className="ghoting_avokad">
                <div className='ghoting_avokadtext'>
                    <a className='ghoting_avokadtext1'>
                        Особенности курса
                        <a className='ghoting_avokadtext2'>
                        Скетчинг - это искусство создания быстрых набросков и зарисовок.<br/>
                        Овладев этой техникой, вы сможете изобразить на бумаге свои идеи<br/>
                        или создавать визуальные концепции и раскадровки, зарисовать<br/>
                        окружающий мир, например, сидя в автобусе по пути на работу.<br/>
                        Применение скетчинга довольно обширно, самое главное это то, что<br/>
                        вы им можете заниматься<br/>
                        где угодно, буквально «на коленке».
                        </a>
                    </a>
                    <a className="ghoting_fotoadvokad">
                        <a className="ghoting_fotoadvokad2">
                            <a className='ghoting_fotoadvokad11'>
                            <img src={"./assets/images/ghoting/581.png"}/>
                            </a>
                            <a className='ghoting_fotoadvokad22'>
                            <img src={"./assets/images/ghoting/5811.png"}/>
                            </a>
                            <a className='ghoting_fotoadvokad33'>
                            <img src={"./assets/images/ghoting/583.png"}/>
                            </a>
                        </a>
                        <a className="ghoting_advokad1">
                            <a className='ghoting_avokadtext3'>
                        Курс построен по принципу<br/>«от простого к сложному»
                            </a>
                            <a className='ghoting_avokadtext4'>
                        Опыт не имеет значения, курс<br/>расчитан на обучение с нуля
                            </a>
                            <a className='ghoting_avokadtext5'>
                        2 месяца обучения<br/>с преподавателем
                            </a>
                        </a>
                        <a className="ghoting_lineadvokad2">
                        <img src={"./assets/images/ghoting/line22.png"}/>
                        </a>
                        <a className="ghoting_fotoadvokad2">
                            <a className='ghoting_fotoadvokad44'>
                            <img src={"./assets/images/ghoting/584.png"}/>
                            </a>
                            <a className='ghoting_fotoadvokad55'>
                            <img src={"./assets/images/ghoting/585.png"}/>
                            </a>
                            <a className='ghoting_fotoadvokad66'>
                            <img src={"./assets/images/ghoting/586.png"}/>
                            </a>
                        </a>
                        <a className="ghoting_advokad2">
                            <a className='ghoting_avokadtext6'>
                            Множество практических<br/>креативных упражнений
                            </a>
                            <a className='ghoting_avokadtext7'>
                            Эффективная программа<br/>с реальными результатами
                                </a>
                            <a className='ghoting_avokadtext8'>
                            Максимально доступная<br/>форма изложения материала
                            </a>
                        </a>
                    </a>
                    <a className="ghoting_avokadfotoblock">
                        <img src={"./assets/images/ghoting/block232.png"}/>
                    </a>
                </div>
                <a className="ghoting_avokadoall">
                    <a className="ghoting_avokadfoto">
                        <img src={"./assets/images/ghoting/112233.png"}/>
                    </a>
                    
                </a>
                
            </div>
            {/* Наши курсы подойдут для всех */}
            <div className="ghoting_ground">
                <div className='ghoting_groundtext'> 
                    <a className="ghoting_groundtext1">
                    Наши курсы подойдут для всех
                        <a className="ghoting_groundtext2">
                            На каждом уроке мы рисуем. 
                            Вся теория преподнесена в 16 практических уроках
                        </a>
                    </a>
                </div>
                <div className="ghoting_groundbox">

                    <div className="ghoting_groundbox1">
                    <img src={"./assets/images/ghoting/01.png"}/>
                        <a className="ghoting_groundbox2">
                        <img src={"./assets/images/ghoting/02.png"}/>
                        </a>
                    </div>
                    <div className="ghoting_groundbox3">
                    <img src={"./assets/images/ghoting/03.png"}/>
                        <a className="ghoting_groundbox4">
                        <img src={"./assets/images/ghoting/04.png"}/>
                        </a>
                    </div>
                    <div className="ghoting_groundbox5">
                    <img src={"./assets/images/ghoting/05.png"}/>
                    <a className="ghoting_groundbox6">
                    <img src={"./assets/images/ghoting/06.png"}/>
                            </a>
                    </div>
                    <div className="ghoting_groundbox7">
                    <img src={"./assets/images/ghoting/07.png"}/>
                    <a className="ghoting_groundbox8">
                    <img src={"./assets/images/ghoting/08.png"}/>
                            </a>
                    </div>
                </div>
            </div>
        </div>    
)
export default GhotingPage;