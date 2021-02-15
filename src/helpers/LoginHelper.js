import { urlLogin } from './GlobalUrl';

const LoginHelper = async (username, password) => {
    console.log(urlLogin, username, password, '================ini');

    try {
        let response = await fetch(urlLogin, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            redirect: 'follow',
            body: JSON.stringify({
                username: username,
                password: password,

            }),
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

export default LoginHelper;
