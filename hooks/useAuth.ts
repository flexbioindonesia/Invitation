/* eslint-disable no-shadow */
import clientGateway from '../libs/clientGateway'
import { useMutation } from 'react-query';
import Cookies from 'js-cookie';

const signInUser = async (data: any) => {
  const formData = {
    identifier: data.identifier,
    password: data.password,
  };

  return clientGateway('/auth/local', { method: 'POST', data: formData }).then((res) => res);
};

const useSignIn = (options: any) => useMutation((updates: any) => signInUser(updates), {
  ...options,
  onSuccess: (res:any) => {
    console.log(res)
    Cookies.set('token', res.data.jwt, { expires: 7, secure: true });
    options?.onSuccess?.(res);
  },
  onError(error) {
    options?.onError?.(error);
  },
});

export {
  useSignIn
};
