export default function Skills() {
    return (
        <article className='card' aria-labelledby="about-heading">
            <header className="card-header">
                <div className="card-icon skills" aria-hidden="true"/>
                <h2>SKILLS</h2>
            </header>

            <hr />

            <div className="card-content">

                <section aria-labelledby="capital-one">
                    <h2 id="capital-one" className="card-section">Languages</h2>
                    <p>Java • JavaScript • TypeScript • Python • HTML • CSS • SQL • GraphQL • Bash</p>
                </section>

                <section aria-labelledby="capital-one">
                    <h2 id="capital-one" className="card-section">Technologies</h2>
                    <p> Angular • React • Express • Spring Boot • MongoDB • PostgreSQL • MySQL</p>
                </section>

                <section aria-labelledby="td-bank">
                    <h2 id="td-bank" className="card-section">Infrastructure</h2>
                    <p>AWS • Docker • Git • GitHub Actions</p>
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