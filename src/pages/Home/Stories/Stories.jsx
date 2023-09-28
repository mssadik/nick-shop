import React from 'react';
import Title from "../../../components/Title";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Stories = ({ story }) => {
    const { title, news } = story;

    // Assuming you have an array of items for your slides in the `news` variable.
    // You should map over this array to create the SwiperSlides.

    return (
        <div className="nike-container mb-11">
            <Title title={title}></Title>
            <div>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={3} // Set to 3 slides per view
                >
                    {news.map((item, index) => (
                        <SwiperSlide key={index}>
                            {/* Render the content for each slide here */}
                            <div>
                                {/* You can place your content here */}
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Stories;
