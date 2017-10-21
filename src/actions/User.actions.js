
import axios from 'axios';

export function getName() {

    return {
        type: "GET_NAME",
         payload: axios.get("https://mysafeinfo.com/api/data?list=presidents&format=json")

    }
}

export function delName() {

    return {
        type: "DEL_NAME",
        payload: axios.get("https://mysafeinfo.com/api/data?list=presidents&format=json")

    }
}






