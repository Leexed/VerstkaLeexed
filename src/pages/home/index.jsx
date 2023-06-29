import React from "react";
import { Link } from "react-router-dom";
import './style.scss';


const HomePage = () => (
        <div className={'home'}>
            <div className={'home__header'}>
                <div className={"home__header_text1"}>
                <a className="text11">Обучаем визуальным<br/>
                    навыкам за 2 месяца</a>
                <div><a className="text22">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Curabitur purus urna,<br/> placerat
                    eget risus sit amet, a uctor fringilla tortor. 
                    Aenean non feugiat sapien</a></div>
                    
                    <div><a className={'text33'}>
            Программы обучения
            </a></div>
            </div>
                
                    <div className={'home__headerimg'}>
                <img src={'./assets/images/home1.png'}/> 
                    </div>           
            </div> 

            <div className={'home__headercourses'}>
                <div className={'home__headergot'}>
                    <img src={'./assets/images/Gothic.png'}/> 
                </div>
                <div className={'home__headerfash'}>
                    <img src={'./assets/images/Fashion.png'}/> 
                </div>
                <div className={'home__headersket'}>
                    <img src={'./assets/images/Sketching.png'}/> 
                </div>
            </div>
            
            <div className={'home__headertext1'}>
            Наши курсы подойдут для всех
            </div>

            <div className={'home__headerinfo'}>
                <div className={'home__headernovichkov'}>
                    <img src={'./assets/images/novichkov.png'}/> 
                </div>
                <div className={'home__headertvorcov'}>
                    <img src={'./assets/images/tvorcov.png'}/> 
                </div>
                <div className={'home__headerspec'}>
                    <img src={'./assets/images/spec.png'}/> 
                </div>
                <div className={'home__headerdetey'}>
                    <img src={'./assets/images/detey.png'}/> 
                </div>
            </div>  

            <div className={'home__headerinfotext'}>
                <div className={'home__headertextnovich'}>
                    Для новичков
                </div>     
                <div className={'home__headertexttvorc'}>
                    Для творцов
                </div>  
                <div className={'home__headertextspec'}>
                    Для специалистов
                </div>  
                <div className={'home__headertextdetey'}>
                    Для детей
                </div>
            </div>

            <div className={'home__headerinfotext2'}>
                <div className={'home__headertextnovichopis'}>
                Если ты только начинаешь
                    свой<br/> путь в искусстве и
                    пока не<br/> знаешь с чего
                    начать, мы тебе<br/> поможем!
                </div>
                <div className={'home__headertexttvorcopis'}>
                Если ты только начинаешь
                    свой<br/> путь в искусстве и
                    пока не<br/> знаешь с чего
                    начать, мы тебе<br/> поможем!
                </div>
                <div className={'home__headertextspecopis'}>
                Если ты только начинаешь
                    свой<br/> путь в искусстве и
                    пока не<br/> знаешь с чего
                    начать, мы тебе<br/> поможем!
                </div>
                <div className={'home__headertextdeteyopis'}>
                Если ты только начинаешь
                    свой<br/> путь в искусстве и
                    пока не<br/> знаешь с чего
                    начать, мы тебе<br/> поможем!
                </div>    
            </div>


            <div className={'home__textcentr'}>
            Как проходит обучение
            </div>

            <div className={'home__fotoaptext'}>
                <div className={"home__fotoap1"}>
                <a className="home__fotoaptext1">Понятно и профессионально</a>
                <div><a className="home__fotoaptext2">Уроки сняты на профессиональное оборудование с двух ракурсов.<br/> 
                В уроках есть всплывающие подсказки с самыми важными моментами.</a></div>
                    <div><a className={'home__fotoaptext3'}>
                    К каждому курсу есть конспекты и полезные материалы. Советы<br/> 
                для новичков, ошибки начинающих художников, советы, где черпать<br/> 
                вдохновение и что делать после прохождения курса.
            </a></div>
            </div>
                
                    <div className={'home__fotoap'}>
                <img src={'./assets/images/fotoap.png'}/> 
                    </div>           
            </div> 

            <div className={'home__knigitext'}>
                <div className={"home__knigi1"}>
                <a className="home__knigitext1">Поддержка кураторов</a>
                <div><a className="home__knigitext2">На протяжении 3-х месяцев кураторы проверяют домашнее задание<br/> 
                после каждого урока. Дают обратную связь и<br/> показывают как и что надо 
                подправить.</a></div>
                    
                    <div><a className={'home__knigitext3'}>
                    Ученики проходят курс вместе с остальными в чатах.
            </a></div>
            </div>
                
                    <div className={'home__knigi'}>
                <img src={'./assets/images/knigi.png'}/> 
                    </div>           
            </div> 
                
            <div className={'home__converttext'}>
                <div className={'home__convert'}>
                <img src={'./assets/images/convert.png'}/> 
                    </div>  
                <div className="convertgroup">
                <a className="home__converttext1">Успешное завершение обучение</a>
                <div><a className="home__converttext2">После окончания курса Вы получаете именной сертификат от 
                нашей<br/> школы и несколько финальных работ</a></div>
                </div>
            </div>
           
            <div className={'home__whitebox'}>
                <div className={'home__box'}>
                    <img src={'./assets/images/whitebox2.png'}/> 
                    <div className={'home__boxttext1'}>
                    Присоединяйтесь к нам
                </div>
                    <div className={'home__boxttext2'}>
                    и займитесь творчеством уже сегодня
                </div>
                    <div className={'home__boxttext3'}>
                    Выбрать курс
                </div>
                </div>
           
                    
                </div>
            </div>
    )


export default HomePage