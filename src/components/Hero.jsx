import "./hero.css";

export default function Hero(){

    return(
        <section className="hero">

            <h1>Building Maintenance Made Simple.</h1>

            <p>
                Report maintenance issues, track progress and
                communicate with building maintenance effortlessly.
            </p>

            <div className="hero-buttons">

                <button>Create Ticket</button>

                <button className="secondary">
                    View Services
                </button>

            </div>

        </section>
    );
}