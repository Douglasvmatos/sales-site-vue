import { http } from "./apiCar";

export default {
    list:() => {
        return http.get('modelos')
    }
}