import { GET_USER_TOKEN_GETTER } from '../../storeConstants'

export default {
    [GET_USER_TOKEN_GETTER]: (state) => {
        return state.token;
    }
}