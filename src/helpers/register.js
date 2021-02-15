import { urlRegister } from './GlobalUrl';

const register = async (name, phone, email, id_type, id_number, referral_code, password) => {


    console.log(formdata,
        '================ini');
    try {
        let formdata = new FormData();
        formdata.append('name', name)
        formdata.append('phone', phone)
        formdata.append('email', email)
        formdata.append('id_type', id_type)
        formdata.append('id_number', id_number)
        formdata.append('referral_code', '0101010101')
        formdata.append('password', password)
        let response = await fetch(urlRegister, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                "Content-Type": "multipart/form-data",
            },
            redirect: 'follow',
            body: formdata
        });
        let data = await response.json();
        console.log(data, 'korewa data');
        return data;
    } catch (error) {
        console.log(error, 'ini error');
        if ('code' in error) {
            console.log('trueee', error);
            return error;
        } else {
            console.log('false');
            return {
                code: 500,
                message: error,
            };
        }
    }
};

export default register;
