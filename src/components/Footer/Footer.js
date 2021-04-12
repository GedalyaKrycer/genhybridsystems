import React from 'react';
import './footerStyles.scss';


const Footer = props => {

    const year = new Date().getFullYear()


    return(
        <footer className="footer">
            <p>Copyright {year} Gardner Education Network   •   <a href="https://gedalyakrycer.com/" target="_blank" rel="noreferrer noopener">built by Gedalya Krycer</a></p>
        </footer>
    );


};

export default Footer;
