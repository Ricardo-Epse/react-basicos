// const state = {
//     name: 'Ricardo',
//     logged: true
// }

import { types } from "../types/types";

export const authReducer = (state = {} , action ) =>{
        switch (actions.type) {
            case types.login:
                return {
                    ...action.payload,
                    logged: true
                };
            case types.logout:
                return {
                    logged: false
                }
        
            default:
                return state;
        }
}