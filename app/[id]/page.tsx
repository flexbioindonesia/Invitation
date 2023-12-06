"use client"
import { useGetById } from '@/hooks/useUndangan';
import GetTheme from '../components/GetTheme';
import { useState } from 'react';

function Page({params, form, type}: any) {
	const [dataApi, setDataApi] = useState<any>();
	const { data: resList, refetch } = useGetById({
    query: {
      slug: type === 'preview' ? '0' : params.id,
    },
    onSuccess: (res: any) => {
      let newData: any = [];
      res?.data?.map((itm: any) => {
        newData.push(
          {...itm.attributes, id: itm.id}
        )
      })
      console.log(newData)
      setDataApi(newData[0]?.content);
    },
    onError: (err: any) => {
      console.log(err);
    },
  });

  if(type !== 'preview' && dataApi === undefined){
    return <h1>Loading...</h1>
  }

	return (
		<>
			<GetTheme data={type === 'preview' ? form.watch() : dataApi} type={type} theme={type === 'preview' ? form.watch('generalTheme') : dataApi?.generalTheme || 'Smooth'} />
		</>
	);
}

export default Page;