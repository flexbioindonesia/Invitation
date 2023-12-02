"use client"
import { FormControl, FormLabel, Input, Select, Switch } from '@chakra-ui/react';
import { RegisterOptions, UseFormReturn, useForm as useFormReactHook } from 'react-hook-form';
import CloudinaryUploadWidget from './CloudinaryUploadWidge';
import { Cloudinary } from "@cloudinary/url-gen";
import { useState } from 'react';

interface BaseField<T> {
  id: keyof T & string | '';
  validation?: RegisterOptions;
  type: '' | 'dropdown' | 'number' | 'text' | 'date' | 'switch' | 'currency' | 'upload-single'
    | 'telephone' | 'mobilephone' | 'ammount' | 'datepicker'
    | 'monthpicker' | 'yearpicker' | 'checkbox' | 'checkbox-horizontal-label'
    | 'custom' | 'dropdown-texbox' | 'dropdown-multivalue' | 'dropdown-multivalue-v2'
    | 'radio'| 'file-upload-excel' | 'dropdown-multivalue-all';
  width?: number | string | undefined;
  height?: number | string | undefined;
  label?: string;
  placeholder?: string;
  isLoading?: boolean;
  disabled?: boolean;
  datasources?: any[];
  onChange?: (e: any) => void;
  [x: string]: any;
  isHidden?: boolean;
}

export type IField<T = {[key: string]: string}> = BaseField<T>;

function Formbuilder({ fields , form}: any) {
  const {register, setValue, getValues} = form;
  return (
    fields.map((itm: any, idx: any) => {
      switch(itm.type){
        case 'text':
          return (
            <div key={idx} className='py-2'>
              <FormControl>
                <FormLabel>{itm.label}</FormLabel>
                <Input type='text' {...register(itm.id)}  />
              </FormControl>
            </div>
          )
        case 'date':
          return (
            <div key={idx} className='py-2'>
              <FormControl>
                <FormLabel>{itm.label}</FormLabel>
                <Input type='date' {...register(itm.id)}  />
              </FormControl>
            </div>
          )
        case 'switch':
          return (
            <div key={idx} className='py-2'>
              <FormControl>
                <FormLabel>{itm.label}</FormLabel>
                <Switch colorScheme='red' {...register(itm.id)} />
                {/* <Input type='date' {...register(itm.id)}  /> */}
              </FormControl>
            </div>
          )
        case 'dropdown':
          return (
            <div key={idx} className='py-2'>
              <FormControl>
                <FormLabel>{itm.label}</FormLabel>
                <Select placeholder='Pilih Social Media' size='md' {...register(itm.id)}>
                  {itm.datasources?.map((v: any, i: any) => (
                    <option key={i} value='option1'>{v.name}</option>
                  ))}
                </Select>
              </FormControl>
            </div>
          )
        case 'upload-single':
          return (
            <div key={idx} className='py-2'>
              <FormControl>
                <FormLabel>{itm.label}</FormLabel>
                <CloudinaryUploadWidget setValue={setValue} id={itm.id} getValues={getValues} mode={'single'} />
                {/* <CloudinaryUploadWidget setValue={setValue} id={itm.id} uwConfig={uwConfig} setPublicId={setPublicId} /> */}
              </FormControl>
            </div>
          )
      }
    })
  )
}

export default Formbuilder;