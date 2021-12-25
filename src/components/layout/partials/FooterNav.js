import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <Link to="#0">Pricing</Link>
        </li>
        <li>
          <Link to="#0">Terms of Use</Link>
        </li>
        <li>
          <Link to="#0">Privacy Policy</Link>
        </li>
        <li>
          <Link to="#0">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;