"use client"
import { useGetById } from "@/hooks/useUndangan";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Heading, useToast } from "@chakra-ui/react";
import { useState } from "react";
import Form from '../form'
import { useUpdate } from '@/hooks/useUndangan';

import { DataInv } from '../form';

import Preview from '../../components/Preview';
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

function Page({params}: any) {
  const [data, setData] = useState();
  const [id, setId] = useState();
  const form = useForm<DataInv>();
  const route = useRouter();
  const toast = useToast();
  const { data: resList, refetch } = useGetById({
    query: {
      slug: params.id,
    },
    onSuccess: (res: any) => {
      let newData: any = [];
      res?.data?.map((itm: any) => {
        newData.push(
          {...itm.attributes, id: itm.id}
        )
      })
      setData(newData);
      setId(newData[0].id);
      form.reset(newData[0].content);
    },
    onError: (err: any) => {
      const pesanError = err.response?.data?.error?.message === 'This attribute must be unique' ? 'Link URL sudah terpakai, Silahkan ganti dengan yang lain' : err.response?.data?.error?.message
      toast({
        title: `Gagal Mendapatkan List Undangan: ${pesanError}`,
        status: 'error',
        isClosable: true,
      })
    },
  });

  const updateUndangan = useUpdate({
    id,
    onSuccess: (res: any) => {
      toast({
        title: `Sukses Update Undangan`,
        status: 'success',
        isClosable: true,
      });
      setTimeout(
        () => route.replace('/partner-center/undangan'),
        1000
      );
    },
    onError: (err: any) => {
      toast({
        title: `Gagal Menambahkan Undangan: ${err.response?.data?.error?.message}`,
        status: 'error',
        isClosable: true,
      })
    },
  });

  const getPayload = (data: DataInv) => {
    return {
      slug: data.generalUrl,
      content: data,
      tema: data.generalTheme,
      partner_id: params.subdomain
    }
  }

  const handleSubmitForm = (data: DataInv) => {
    updateUndangan.mutate(getPayload(data))
  }

  return (
    <div className='flex items-center w-full flex-col lg:flex-row'>
      <div className='w-full lg:h-screen px-5 py-5 lg:overflow-y-auto bg-slate-50'>
        <div className="mb-4 px-4 flex item-center justify-between">
          <div>
            <Heading as='h3' size='lg'>
              Edit Undangan
            </Heading>
            <Breadcrumb className="mt-2 text-sm">
              <BreadcrumbItem>
                <BreadcrumbLink href='/partner-center/undangan'>Undangan</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href='#'>Edit Undangan</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </div>
          <div>
            <Button onClick={form.handleSubmit(handleSubmitForm)} colorScheme='teal' size='md' className='bg-green-700'>UPDATE</Button>
          </div>
        </div>
        <div className=''>
          <Form form={form} />
        </div>
      </div>
      <div className='lg:w-[500px] lg:h-screen lg:overflow-y-auto w-full bg-slate-100'>
        <Preview form={form} theme="smooth" />
      </div>
    </div>
  );
}

export default Page;