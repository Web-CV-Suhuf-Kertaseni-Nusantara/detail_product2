import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import gambar1 from '../gambar/product_1.png';
import gambar2 from '../gambar/product_2.jpg';
import './carouselProduct.scss'

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div >
    <Carousel activeIndex={index} onSelect={handleSelect} className='containerGambar'>
      <Carousel.Item className='item'>
      <img src={gambar1} className='gambar' alt='ini gambar'/>
        {/* <ExampleCarouselImage text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>

      <Carousel.Item className='item'>
      <img src={gambar2} className='gambar' alt='ini gambar'/>
        {/* <ExampleCarouselImage text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      
      {/* <Carousel.Item>
        <ExampleCarouselImage text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item> */}

    </Carousel>
    </div>
  );
}

export default ControlledCarousel;