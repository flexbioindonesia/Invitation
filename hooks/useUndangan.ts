/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import { useQuery, useMutation } from 'react-query';
import client from '../libs/client'


const apiPath = '/posts';

// export function useUndangan() {
  // const Create = ({ onSuccess, onError }: any) => useMutation(
  //   (data: Object) => client(`/${apiPath}`, { method: 'POST', data }),
  //   {
  //     onSuccess,
  //     onError,
  //   },
  // );

  // return {
  //   Create,
  // };
// }

const createUndangan = async (data: any) => {

  return client('/posts', { method: 'POST', data: {data: data} }).then((res) => res);
};

const useCreate = (options: any) => useMutation((updates: any) => createUndangan(updates), {
  ...options,
  onSuccess: (res:any) => {
    console.log(res)
    options?.onSuccess?.(res);
  },
  onError(error) {
    options?.onError?.(error);
  },
});

// http://localhost:1337/api/posts?filters[partner_id][$eq]=dhani&pagination[page]=1

const doFetchList = async ({ query }: any) => client(`/posts?filters[partner_id][$eq]=${query.partnerId}&pagination[page]=${query.page}`, {}).then((res: any) => ({
  data: res.data?.data,
  meta: res.data?.meta,
}));

const useGetList = ({
  query, onSuccess = (res: any) => {}, onError = (res: any) => {},
}: any) => useQuery([`${apiPath}`, query], () => doFetchList({ query }), {
  keepPreviousData: true,
  onSuccess,
  onError,
});

export {
  useCreate,
  useGetList
};