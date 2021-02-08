import React from 'react';
import {PropTypes} from 'prop-types';

export const Title = ({className,children}) => {
    return(
        <h1 className={className}>
            {children}
        </h1>
    );
}
Title.propTypes = {
    className : PropTypes.string,
    children : PropTypes.node.isRequired
}
Title.defaultProps ={
    className : ''
}