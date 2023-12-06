"use client"
import {useForm} from 'react-hook-form'
import Form from '../form'
import { useCreate } from '@/hooks/useUndangan';
import { DataInv } from '../form';

import Preview from '../../components/Preview';

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Heading, useToast } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
function Page({params}: any) {
  const toast = useToast();
  const route = useRouter();
	const form = useForm<DataInv>(
    {
      defaultValues: {
        welcomeIsActive: true,
        welcomeText: `Tanpa mengurangi rasa hormat, kami mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara pernikahan kami.`,
        quoteIsActive: true,
        commentsIsActive: true,
        confirmationIsActive: true,
        sotryIsActive: true,
        storyIsVideo: true,
        generalTheme: 'Smooth',
        giftIsActive: true
      }
    }
  );

  const {handleSubmit} = form;

  const getPayload = (data: DataInv) => {
    return {
      slug: data.generalUrl,
      content: data,
      tema: data.generalTheme,
      partner_id: params.subdomain
    }
  }

  const createUndangan = useCreate({
    onSuccess: (res: any) => {
      toast({
        title: `Sukses Menambahkan Undangan`,
        status: 'success',
        isClosable: true,
      });
      setTimeout(
        () => route.replace('/partner-center/undangan'),
        1000
      );
    },
    onError: (err: any) => {
      const pesanError = err.response?.data?.error?.message === 'This attribute must be unique' ? 'Link URL sudah terpakai, Silahkan ganti dengan yang lain' : err.response?.data?.error?.message
      toast({
        title: `Gagal Menambahkan Undangan: ${pesanError}`,
        status: 'error',
        isClosable: true,
      })
      console.log(err)
    },
  });

  const handleSubmitForm = (data: DataInv) => {
    createUndangan.mutate(getPayload(data))
  }

	return (
		<div className='flex items-center w-full flex-col lg:flex-row'>
      <div className='w-full lg:h-screen px-5 py-5 lg:overflow-y-auto bg-slate-50'>
        <div className="mb-4 px-4 flex item-center justify-between">
          <div>
            <Heading as='h3' size='lg'>
              Input Undangan Baru
            </Heading>
            <Breadcrumb className="mt-2 text-sm">
              <BreadcrumbItem>
                <BreadcrumbLink href='/partner-center/undangan'>Undangan</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href='#'>Input Undangan</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </div>
          <div>
            <Button onClick={handleSubmit(handleSubmitForm)} colorScheme='teal' size='md' className='bg-green-700'>SIMPAN</Button>
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