import React from 'react';
import style from './Header.module.scss';
import Search from '../Search/Search';
import Categories from '../Categories/Categories';
const Header = () => {
  return (
    <header>
      <div className={style.conteiner}>
        <Search />
        <Categories />
      </div>
    </header>
  );
};
export default Header;
