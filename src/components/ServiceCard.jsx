import "../styles/serviceCard.css";

function ServiceCard({ title, image }) {
    return (
        <div className="service-card">
            <img src={image} alt={title} />

            <div className="service-content">
                <h3>{title}</h3>
                <button>Learn More</button>
            </div>
        </div>
    );
}

export default ServiceCard;