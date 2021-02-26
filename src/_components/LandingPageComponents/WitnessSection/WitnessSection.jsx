import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './WitnessSection.css';
import avatar1 from '../../../_assets/images/avatar1.jpg';
import avatar2 from '../../../_assets/images/avatar2.jpg';
import avatar3 from '../../../_assets/images/avatar3.jpg';
import avatar4 from '../../../_assets/images/avatar4.jpg';
import avatar5 from '../../../_assets/images/avatar5.jpg';

function WitnessSection() {
    const comments = [
        {
            img: avatar1,
            text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
        },
        {
            img: avatar2,
            text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
        },
        {
            img: avatar3,
            text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
        },
        {
            img: avatar4,
            text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
        },
        {
            img: avatar5,
            text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
        },
    ]
    const renderSlides = () =>
        comments.map((comment, i) => (
            <div className="dojo-comments" key={i}>
                <img src={comment.img} className="w-20 h-20 rounded-full" alt="" />
                <p className="comment-text">
                    {comment.text}
                </p>
            </div>
        ));
    return(
        <div className="witness w-full h-full min-h-screen relative flex items-center">
            <div className="description w-full sm:w-4/5 md:w-3/5 h-full">
                <div className="title text-3xl 2xl:text-8xl font-bold">Ils témoignent</div>
                <div className="comment-slider mt-10 ml-0 md:mt-20 sm:ml-10">
                    <Slider dots={true}>{renderSlides()}</Slider>
                </div>
            </div>
        </div>
    )
}
export { WitnessSection }