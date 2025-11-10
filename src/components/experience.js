export default function Experience() {
    return (
        <article className='card' aria-labelledby="about-heading">
            <header className="card-header">
                <div className="card-icon experience" aria-hidden="true"/>
                <h2>EXPERIENCE</h2>
            </header>

            <hr />

            <div className="card-content">
                <section aria-labelledby="capital-one">
                    <h2 id="capital-one" className="card-section">Capital One</h2>
                    <p>Associate Software Engineer</p>
                    <p>November 2024 - Present</p>
                    <p>Toronto, ON, Canada</p>
                </section>

                <section aria-labelledby="td-bank">
                    <h2 id="td-bank" className="card-section">TD Bank Group</h2>
                    <p>Data Science & Advance Analytics Co-op</p>
                    <p>September 2022 - December 2022</p>
                    <p>Toronto, ON, Canada</p>
                </section>

                <section aria-labelledby="toyota">
                    <h2 id="toyota" className="card-section">Toyota</h2>
                    <p>Co-op Analyst – Systems Engineering</p>
                    <p>September 2021 - March 2022</p>
                    <p>Cambridge, ON, Canada</p>
                </section>

                <section aria-labelledby="university-of-waterloo">
                    <h2 id="university-of-waterloo" className="card-section">University of Waterloo</h2>
                    <p>Engineering Undergraduate Research Assistant - Blockchain Application Developer</p>
                    <p>January 2021 - April 2021</p>
                    <p>Remote, ON, Canada</p>
                </section>
            </div>

            <footer className="card-footer">
                <p className="margin-0">
                    Last Updated: 11/9/2025
                </p>
            </footer>
        </article>
    );
}