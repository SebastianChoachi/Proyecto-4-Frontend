import axios from 'axios';

export const login = async ({ email, password }) => {
  try {
    const {
      data: { data },
    } = await axios.post('http://localhost:5003/apli/v1/auth/login', {
      email : email,
      password : password,
    });
    
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', data);

    return data;
  } catch (e) {
    console.log(e.message);
  }
};

export const register = async (registerData) => {
  try {
    console.log({ registerData });
    const {
      data: { data },
    } = await axios.post(
      /*process.env.REACT_APP_API_URI + '/auth/register'*/'http://localhost:5003/apli/v1/register',
      registerData
    );
    //localStorage.setItem('token', data.token);

    return data;
  } catch (e) {
    console.log(e.message);
  }
};