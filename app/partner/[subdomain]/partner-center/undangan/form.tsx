"use client"

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Card, Divider, Heading } from "@chakra-ui/react";
import Formbuilder from "../components/Formbuilder";
import { IField } from "../components/Formbuilder";

export type DataInv = {
  coverBrideName: string;
  coverGroomName: string;
  coverBackground: string;
  headerBrideName: string;
  headerGroomName: string;
  headerDate: string;
  headerBackground: string;
  welcomeText: string;
  welcomeDate: string;
  welcomeIsActive: boolean;
  profileBrideName: string;
  profileGroomName: string;
  profileGroomPhoto: string;
  profileBridePhoto: string;
  profileParentBride: string;
  profileParentGroom: string;
  profileSocialMediaGroom: string;
  profileSocialGroomLink: string;
  profileSocialMediaBride: string;
  profileSocialBrideLink: string;
  quoteInitial: string;
  quoteText: string;
  quoteSource: string;
  quoteIsActive: boolean;
}

const DS_SOCIAL_MEDIA = [
  {id: 'instagram', name: 'Instagram'},
  {id: 'facebook', name: 'Facebook'},
  {id: 'twitter', name: 'Twitter'},
]

function Form({form}: any) {
  const fieldsCover: IField<DataInv>[] = [
    {
      id: 'coverGroomName',
      type: 'text',
      label: 'Nama Pengantin Pria di Sampul',
    },
    {
      id: 'coverBrideName',
      type: 'text',
      label: 'Nama Pengantin Wanita di Sampul',
    },
    {
      id: 'coverBackground',
      type: 'upload-single',
      label: 'Foto Cover',
    }
  ]
  const fields: IField<DataInv>[] = [
    {
      id: 'headerBrideName',
      type: 'text',
      label: 'Nama Pendek Pengantin Wanita di Header',
    },
    {
      id: 'headerGroomName',
      type: 'text',
      label: 'Nama Pendek Pengantin Pria di Header',
    },
    {
      id: 'headerDate',
      type: 'date',
      label: 'Tanggal Acara di Header',
    },
    {
      id: 'headerBackground',
      type: 'upload-single',
      label: 'Foto Header',
    }
  ];
  const fieldsWelcome: IField<DataInv>[] = [
    {
      id: 'welcomeIsActive',
      type: 'switch',
      label: 'Aktifkan Menu Ini',
    },
    {
      id: 'welcomeText',
      type: 'text',
      label: 'Kata-Kata Welcome',
    },
    {
      id: 'welcomeDate',
      type: 'date',
      label: 'Tanggal Countdown',
    },
  ];
  const fieldsProfile: IField<DataInv>[] = [
    {
      id: 'profileBrideName',
      type: 'text',
      label: 'Nama Lengkap Pengantin Wanita',
    },
    {
      id: 'profileBridePhoto',
      type: 'upload-single',
      label: 'Foto Pengantin Wanita',
    },
    {
      id: 'profileParentBride',
      type: 'text',
      label: 'Pengantin Wanita Anak Dari',
    },
    {
      id: 'profileSocialMediaBride',
      type: 'dropdown',
      label: 'Social Media Pengantin Wanita',
      datasources: DS_SOCIAL_MEDIA
    },
    {
      id: 'profileGroomName',
      type: 'text',
      label: 'Nama Pengantin Pria di Sampul',
    },
    {
      id: 'profileGroomPhoto',
      type: 'upload-single',
      label: 'Foto Pengantin Pria',
    },
    {
      id: 'profileParentGroom',
      type: 'text',
      label: 'Pengantin Pria Anak Dari',
    },
    {
      id: 'profileSocialMediaGroom',
      type: 'dropdown',
      label: 'Social Media Pengantin Pria',
      datasources: DS_SOCIAL_MEDIA
    },
  ];
  const fieldsQuote: IField<DataInv>[] = [
    {
      id: 'quoteIsActive',
      type: 'switch',
      label: 'Aktifkan Menu Ini',
    },
    {
      id: 'quoteInitial',
      type: 'text',
      label: 'Inisial 2 Pengantin',
    },
    {
      id: 'quoteText',
      type: 'text',
      label: 'Kata-Kata Quote',
    },
    {
      id: 'quoteSource',
      type: 'text',
      label: 'Sumber Quote',
    },
  ];
  return (
    <>
      <div className="w-full px-4 py-4 flex flex-col gap-4">
        <div className="mb-4">
          <Heading as='h3' size='lg'>
            Input Undangan
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
        <Card className="px-6 py-6">
          <p className="font-semibold text-xl text-right">Cover / Sampul</p>
          <Formbuilder fields={fieldsCover} form={form} />
        </Card>
        <Card className="px-6 py-6">
          <p className="font-semibold text-xl text-right">Header</p>
          <Formbuilder fields={fields} form={form} />
        </Card>
        <Card className="px-6 py-6">
          <p className="font-semibold text-xl text-right">Welcome & Countdown</p>
          <Formbuilder fields={fieldsWelcome} form={form} />
        </Card>
        <Card className="px-6 py-6">
          <p className="font-semibold text-xl text-right">Profil Pengantin</p>
          <Formbuilder fields={fieldsProfile} form={form} />
        </Card>
        <Card className="px-6 py-6">
          <p className="font-semibold text-xl text-right">Quote/Ayat</p>
          <Formbuilder fields={fieldsQuote} form={form} />
        </Card>
      </div>
    </>
  );
}

export default Form;