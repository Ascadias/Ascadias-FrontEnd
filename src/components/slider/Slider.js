import React from 'react';
import './Slider.css';
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import Slides from './Slides';

const Slider = () => {
    return (
        <div className="carousel-container">
            <div className="carousel-title">
                <h2>Mis Proyectos</h2>
            </div>
            <Carousel
                plugins={[
                    'infinite',
                    'arrows',
                    'centered',
                    'autoplay',
                    {
                    resolve: slidesToShowPlugin,
                    options: {
                    numberOfSlides: 3,
                    }
                    },
                ]}
                breakpoints={{
                    960: {
                        plugins: [
                            'arrows',
                            {
                                resolve: slidesToShowPlugin,
                                options: {
                                    numberOfSlides: 1
                                }
                            }
                        ]
                    }
                }}
                animationSpeed={1000}
                offset={50}
                itemWidth={300}
            >
                {Slides}
            </Carousel>
        </div>
    )
}

export default Slider
