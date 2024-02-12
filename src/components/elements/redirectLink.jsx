/* eslint-disable react/prop-types */

function RedirectLink(props) {
  const { marginTop, to, className, children } = props;

  return (
    <div className={marginTop}>
      <a href={to} className={className}>
        {children}
      </a>
    </div>
  );
}

export default RedirectLink;

