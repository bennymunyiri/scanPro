import { Link } from "react-router-dom";
export default function Footer() {
    return (
        <div className="footer">
            <div className="section-child">
                <div className="footer-child">
                    <ul className="footer-list">
                        <h3 className="links">Quick Links</h3>
                        <li className='links'>
                            <Link className="link" to="/home">Home</Link>
                        </li>
                        <li className="links">
                            <a className="link" href="https://web.facebook.com/profile.php?id=61555706738465" target="_blank" rel="noopener noreferrer">Facebook</a>
                        </li>
                        <li className="links">
                            <a className="link" href="https://www.instagram.com/scanprolimited/" target="_blank" rel="noopener noreferrer">Instagram</a>
                            <li className="links">
                            </li>
                            <Link className="link" to="/contact">Get Inquiry</Link>
                        </li>
                    </ul>
                </div>
                <div className="footer-child">
                    <ul className="footer-list">
                        <h3 className="links">Contact</h3>
                        <li className="link">scanprolimited@gmail.com</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
