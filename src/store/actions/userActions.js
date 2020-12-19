
import userService from '../../service/userService'



export function decUserBalance(bet) {
    return async dispatch => {
        try {
            const user = await userService.decUserBalance(bet);
            dispatch({ type: 'SET_USER', user });
        } catch (err) {
            console.log('UserActions: err in removeUser', err);
            throw err
        }
    };
}
export function incUserBalance(bet) {
    return async dispatch => {
        try {
            const user = await userService.incUserBalance(bet);
            
            dispatch({ type: 'SET_USER', user });
        } catch (err) {
            console.log('UserActions: err in removeUser', err);
            throw err
        }
    };
}


export function changeBet(bet) {
    return async dispatch => {
        try {
            const user = await userService.changeBet(bet);
            dispatch({ type: 'SET_USER', user });
            
        } catch (err) {
            console.log('UserActions: err in removeUser', err);
            throw err
        }
    };
}

















































