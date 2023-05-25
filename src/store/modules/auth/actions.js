import axios from 'axios'
import { SET_USER_TOKEN_DATA_MUTATION, SIGNUP_ACTION } from '../../storeConstants'
import SignupValidations from '../../../services/SignupValidation'

export default {
    async [SIGNUP_ACTION](context, payload) {
        let postData = {
            email: payload.email,
            password: payload.password,
            returnSecureToken: true
        }

        let response = ''
        try {
            response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCHakZQ2qEmJbyYUwCCctVPya8iVDiseEo`, postData);
            console.log(response);
        } catch (error) {
            // console.log(error.response.data.error.errors[0].message);
            let errorMessage = SignupValidations.getErrorMessageFromCode(error.response.data.error.errors[0].message);
            console.log(errorMessage);
        }
        if (response.status === 200) {
            context.commit(SET_USER_TOKEN_DATA_MUTATION, {
                email: response.data.email,
                token: response.data.idToken,
                expiresIn: response.data.expiresIn,
                refreshToken: response.data.refreshToken,
                userId: response.data.localId
            })
        }
    }
}