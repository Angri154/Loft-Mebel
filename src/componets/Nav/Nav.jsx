import React from 'react';
import Icon_Phone from '../../assets/img/phone-icon.svg';
import Icon_Delivery from '../../assets/img/delivery-icon.svg';
import style from './Nav.module.scss';
const Nav = () => {
  return (
    <nav className={style.nav}>
      <div className={style.conteiner}>
        <div className={style.nav__blocks}>
          <div className={style.nav__blocks_left}>
            <div className={style.nav__block}>Головна</div>
            <div className={style.nav__block}>Про нас</div>
            <div className={style.nav__block}>Контакти</div>
          </div>
          <div className={style.nav__blocks_right}>
            <div className={style.nav__block}>
              <img className={style.nav_icon} src={Icon_Phone} alt="" />
              380 95 475 97
            </div>
            <div className={style.nav__block}>
              <img className={style.nav_icon} src={Icon_Delivery} alt="delivery" />
              Доставка
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
