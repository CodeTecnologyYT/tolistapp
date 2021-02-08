import React from 'react';
import {PropTypes} from 'prop-types';

export const ListItem = ({className, children}) => {
    return (
        <div className={className}>
            {children}
        </div>
    );
}
ListItem.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node
}
ListItem.defaultProps = {
    className: ''
}