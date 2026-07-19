import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "../styles/carousel.css";

import ServiceCard from "./ServiceCard";

import plumbing from "../assets/services/plumbing.jpg";
import electrical from "../assets/services/electrical.jpg";
import heating from "../assets/services/heating.jpg";
import cleaning from "../assets/services/cleaning.jpg";
import carpentry from "../assets/services/carpentry.jpg";
import appliance from "../assets/services/appliance.jpg";

function ServiceCarousel() {

    const services = [
        { title: "Plumbing", image: plumbing },
        { title: "Electrical", image: electrical },
        { title: "Heating", image: heating },
        { title: "Cleaning", image: cleaning },
        { title: "Carpentry", image: carpentry },
        { title: "Appliance Repair", image: appliance }
    ];

    return (
        <Swiper
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
        >
            {services.map((service) => (
                <SwiperSlide key={service.title}>
                    <ServiceCard
                        title={service.title}
                        image={service.image}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default ServiceCarousel;