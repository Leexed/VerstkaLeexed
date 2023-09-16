import React from "react";
import { Link } from "react-router-dom";
import './style.scss';

const FashionPage = () => (
    <div className={'fashion'}>
        <div className={'fashion__header'}>
            <div className={'fashion__headertext'}>
                <div className={"fashion__header_nabor"}>
                    <img src={'./assets/images/fashion/fashionnabor.png'}/>
                </div>
                <a className={"fashion__header_text2"}>
                Fashion<br/>Иллюстрация
                </a>
                <div className={"fashion__header_text3"}>
                Освойте основные виды и жанры fashion – иллюстрации!
                </div>
                <div className={"fashion__header_text4"}>
                    Курс:
                    <a className={"fashion__header_text5"}>
                    Ирины Пироговой
                    </a>
                </div>
                <div className={"fashion__header_clock"}>
                    <img src={'./assets/images/fashion/fashionclock.png'}/>
                </div>
                <div className={"fashion__header_text6"}>
                    <img src={'./assets/images/fashion/fashionbox.png'}/>
                </div>
            </div>
            <div className={"fashion__header_text7"}>
                    <img src={'./assets/images/fashion/fashionmain.png'}/>
                </div>
        </div>
            
            <div className={'fashion__header2'}>
                <a className={"fashion__header2_text1"}>
                    Обучение с поддержкой
                    <a className={"fashion__header3_text1"}>
                    преподавателя
                </a>                
                </a>
                <div className={"fashion__header_line1"}>
                    <img src={'./assets/images/fashion/fashionlinevertikalnaya.png'}/>
                </div>
                <a className={"fashion__header2_text2"}>
                    Пошаговое обучение
                    <a className={"fashion__header3_text2"}>
                    от простого к сложному                
                </a>
                </a>
                <div className={"fashion__header_line2"}>
                    <img src={'./assets/images/fashion/fashionlinevertikalnaya.png'}/>
                </div>
                <a className={"fashion__header2_text3"}>
                    Система обучения:
                    <a className={"fashion__header3_text3"}>
                    смотри и повторяй
                </a>
                </a>
                <div className={"fashion__header_line3"}>
                    <img src={'./assets/images/fashion/fashionlinevertikalnaya.png'}/>
                </div>
                <a className={"fashion__header2_text4"}>
                    Множество упражнений
                    <a className={"fashion__header3_text4"}>
                    и домашних заданий
                </a>
                </a>
                <div className={"fashion__header_line4"}>
                    <img src={'./assets/images/fashion/fashionlinevertikalnaya.png'}/>
                </div>
                <a className={"fashion__header2_text5"}>
                    По завершению
                    <a className={"fashion__header3_text5"}>
                    сертификат
                </a>
                </a>
            </div>
            {/* fashion video */}
            <div className="fashion_video">
                <div className='fashion_videotext'>
                    <a className='fashion_videotext1'>
                        16 уроков
                        <a className='fashion_videotext2'>
                            теория и практика в каждом
                        </a>
                    </a>
                    <a className='fashion_videotext3'>
                        2 месяца
                        <a className='fashion_videotext4'>
                            продолжительность курса
                        </a>
                    </a>
                    <a className='fashion_videotext5'>
                        Проверка
                        <a className='fashion_videotext6'>
                            преподаватель проверяет<br/> работы и 
                            помогает вам
                        </a>
                    </a>
                </div>
                <a className="fashion_videofoto">
                    <img src={"./assets/images/fashion/fashionvideo.png"}/>
                    <a className='fashion_videotext5'>
                    В деталях и с эмоциями  - о курсе от Ирины Шельменко
                    </a>
                </a>
                
            </div>
            {/* "Блок с авокадо" */}
            <div className="fashion_avokad">
                <div className='fashion_avokadtext'>
                    <a className='fashion_avokadtext1'>
                        Особенности курса
                        <a className='fashion_avokadtext2'>
                        Скетчинг - это искусство создания быстрых набросков и зарисовок.<br/>
                        Овладев этой техникой, вы сможете изобразить на бумаге свои идеи<br/>
                        или создавать визуальные концепции и раскадровки, зарисовать<br/>
                        окружающий мир, например, сидя в автобусе по пути на работу.<br/>
                        Применение скетчинга довольно обширно, самое главное это то, что<br/>
                        вы им можете заниматься<br/>
                        где угодно, буквально «на коленке».
                        </a>
                    </a>
                    <a className="fashion_fotoadvokad">
                        <a className="fashion_fotoadvokad1">
                            <a className='fashion_fotoadvokad11'>
                            <img src={"./assets/images/fashion/581.png"}/>
                            </a>
                            <a className='fashion_fotoadvokad22'>
                            <img src={"./assets/images/fashion/5811.png"}/>
                            </a>
                            <a className='fashion_fotoadvokad33'>
                            <img src={"./assets/images/fashion/583.png"}/>
                            </a>
                        </a>
                        <a className="fashion_advokad1">
                            <a className='fashion_avokadtext3'>
                        Курс построен по принципу<br/>«от простого к сложному»
                            </a>
                            <a className='fashion_avokadtext4'>
                        Опыт не имеет значения, курс<br/>расчитан на обучение с нуля
                            </a>
                            <a className='fashion_avokadtext5'>
                        2 месяца обучения<br/>с преподавателем
                            </a>
                        </a>
                        <a className="fashion_lineadvokad2">
                        <img src={"./assets/images/fashion/line22.png"}/>
                        </a>
                        <a className="fashion_fotoadvokad2">
                            <a className='fashion_fotoadvokad44'>
                            <img src={"./assets/images/fashion/584.png"}/>
                            </a>
                            <a className='fashion_fotoadvokad55'>
                            <img src={"./assets/images/fashion/585.png"}/>
                            </a>
                            <a className='fashion_fotoadvokad66'>
                            <img src={"./assets/images/fashion/586.png"}/>
                            </a>
                        </a>
                        <a className="fashion_advokad2">
                            <a className='fashion_avokadtext6'>
                            Множество практических<br/>креативных упражнений
                            </a>
                            <a className='fashion_avokadtext7'>
                            Эффективная программа<br/>с реальными результатами
                                </a>
                            <a className='fashion_avokadtext8'>
                            Максимально доступная<br/>форма изложения материала
                            </a>
                        </a>
                    </a>
                    <a className="fashion_avokadfotoblock">
                        <img src={"./assets/images/fashion/block232.png"}/>
                    </a>
                </div>
                <a className="fashion_avokadoall">
                    <a className="fashion_avokadfoto">
                        <img src={"./assets/images/fashion/112233.png"}/>
                    </a>
                    
                </a>
                
            </div>
            {/* Наши курсы подойдут для всех */}
            <div className="fashion_ground">
                <div className='fashion_groundtext'> 
                    <a className="fashion_groundtext1">
                    Наши курсы подойдут для всех
                        <a className="fashion_groundtext2">
                            На каждом уроке мы рисуем. 
                            Вся теория преподнесена в 16 практических уроках
                        </a>
                    </a>
                </div>
                <div className="fashion_groundbox">

                    <div className="fashion_groundbox1">
                    <img src={"./assets/images/fashion/01.png"}/>
                        <a className="fashion_groundbox2">
                        <img src={"./assets/images/fashion/02.png"}/>
                        </a>
                    </div>
                    <div className="fashion_groundbox3">
                    <img src={"./assets/images/fashion/03.png"}/>
                        <a className="fashion_groundbox4">
                        <img src={"./assets/images/fashion/04.png"}/>
                        </a>
                    </div>
                    <div className="fashion_groundbox5">
                    <img src={"./assets/images/fashion/05.png"}/>
                    <a className="fashion_groundbox6">
                    <img src={"./assets/images/fashion/06.png"}/>
                            </a>
                    </div>
                    <div className="fashion_groundbox7">
                    <img src={"./assets/images/fashion/07.png"}/>
                    <a className="fashion_groundbox8">
                    <img src={"./assets/images/fashion/08.png"}/>
                            </a>
                    </div>
                </div>
            </div>
        </div>    
)
export default FashionPage;