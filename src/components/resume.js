import '../styles/resume.css';
import Experience from '../components/experience';
import Skills from './skills';
import Education from './education';

export default function Resume() {
    return (
        <main className='container'>
            <Experience />
            <Skills />
            <Education />
        </main>
    )
}