import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Banner = (props) => {
  return (
    <>
      <section className='py-7'>
        <OwlCarousel className='owl-theme' loop autoplay={true} margin={10} items={props.count}>
          {
            props.banners.map((banner, i) => {
              return (
                <div class='item' key={banner.id}>
                  <img src={banner.img} alt='' className='rounded-xl' />
                </div>
              )
            })
          }
        </OwlCarousel>
      </section>
    </>
  )
}

export default Banner