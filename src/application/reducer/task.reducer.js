import {actionTypes} from "../types/task.types";

export const  taskReducer = (state = [], action) => {
    switch (action.type){
        case actionTypes.add :
            return [...state, action.payload];
        case actionTypes.delete :
            return state.filter((value, index) => index !== action.payload);
        default:
            return state;
    }
}