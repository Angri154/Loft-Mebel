import React from 'react';
import logo from '../../assets/img/logo-icon.svg';
import style from './Search.module.scss';
import wishlist from '../../assets/img/wishlist-icon.svg';
import cart from '../../assets/img/cart-icon.svg';
import profile from '../../assets/img/profile-icon.svg';
import search_icon from '../../assets/img/Search-icon.svg';
const Search = () => {
  return (
    <div className={style.search}>
      <div className={style.search__blocks}>
        <div className={style.search__block}>
          <img className={style.logo} src={logo} alt="logo" />
        </div>
        <div className={(style.search__block, style.search__block__input)}>
          <img className={style.search_icon} src={search_icon} alt="" />
          <input className={style.search__input} placeholder="Пошук" type="text" />
        </div>
        <div className={(style.search__block, style.search__block_icon)}>
          <img className={style.block_icon} src={wishlist} alt="wishlist" />
          <img className={style.block_icon} src={cart} alt="cart" />
          <img className={style.block_icon} src={profile} alt="profile" />
        </div>
      </div>
    </div>
  );
};
export default Search;
