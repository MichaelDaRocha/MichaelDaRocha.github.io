export default function Education() {
    return (
        <article className='card' aria-labelledby="education-heading">
            <header className="card-header">
                <div className="card-icon education" aria-hidden="true"/>
                <h2>EDUCATION</h2>
            </header>
            
            <hr />

            <div className='card-content'>
                <section aria-labelledby="university-of-waterloo">
                    <h2 id="university-of-waterloo" className="card-section">Bachelor of Computer Science, Software Engineering Option, Honours</h2>
                    <p>University of Waterloo</p>
                    <p>September 2018 - June 2023</p>
                </section>

                <section aria-labelledby="aws-certified-cloud-practitioner">
                    <h2 id="aws-certified-cloud-practitioner" className="card-section">AWS Certified Cloud Practitioner</h2>
                    <p>Amazon Web Services</p>
                    <p>May 2025</p>
                </section>

                <section aria-labelledby="japanese-test-n4">
                    <h2 id="japanese-test" className="card-section">Japanese Language Proficiency Test N4</h2>
                    <p>Japan Educational Exchanges and Services</p>
                    <p>January 2026</p>
                </section>

                <section aria-labelledby="japanese-test-n5">
                    <h2 id="japanese-test" className="card-section">Japanese Language Proficiency Test N5</h2>
                    <p>Japan Educational Exchanges and Services</p>
                    <p>January 2025</p>
                </section>
            </div>

            <footer className="card-footer">
                <p className="margin-0">
                    Last Updated: 1/31/2026
                </p>
            </footer>
        </article>
    );
}