import axios from 'axios'
import {BaseURL} from '../utils/config'

const getItems = async (tags) =>{
    const config = {
        params: {
            tags
        }
    }

    const items = await axios.get(`${BaseURL}/api/items`,config)
    return items.data

}

export default getItems