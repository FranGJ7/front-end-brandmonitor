import Api from './api'

export async function createUser(user) {
    try {
      await Api.post('/person', user);
    } catch (error) {
      console.error(error);
    }
  }


export async function loginUser(user) {
    try {
      await Api.post('/auth/login', user);
      const response = await Api.post('/auth/login', token);
      //localStorage.setItem('msg', JSON.stringify(response.data.user));
      localStorage.setItem('token', response.data.token);
    } catch (error) {
      console.error(error);
    }
  }


