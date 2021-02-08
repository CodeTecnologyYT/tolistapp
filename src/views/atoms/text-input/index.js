import React from 'react';
import {PropTypes} from 'prop-types';

export const TextInput = ({className, name, value, onChange}) => {
    return (
        <input className={className} name={name} type="text" value={value} onChange={onChange}></input>
    );
}
TextInput.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange : PropTypes.func
}
TextInput.defaultProps = {
    className: '',
    name: '',
    value : '',
    onChange : () => {}
}