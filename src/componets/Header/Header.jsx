import React from 'react';
import style from './Header.module.scss';
import Search from '../Search/Search';
import Categories from '../Categories/Categories';
import SimpleSlider from '../Slider/Slider';
const Header = () => {
  return (
    <header>
      <div className={style.conteiner}>
        <Search />
        <Categories />
        <SimpleSlider />
      </div>
    </header>
  );
};
export default Header;
