//specific code
import axios from 'axios'

const getLocations = async () =>{
    const locations = await axios.get("http://localhost:5000/locations")
    return locations.data
}

export default getLocations