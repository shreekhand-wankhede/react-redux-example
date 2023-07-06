const intialState = {counter:0, accessToken:0,userId:0};

export function UserReducer(state=intialState, action) {

    // Here we can add the API call for getting token and other user details
    switch(action.type){
        case 'increment':
            return {
                ...state,
                counter: state.counter+1,
            };
        case 'decrement':
            return {
                ...state,
                counter: state.counter-1,
            };

        case 'login':
            // API call 
                return {
                    ...state,
                    accessToken: 1,
                    userId: 1,
                };
        case 'logout':
                return {
                    ...state,
                    accessToken: 0,
                    userId: 0,
                };     
        default:
                return state;

    }

}
