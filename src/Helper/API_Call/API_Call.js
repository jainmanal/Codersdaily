import axios from "axios";

export const SignUpApi = async (FirstName, LastName, UserName, Email, Password) =>{
const Data ={
    firstname: FirstName,
    lastname: LastName,
    username: UserName,
    email: Email,
    password: Password
};
console.log('DATA==', Data)
}