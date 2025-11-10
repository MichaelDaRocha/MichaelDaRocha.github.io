export default function About() {


    return (
        <main className='container'>
            <article className='card' aria-labelledby="about-heading">
                <header className="card-header">
                    <div className="card-avatar" aria-hidden="true">
                        <img src={require("../resources/images/michael.jpg")} alt="Michael's Profile Picture" />
                    </div>
                    <div>
                        <h1 id="about-heading" className="card-name">
                            Software Engineer
                        </h1>
                        <p className="card-subtitle">Associate Software Engineer at Capital One</p>
                    </div>
                </header>

                <section>
                    <p>
                        I am an associate software engineer working at Capital One. I focus on building and maintaining enterprise
                        grade software. My work involves development of large-scale systems, collaborating across cross-functional 
                        teams, and delivering reliable solutions for complex business needs.
                    </p>
                </section>

                <section aria-labelledby="experience-title">
                    <h2 id="experience-title" className="card-section">Industry Experience</h2>
                    <p className="margin-top-0">
                        I've worked at established organizations across multiple industries, including:
                    </p>
                    <ul className="card-list">
                        <li>Capital One</li>
                        <li>TD Bank</li>
                        <li>Toyota</li>
                        <li>University of Waterloo</li>
                    </ul>
                </section>

                <section aria-labelledby="hobbies-title">
                    <h2 id="hobbies-title" className="card-section">
                        Hobbies & Interests
                    </h2>
                    <p className="margin-top-0">
                        Outside of work I enjoy:
                    </p>
                    <ul className="card-list">
                        <li>Studying Japanese</li>
                        <li>Travel</li>
                        <li>Watching Hockey</li>
                    </ul>
                </section>

                <footer className="card-footer">
                    <p className="margin-0">
                        Last Updated: 11/9/2025
                    </p>
                </footer>
            </article>
        </main>
    );
}