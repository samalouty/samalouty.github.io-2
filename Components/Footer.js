import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Samalouty
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <div class='social-icons'>
            <Link
              class='social-icon-link youtube'
              to='https://github.com/samalouty'
              target='_blank'
              aria-label='Youtube'
            >
              <FontAwesomeIcon icon={faCode} />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='mailto: bado80141@gmail.com'
              target='_blank'
              aria-label='Twitter'
            >
             <FontAwesomeIcon icon= {faEnvelope} />
            </Link>
            <Link
              class='social-icon-link linkedin'
              to='https://www.linkedin.com/in/abdelrahman-elsamalouty-b38687197/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;