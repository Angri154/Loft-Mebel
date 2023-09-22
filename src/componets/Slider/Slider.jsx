// import React, { Component } from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import slide1 from '../../assets/img/Slider/slider-1.png';
// import slide2 from '../../assets/img/Slider/slider-2.jpg';
// import './Slider.scss';
// export default class SimpleSlider extends Component {
//   render() {
//     function CustomPrevArrow(props) {
//       const { onClick, currentSlide } = props;
//       return (
//         <button
//           onClick={onClick}
//           className="custom-prev-arrow"
//           style={{
//             backgroundColor: 'blue', // Цвет фона
//             color: 'white', // Цвет текста
//             border: 'none', // Убрать границу
//             outline: 'none', // Убрать обводку
//             padding: '10px 20px', // Отступы
//             cursor: 'pointer', // Стиль курсора
//           }}>
//           Previous
//         </button>
//       );
//     }

//     function CustomNextArrow(props) {
//       const { onClick, currentSlide } = props;
//       return (
//         <button
//           onClick={onClick}
//           className="custom-next-arrow"
//           style={{
//             backgroundColor: 'green', // Цвет фона
//             color: 'white', // Цвет текста
//             border: 'none', // Убрать границу
//             outline: 'none', // Убрать обводку
//             padding: '10px 20px', // Отступы
//             cursor: 'pointer', // Стиль курсора
//           }}>
//           Next
//         </button>
//       );
//     }
//     const settings = {
//       dots: true,
//       arrows: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       prevArrow: <CustomPrevArrow />, // Замените на вашу кастомную кнопку "назад"
//       nextArrow: <CustomNextArrow />, // Замените на вашу кастомную кнопку "вперед"
//       appendDots: (dots) => (
//         <div style={{ backgroundColor: 'transparent' }}>
//           <ul style={{ margin: '0' }}> {dots} </ul>
//         </div>
//       ),
//     };
//     return (
//       <div className="slider-container">
//         <Slider {...settings}>
//           <div>
//             <h3>Slide 1</h3>
//           </div>
//           <div>
//             <h3>Slide 2</h3>
//           </div>
//           <div>
//             <h3>Slide 3</h3>
//           </div>
//         </Slider>
//       </div>
//     );
//   }
// }
import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.scss'; // Вам потрібно створити цей файл стилів
import slide1 from '../../assets/img/Slider/slider-1.png';
import slide2 from '../../assets/img/Slider/slider-2.jpg';
const SimpleSlider = () => {
  function CustomPrevArrow(props) {
    const { onClick, currentSlide } = props;
    return (
      <button onClick={onClick} className="custom-prev-arrow slick-arrow slick-prev">
        Previous
      </button>
    );
  }

  function CustomNextArrow(props) {
    const { onClick, currentSlide } = props;
    return (
      <button onClick={onClick} className="custom-next-arrow slick-arrow slick-next">
        Next
      </button>
    );
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    prevArrow: <CustomPrevArrow />, // Замените на вашу кастомную кнопку "назад"
    nextArrow: <CustomNextArrow />,
    slidesToScroll: 1,
  };

  return (
    <div className="custom-slider-container">
      <Slider {...settings}>
        <div className="slider-block">
          <img src={slide1} alt="" />
        </div>
        <div className="slider-block">
          <img src={slide2} alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default SimpleSlider;
