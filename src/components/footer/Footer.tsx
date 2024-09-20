import * as React from 'react';
import './Footer.css'

export interface IFooterProps {
}

function Footer (props: IFooterProps) {
  return (
    <footer>
      <ul>
        <li>
          about
        </li>
        <li>
          contact
        </li>

      </ul>
    </footer>
  );
}

export default Footer;