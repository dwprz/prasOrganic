/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

function Button(props) {
  const { marginTop, to, className, children } = props;

  return (
    <div className={marginTop}>
      <Link to={to} className={className}>
        {children}
      </Link>
    </div>
  );
}

export default Button;

