import React from 'react';
import style from './Categories.module.scss';
import kitchen from '../../assets/img/Categories/kitchen-icon.svg';
import bedroom from '../../assets/img/Categories/bedroom-icon.svg';
import livingroom from '../../assets/img/Categories/livingroom-icon.svg';
import closet from '../../assets/img/Categories/closet-icon.svg';
import office from '../../assets/img/Categories/office-icon.svg';
import childrensroom from '../../assets/img/Categories/childrensroom-icon.svg';
import etc from '../../assets/img/Categories/etc.svg';
const Categories = () => {
  return (
    <div className={style.categories}>
      <div className={style.categories_blocks}>
        <div className={style.categories_block}>
          <img src={kitchen} alt="kitchen-icon" />
          Кухни
        </div>
        <div className={style.categories_block}>
          <img src={bedroom} alt="bedroom-icon" />
          Спальни
        </div>
        <div className={style.categories_block}>
          <img src={livingroom} alt="livingroom-icon" />
          Гостинные
        </div>
        <div className={style.categories_block}>
          <img src={closet} alt="closet-icon" />
          Прихожие
        </div>
        <div className={style.categories_block}>
          <img src={office} alt="office-icon" />
          Офисная мебель
        </div>
        <div className={style.categories_block}>
          <img src={childrensroom} alt="childrensroom-icon" />
          Детская
        </div>
        <div className={style.categories_block}>Акция</div>
        <div className={style.categories_block}>
          <img src={etc} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Categories;
