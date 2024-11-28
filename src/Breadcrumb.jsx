import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumb = ({ separator, customClass, i18n }) => {
  const location = useLocation();
  const pathArray = location.pathname.split('/').filter(Boolean);

  const crumbs = pathArray.map((segment, index) => ({
    label: i18n(segment),
    path: '/' + pathArray.slice(0, index + 1).join('/'),
  }));

  return (
    <nav aria-label="breadcrumb">
      <ol className={`breadcrumb ${customClass}`}>
        {crumbs.map((crumb, index) => (
          <li
            key={index}
            className={`breadcrumb-item ${index === crumbs.length - 1 ? 'active' : ''}`}
            aria-current={index === crumbs.length - 1 ? 'page' : null}
          >
            {index !== crumbs.length - 1 ? (
              <Link to={crumb.path}>{crumb.label}</Link>
            ) : (
              <span>{crumb.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

Breadcrumb.propTypes = {
  separator: PropTypes.string,
  customClass: PropTypes.string,
  i18n: PropTypes.func,
};

Breadcrumb.defaultProps = {
  separator: '/',
  customClass: '',
  i18n: (label) => label,
};

export default Breadcrumb;
