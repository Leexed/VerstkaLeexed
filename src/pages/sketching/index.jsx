import React from "react";
import { Link } from "react-router-dom";
import './style.scss';

const SketchingPage = () => (
    <div className={'sketching'}>
        <div className={'sketching__header'}>
            <div className={'sketching__headertext'}>
                <div className={"sketching__header_nabor"}>
                    <img src={'./assets/images/sketching/sketchingnabor.png'}/>
                </div>
                <a className={"sketching__header_text2"}>
                    Базовый<br/> SKETCHING
                </a>
                <div className={"sketching__header_text3"}>
                    Обучаем мастерству рисования с нуля!
                </div>
                <div className={"sketching__header_text4"}>
                    Курс:
                    <a className={"sketching__header_text5"}>
                        Ирины Шельменко
                    </a>
                </div>
                <div className={"sketching__header_clock"}>
                    <img src={'./assets/images/sketching/sketchingclock.png'}/>
                </div>
                <div className={"sketching__header_text6"}>
                    <img src={'./assets/images/sketching/sketchingbox.png'}/>
                </div>
            </div>
            <div className={"sketching__header_text7"}>
                    <img src={'./assets/images/sketching/sketchingmain.png'}/>
                </div>
        </div>
            
            <div className={'sketching__header2'}>
                <a className={"sketching__header2_text1"}>
                    Обучение с поддержкой
                    <a className={"sketching__header3_text1"}>
                    преподавателя
                </a>                
                </a>
                <div className={"sketching__header_line1"}>
                    <img src={'./assets/images/sketching/sketchinglinevertikalnaya.png'}/>
                </div>
                <a className={"sketching__header2_text2"}>
                    Пошаговое обучение
                    <a className={"sketching__header3_text2"}>
                    от простого к сложному                
                </a>
                </a>
                <div className={"sketching__header_line2"}>
                    <img src={'./assets/images/sketching/sketchinglinevertikalnaya.png'}/>
                </div>
                <a className={"sketching__header2_text3"}>
                    Система обучения:
                    <a className={"sketching__header3_text3"}>
                    смотри и повторяй
                </a>
                </a>
                <div className={"sketching__header_line3"}>
                    <img src={'./assets/images/sketching/sketchinglinevertikalnaya.png'}/>
                </div>
                <a className={"sketching__header2_text4"}>
                    Множество упражнений
                    <a className={"sketching__header3_text4"}>
                    и домашних заданий
                </a>
                </a>
                <div className={"sketching__header_line4"}>
                    <img src={'./assets/images/sketching/sketchinglinevertikalnaya.png'}/>
                </div>
                <a className={"sketching__header2_text5"}>
                    По завершению
                    <a className={"sketching__header3_text5"}>
                    сертификат
                </a>
                </a>
            </div>
            {/* sketching video */}
            <div className="sketching_video">
                <div className='sketching_videotext'>
                    <a className='sketching_videotext1'>
                        16 уроков
                        <a className='sketching_videotext2'>
                            теория и практика в каждом
                        </a>
                    </a>
                    <a className='sketching_videotext3'>
                        2 месяца
                        <a className='sketching_videotext4'>
                            продолжительность курса
                        </a>
                    </a>
                    <a className='sketching_videotext5'>
                        Проверка
                        <a className='sketching_videotext6'>
                            преподаватель проверяет<br/> работы и 
                            помогает вам
                        </a>
                    </a>
                </div>
                <a className="sketching_videofoto">
                    <img src={"./assets/images/sketching/sketchingvideo.png"}/>
                    <a className='sketching_videotext5'>
                    В деталях и с эмоциями  - о курсе от Ирины Шельменко
                    </a>
                </a>
                
            </div>
            {/* "Блок с авокадо" */}
            <div className="sketching_avokad">
                <div className='sketching_avokadtext'>
                    <a className='sketching_avokadtext1'>
                        Особенности курса
                        <a className='sketching_avokadtext2'>
                        Скетчинг - это искусство создания быстрых набросков и зарисовок.<br/>
                        Овладев этой техникой, вы сможете изобразить на бумаге свои идеи<br/>
                        или создавать визуальные концепции и раскадровки, зарисовать<br/>
                        окружающий мир, например, сидя в автобусе по пути на работу.<br/>
                        Применение скетчинга довольно обширно, самое главное это то, что<br/>
                        вы им можете заниматься<br/>
                        где угодно, буквально «на коленке».
                        </a>
                    </a>
                    <a className="sketching_fotoadvokad">
                        <a className="sketching_fotoadvokad2">
                            <a className='sketching_fotoadvokad11'>
                            <img src={"./assets/images/sketching/581.png"}/>
                            </a>
                            <a className='sketching_fotoadvokad22'>
                            <img src={"./assets/images/sketching/5811.png"}/>
                            </a>
                            <a className='sketching_fotoadvokad33'>
                            <img src={"./assets/images/sketching/583.png"}/>
                            </a>
                        </a>
                        <a className="sketching_advokad1">
                            <a className='sketching_avokadtext3'>
                        Курс построен по принципу<br/>«от простого к сложному»
                            </a>
                            <a className='sketching_avokadtext4'>
                        Опыт не имеет значения, курс<br/>расчитан на обучение с нуля
                            </a>
                            <a className='sketching_avokadtext5'>
                        2 месяца обучения<br/>с преподавателем
                            </a>
                        </a>
                        <a className="sketching_lineadvokad2">
                        <img src={"./assets/images/sketching/line22.png"}/>
                        </a>
                        <a className="sketching_fotoadvokad2">
                            <a className='sketching_fotoadvokad44'>
                            <img src={"./assets/images/sketching/584.png"}/>
                            </a>
                            <a className='sketching_fotoadvokad55'>
                            <img src={"./assets/images/sketching/585.png"}/>
                            </a>
                            <a className='sketching_fotoadvokad66'>
                            <img src={"./assets/images/sketching/586.png"}/>
                            </a>
                        </a>
                        <a className="sketching_advokad2">
                            <a className='sketching_avokadtext6'>
                            Множество практических<br/>креативных упражнений
                            </a>
                            <a className='sketching_avokadtext7'>
                            Эффективная программа<br/>с реальными результатами
                                </a>
                            <a className='sketching_avokadtext8'>
                            Максимально доступная<br/>форма изложения материала
                            </a>
                        </a>
                    </a>
                    <a className="sketching_avokadfotoblock">
                        <img src={"./assets/images/sketching/block232.png"}/>
                    </a>
                </div>
                <a className="sketching_avokadoall">
                    <a className="sketching_avokadfoto">
                        <img src={"./assets/images/sketching/112233.png"}/>
                    </a>
                    
                </a>
                
            </div>
            {/* Наши курсы подойдут для всех */}
            <div className="sketching_ground">
                <div className='sketching_groundtext'> 
                    <a className="sketching_groundtext1">
                    Наши курсы подойдут для всех
                        <a className="sketching_groundtext2">
                            На каждом уроке мы рисуем. 
                            Вся теория преподнесена в 16 практических уроках
                        </a>
                    </a>
                </div>
                <div className="sketching_groundbox">

                    <div className="sketching_groundbox1">
                    <img src={"./assets/images/sketching/01.png"}/>
                        <a className="sketching_groundbox2">
                        <img src={"./assets/images/sketching/02.png"}/>
                        </a>
                    </div>
                    <div className="sketching_groundbox3">
                    <img src={"./assets/images/sketching/03.png"}/>
                        <a className="sketching_groundbox4">
                        <img src={"./assets/images/sketching/04.png"}/>
                        </a>
                    </div>
                    <div className="sketching_groundbox5">
                    <img src={"./assets/images/sketching/05.png"}/>
                    <a className="sketching_groundbox6">
                    <img src={"./assets/images/sketching/06.png"}/>
                            </a>
                    </div>
                    <div className="sketching_groundbox7">
                    <img src={"./assets/images/sketching/07.png"}/>
                    <a className="sketching_groundbox8">
                    <img src={"./assets/images/sketching/08.png"}/>
                            </a>
                    </div>
                </div>
            </div>
        </div>    
)
export default SketchingPage;