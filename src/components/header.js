import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 0);
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // close menu on outside click, Esc, or when resizing larger screens
    useEffect(() => {
        const onClick = (e) => {
            if (open && menuRef.current && !menuRef.current.contains(e.target) && !e.target.closest('.menu-toggle')) {
                setOpen(false);
            }
        };
        const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
        const onResize = () => { if (window.innerWidth > 820) setOpen(false); };

        document.addEventListener('click', onClick);
        document.addEventListener('keydown', onKey);
        window.addEventListener('resize', onResize);
        return () => {
            document.removeEventListener('click', onClick);
            document.removeEventListener('keydown', onKey);
            window.removeEventListener('resize', onResize);
        };
    }, [open]);

    const toggleMenu = () => setOpen(v => !v);

    return (
        <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
            <div className="header-left">
                <Link to="/">
                    <img src={require("../resources/images/icon.png")} alt="Logo" className="logo" />
                </Link>
            </div>

            <button
                className={`menu-toggle ${open ? 'open' : ''}`}
                aria-label="Toggle menu"
                aria-expanded={open}
                onClick={toggleMenu}
            >
                <span className="hamburger" />
            </button>

            <nav ref={menuRef} className={`nav-menu ${open ? 'open' : ''}`} aria-hidden={!open && window.innerWidth <= 820}>
                <ul>
                    <li><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>
                    <li><Link to="/about" onClick={() => setOpen(false)}>About</Link></li>
                    <li><Link to="/resume" onClick={() => setOpen(false)}>Resume</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;