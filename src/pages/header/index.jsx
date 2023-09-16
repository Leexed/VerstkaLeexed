import React from "react";
import './style.scss'
import { Link } from "react-router-dom";
import classNames from 'classnames'

export const HeaderPage = () => {
    window.scrollTo(0,0)
    const [isOpen, setIsOpen] = React.useState(false)
    
    return ( 
    <React.Fragment>
    <div className={'header'}>
        
        <div className={'header__logo'}>
            <Link to={'/'}><img src={'./assets/logo.svg'}/></Link>

        </div>
        <div className={'header__imageskills'}>
        <Link to={'/'}><img src={'./assets/imageskills.svg'}></img></Link>
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
        
        <div className={'header__linelogin'}>
                <img src={'./assets/images/line.png'}/> 
            </div>
        <div className={'header__imglogin'}>
                <Link to={'/'}><img src={'./vxod.png'}/></Link> 
        </div>

    </div>
    <div className={'header-mobile'}>
          <div className={'header-mobile__menu'}>
          <div class="tekst_logo">
          <Link to={'/'}><img src={'./assets/images/imageskills.png'}/></Link>
          </div>
            <div onClick={() => setIsOpen(!isOpen)}>
            <img src={'./assets/images/burger.png'}/>
            </div>
          </div>
          <div
            className={classNames('header-mobile__block', {
              'header-mobile__block-open': isOpen,
            })}
          >
            {isOpen && (
              
              <>
                <div className="lineheader1">
                <img src={"./assets/images/lineheader.png"}/>
                </div>
                <div onClick={() => setIsOpen(!isOpen)}>
                <Link to={'/'}>Главная</Link>
                </div>
                <div onClick={() => setIsOpen(!isOpen)}>
                <Link to={'/courses'}>Все курсы</Link>
                </div>
                <div className="phone_number">
                8 (800) 301-55-89
                </div>
              </>
              
            )}
            
          </div>
        </div>
    </React.Fragment>
    )
}
