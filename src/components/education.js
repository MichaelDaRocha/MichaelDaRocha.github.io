export default function Education() {
    return (
        <article className='card' aria-labelledby="about-heading">
            <header className="card-header">
                <div className="card-icon education" aria-hidden="true"/>
                <h2>EDUCATION</h2>
            </header>
            
            <hr />

            <div className='card-content'>
                <section aria-labelledby="capital-one">
                    <h2 id="capital-one" className="card-section">Bachelor of Computer Science, Software Engineering Option, Honours</h2>
                    <p>University of Waterloo</p>
                    <p>September 2018 - June 2023</p>
                </section>

                <section aria-labelledby="td-bank">
                    <h2 id="td-bank" className="card-section">AWS Certified Cloud Practitioner</h2>
                    <p>Amazon Web Services</p>
                    <p>May 2025</p>
                </section>

                <section aria-labelledby="japanese-test">
                    <h2 id="japanese-test" className="card-section">Japanese Language Proficiency N5</h2>
                    <p>Japan Educational Exchanges and Services</p>
                    <p>March 2025</p>
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