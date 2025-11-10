import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';
import '../styles/footer.css';

const Footer = () => {
    const handleLinkedInClick = () => {
        window.open('https://www.linkedin.com/in/michael-darocha/', '_blank');
    };

    const handleEmailClick = () => {
        window.location.href = 'mailto:1michael.darocha@example.com';
    };

    return (
        <footer className="footer">
            <div className="footer-left">
                <FaLinkedin 
                    className="social-icon" 
                    onClick={handleLinkedInClick}
                />
                <MdEmail 
                    className="social-icon" 
                    onClick={handleEmailClick}
                />
            </div>
            <div className="footer-center">
                <p>Copyright &copy; 2025 Michael DaRocha</p>
            </div>
            <div className="footer-right">
                                <MdPhone className="social-icon" />
                <p>+1 647-638-2991</p>
            </div>
        </footer>
    );
};

export default Footer;