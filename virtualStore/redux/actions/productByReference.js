/*basic modules************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
import axios from 'axios'
import config from '../../config.js'
axios.defaults.withCredentials = true;

/*types************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
import { GET_PRODUCT_BY_REFERENCE } from '../types.js'

/*return************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
export default {

    getProductByReference: reference => dispatch => { 
        return axios.get(`${config.api}/search/products/${reference}`).then(response =>

            dispatch({ type: GET_PRODUCT_BY_REFERENCE, payload: response.data })

        ).catch(error => console.error(error))
    }

}