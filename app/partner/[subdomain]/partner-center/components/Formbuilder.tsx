"use client"
import { FormControl, FormErrorMessage, FormLabel, Input, Select, Switch } from '@chakra-ui/react';
import { RegisterOptions, UseFormReturn, useForm as useFormReactHook } from 'react-hook-form';
import CloudinaryUploadWidget from './CloudinaryUploadWidge';
import { Cloudinary } from "@cloudinary/url-gen";
import { useState } from 'react';

interface BaseField<T> {
  id: keyof T & string | '';
  validation?: RegisterOptions;
  type: '' | 'dropdown' | 'number' | 'text' | 'date' | 'switch' | 'currency' | 'upload-single' | 'upload-multiple' | 'upload-sound'
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
  isRequired?: boolean;
}

export type IField<T = {[key: string]: string}> = BaseField<T>;

function Formbuilder({ fields , form}: any) {
  const {register, setValue, getValues, formState: { errors }} = form;
  return (
    fields.map((itm: any, idx: any) => {
      switch(itm.type){
        case 'text':
          return (
            <div key={idx} className='py-2'>
              <FormControl>
                <FormLabel>{itm.label}</FormLabel>
                <Input disabled={itm.disabled || false} type='text' {...register(itm.id, {
                  onChange: itm.onChange,
                  required: itm.isRequired || false
                })}  />
              </FormControl>
              {errors[itm.id] && errors[itm.id].type === "required" && (
                <span className='text-[10px] text-red-500'>Field ini tidak boleh kosong</span>
              )}
            </div>
          )
        case 'date':
          return (
            <div key={idx} className='py-2'>
              <FormControl>
                <FormLabel>{itm.label}</FormLabel>
                <Input disabled={itm.disabled || false} type='date' {...register(itm.id, {
                  onChange: itm.onChange,
                  required: itm.isRequired || false
                })}  />
              </FormControl>
              {errors[itm.id] && errors[itm.id].type === "required" && (
                <span className='text-[10px] text-red-500'>Field ini tidak boleh kosong</span>
              )}
            </div>
          )
        case 'switch':
          return (
            <div key={idx} className='py-2'>
              <FormControl>
                <FormLabel>{itm.label}</FormLabel>
                <Switch disabled={itm.disabled || false} colorScheme='red' {...register(itm.id, {
                  onChange: itm.onChange,
                  required: itm.isRequired || false
                })} />
                {/* <Input type='date' {...register(itm.id)}  /> */}
              </FormControl>
              {errors[itm.id] && errors[itm.id].type === "required" && (
                <span className='text-[10px] text-red-500'>Field ini tidak boleh kosong</span>
              )}
            </div>
          )
        case 'dropdown':
          return (
            <div key={idx} className='py-2'>
              <FormControl>
                <FormLabel>{itm.label}</FormLabel>
                <Select disabled={itm.disabled || false} placeholder='Pilih..' size='md' {...register(itm.id, {
                  onChange: itm.onChange,
                  required: itm.isRequired || false
                })}>
                  {itm.datasources?.map((v: any, i: any) => (
                    <option key={i} value={v.id}>{v.name}</option>
                  ))}
                </Select>
              </FormControl>
              {errors[itm.id] && errors[itm.id].type === "required" && (
                <span className='text-[10px] text-red-500'>Field ini tidak boleh kosong</span>
              )}
            </div>
          )
        case 'upload-single':
          return (
            <div key={idx} className='py-2'>
              <FormControl>
                <FormLabel>{itm.label}</FormLabel>
                <CloudinaryUploadWidget disabled={itm.disabled || false} setValue={setValue} id={itm.id} type={['jpg', 'jpeg', 'png']} getValues={getValues} mode={'single'} {...register(itm.id, {
                  onChange: itm.onChange,
                  required: itm.isRequired || false
                })} />
                {/* <CloudinaryUploadWidget setValue={setValue} id={itm.id} uwConfig={uwConfig} setPublicId={setPublicId} /> */}
              </FormControl>
              {errors[itm.id] && errors[itm.id].type === "required" && (
                <span className='text-[10px] text-red-500'>Field ini tidak boleh kosong</span>
              )}
            </div>
          )
        case 'upload-multiple':
          return (
            <div key={idx} className='py-2'>
              <FormControl>
                <FormLabel>{itm.label}</FormLabel>
                <CloudinaryUploadWidget disabled={itm.disabled || false} setValue={setValue} id={itm.id} getValues={getValues} mode={'multiple'} type={['jpg', 'jpeg', 'png']} {...register(itm.id, {
                  onChange: itm.onChange,
                  required: itm.isRequired || false
                })} />
                {/* <CloudinaryUploadWidget setValue={setValue} id={itm.id} uwConfig={uwConfig} setPublicId={setPublicId} /> */}
              </FormControl>
              {errors[itm.id] && errors[itm.id].type === "required" && (
                <span className='text-[10px] text-red-500'>Field ini tidak boleh kosong</span>
              )}
            </div>
          )
        case 'upload-sound':
          return (
            <div key={idx} className='py-2'>
              <FormControl>
                <FormLabel>{itm.label}</FormLabel>
                <CloudinaryUploadWidget disabled={itm.disabled || false} setValue={setValue} id={itm.id} getValues={getValues} mode={'single'} type={'mp3'} {...register(itm.id, {
                  onChange: itm.onChange,
                  required: itm.isRequired || false
                })} />
                {/* <CloudinaryUploadWidget setValue={setValue} id={itm.id} uwConfig={uwConfig} setPublicId={setPublicId} /> */}
              </FormControl>
              {errors[itm.id] && errors[itm.id].type === "required" && (
                <span className='text-[10px] text-red-500'>Field ini tidak boleh kosong</span>
              )}
            </div>
          )
      }
    })
  )
}

export default Formbuilder;