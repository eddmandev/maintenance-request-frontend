import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ServiceCarousel from "../components/ServiceCarousel";

export default function HomePage(){

    return(

        <>

            <Navbar/>

            <Hero/>

            <section className="carousel-section">

                <h2>Our Maintenance Services</h2>

                <ServiceCarousel/>

            </section>

        </>

    );

}