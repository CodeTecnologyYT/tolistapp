import {useState} from 'react';

export const UseForm = (initialState = {}) => {
    const [state, setState] = useState(initialState);

    const handlerInputChange = ({target}) => {
        setState({
            ...state,
            [target.name]: target.value
        });
    };
    return [state,handlerInputChange];
}
