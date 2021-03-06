import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const Logo = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'brand',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
      <h4 className="m-0">
        <Link to="/">
          <span className='logo'>COIN2LINE</span>
        </Link>
      </h4>
    </div>
  );
}

export default Logo;