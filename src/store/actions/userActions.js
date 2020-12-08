
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
            // dispatch({ type: 'CHANGE_BET', user });
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
            // dispatch({ type: 'CHANGE_BET', user });
        } catch (err) {
            console.log('UserActions: err in removeUser', err);
            throw err
        }
    };
}
















// export function setTags(tags) {
//     return {
//         type: 'SET_TAGS',
//         tags
//     };
// }
// export function setUser(user) {
//     return {
//         type: 'SET_USER',
//         user
//     };
// }
// export function _logout(user) {
//     return {
//         type: 'LOG_OUT',
//         user
//     };
// }
// function _removeUser(userId) {
//     return {
//         type: 'REMOVE_USER',
//         userId
//     };
// }
// function setUsers(users) {
//     return {
//         type: 'SET_USERS',
//         users
//     };
// }



