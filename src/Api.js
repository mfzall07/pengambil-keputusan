import request from "./utils/request";

class Api {

    static urlAPI() {
        return "http://localhost:5000/api/v1/"
    }

    // Begin :: Auth
    static Login(email, password) {
        let path = 'auth/login';
        return request(`${this.urlAPI()}${path}`, {
            method: 'POST',
            data: {
                email,
                password,
            },
        })
    }

    static CreateKreatif(data) {
        let path = 'auth/login';
        return request(`${this.urlAPI()}${path}`, {
            method: 'POST',
            data,
        })
    }

    static ResetPassword(userId, token, data) {
        let path = `auth/reset-password/${userId}/${token}`;
        return request(`${this.urlAPI()}${path}`, {
            method: 'POST',
            data,
        })
    }



}
export default Api;