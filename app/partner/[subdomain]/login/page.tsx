"use client"

import { Button, FormLabel, Input, InputGroup, InputRightElement, Spacer } from '@chakra-ui/react'
import { useState } from 'react';
import {useForm} from 'react-hook-form';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

type loginForm = {
  username: string;
  password: string;
}

function Page() {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)
  const form = useForm<loginForm>();
  const {register, handleSubmit} = form;
  const route = useRouter();
  const onSubmit = (data: any) => {
    const token = 'jwtmockup';
    Cookies.set('token', token, { expires: 7, secure: true });
    route.replace('/partner-center');
  };
  return (
    <>
      <div className="w-full h-screen flex flex-col items-center justify-center">
        <div className="bg-white rounded-md shadow-lg border-[1px] px-6 py-6 w-[400px]">
          <p className="text-xl text-zinc-600 font-bold">Login</p>
          <div className='mt-5'>
            <form>
              <FormLabel className='text-zinc-500'>Username</FormLabel>
              <Input {...register("username")} placeholder='Username' size='md' />
              <FormLabel className='mt-2 text-zinc-500'>Password</FormLabel>
              <InputGroup size='md'>
                <Input
                  {...register("password")}
                  pr='4.5rem'
                  type={show ? 'text' : 'password'}
                  placeholder='Enter password'
                />
                <InputRightElement width='4.5rem'>
                  <Button h='1.75rem' size='sm' onClick={handleClick}>
                    {show ? 'Hide' : 'Show'}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <div className='mt-4 flex justify-end'>
                <Button colorScheme='messenger' className='bg-blue-700' onClick={handleSubmit(onSubmit)}>Login</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;