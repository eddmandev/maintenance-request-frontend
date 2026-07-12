import {Swiper, SwiperSlide} from "swiper/react";

import "swiper/css";

export default function ServiceCarousel(){

    const services=[
        "Plumbing",
        "Electrical",
        "Heating",
        "Carpentry",
        "Cleaning",
        "Appliance Repair"
    ];

    return(

        <Swiper
            spaceBetween={30}
            slidesPerView={3}
            loop={true}
        >

            {services.map(service=>

                <SwiperSlide key={service}>

                    <div className="service-card">

                        <img
                            src={`/images/${service}.png`}
                            alt={service}
                        />

                        <h3>{service}</h3>

                    </div>

                </SwiperSlide>

            )}

        </Swiper>

    );

}