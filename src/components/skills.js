export default function Skills() {
    return (
        <article className='card' aria-labelledby="skills-heading">
            <header className="card-header">
                <div className="card-icon skills" aria-hidden="true"/>
                <h2>SKILLS</h2>
            </header>

            <hr />

            <div className="card-content">

                <section aria-labelledby="languages">
                    <h2 id="languages" className="card-section">Languages</h2>
                    <p>Java • JavaScript • HTML • CSS • Python • SQL • Bash</p>
                </section>

                <section aria-labelledby="libraries-frameworks">
                    <h2 id="libraries-frameworks" className="card-section">Libraries/Frameworks</h2>
                    <p>Spring Boot • React • Angular • Express</p>
                </section>

                <section aria-labelledby="databases">
                    <h2 id="databases" className="card-section">Databases</h2>
                    <p>DynamoDB • MySQL • PostgreSQL  • MongoDB</p>
                </section>

                <section aria-labelledby="tools">
                    <h2 id="tools" className="card-section">Tools</h2>
                    <p>AWS • Docker • Github Copilot • Google Gemini • Jenkins • Git • GitHub Actions</p>
                </section>

            </div>

            <footer className="card-footer">
                <p className="margin-0">
                    Last Updated: 11/16/2025
                </p>
            </footer>
        </article>
    );
}