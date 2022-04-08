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

export const ForgotPasswordApi = async (Email) => {

    console.log('passwordAPI')
    const data = {
        email: Email
    }
    console.log('password', data)
    let config = {
        method: 'POST',
        url: 'https://codersdaily.in/api/accounts/forgot-password/',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data,
    }
    return axios(config)
        .then(function (response) {
            return response
        }).catch(function (error) {
            return error.response
        })
}

export const VerifyOtp = async (Email,OTP) => {
    const data = {
        email: Email,
        otp: OTP
    }
    console.log(data)
    let config = {
        method: 'POST',
        url: 'https://codersdaily.in/api/accounts/verify-password-otp/',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data,
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

export const getApi = async (url) => {
    let config = {
        method: 'Get',
        url: url,
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

export const UpdateProfileApi = async (token, FirstName, LastName, UserName, Email) => {
    const Data = {
        // data: {
        first_name: FirstName,
        last_name: LastName,
        username: UserName,
        email: Email,
        // password: Password
        // }
    };
    console.log('updateProfile', Data)
    let config = {
        method: 'put',
        url: 'https://codersdaily.in/api/accounts/update/',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token,
        },
        data: JSON.stringify(Data),
    };
    return axios(config)
        .then(function (response) {
            return response;
        })
        .catch(function (error) {
            return error.response;
        });
};
