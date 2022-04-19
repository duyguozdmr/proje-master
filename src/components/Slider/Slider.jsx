import React from 'react';
import { Carousel } from 'react-bootstrap';
import useStyles from './styles';

const Slider = () => {
    const classes = useStyles();
    return (
        <Carousel fade>  
           
            <Carousel.Item>
                <img
                    className={classes.img}
                    src="https://cdn-static.personaclick.com/Watsons/291121/212212d.png"
                    alt="First slide"
                />
            </Carousel.Item> <Carousel.Item>
                <img
                   className={classes.img}
                    src="	https://img-watsons.mncdn.com/Content/Images/Thumbs/0338845.png"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className={classes.img}
                    src="https://img-watsons.mncdn.com/Content/Images/Thumbs/0350181.png"
                    alt="Second slide"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className={classes.img}
                    src="	https://img-watsons.mncdn.com/Content/Images/Thumbs/0349368.png"
                    alt="Third slide"
                />

            </Carousel.Item>

            <Carousel.Item>
                <img
                    className={classes.img}
                    src="https://cdn-static.personaclick.com/Watsons/191121/nd.jpg"
                    alt="First slide"
                />
            </Carousel.Item>


        </Carousel>
    );
}

export default Slider;