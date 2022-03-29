import axios from "axios";

export const SignUpApi = async (FirstName, LastName, UserName, Email, Password) => {
    console.log('SignUpApi')
    const Data = {
        // data: {
        first_name: FirstName,
        last_name: LastName,
        username: UserName,
        email: Email,
        password: Password
        // }
    };
    console.log('Signup DATA==', Data)
    let config = {
        method: 'POST',
        url: 'https://codersdaily.in/api/accounts/create-profile/',
        headers: {
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(Data),
    }

    return axios(config)
        .then(function (response) {
            return response
        }).catch(function (error) {
            return error.response
        })
}

export const LoginApi = async (UserName, Password) => {
    console.log('LoginApi')
    const Data = {
        username: UserName,
        password: Password
    }
    let config = {
        method: 'POST',
        url: ' https://codersdaily.in/api/token/',
        headers: {
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(Data),
    }

    return axios(config)
        .then(function (response) {
            return response
        }).catch(function (error) {
            return error.response
        })
}

export const getCoursesApi = async () => {
    let config = {
        method: 'Get',
        url: ' https://codersdaily.in/api/courses/',
        headers: {
            'Content-Type': 'application/json',
        },
    };
    return axios(config)
        .then(function (response) {
            return response;
        }).catch(function (error) {
            return error.response;
        })
}